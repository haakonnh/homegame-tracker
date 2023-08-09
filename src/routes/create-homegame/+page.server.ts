import { redirect, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Action, Actions} from './$types'
import { db } from '$lib/database'


export const load = async ({  locals }) => {
    if (!locals.user) {
        throw redirect(303, '/login');
    }

    if (locals.homegameData) {
        throw redirect(303, '/');
    }

    return {
        user: locals.user,
    };
};

const homegame: Action = async({request, cookies}) => {
    const data = await request.formData();
    const homegameName = data.get('homegame');

    if (typeof homegameName !== 'string' || !homegameName) {
        return fail(400, { fail: true });
    }

    const session = cookies.get('session');

    // search for homegames with same name and return error if it exists
    const homegame = await db.homegames.findUnique({
        where: { name: homegameName },
    });

    if (homegame) {
        return fail(400, { credentials: true });
    }

    const user = await db.user.findUnique({
        where: { userAuthToken: session },
        select: { username: true, role: true, id: true},
    });

    if (!user) {
        return fail(400, { credentials: true });
    }

    const newHomegame = await db.homegames.create({
        data: {
            name: homegameName,
            ownerId: user.id,
        }
    });

    throw redirect(303, `/${newHomegame.id}`)

    

}

export const actions: Actions = { homegame } ;