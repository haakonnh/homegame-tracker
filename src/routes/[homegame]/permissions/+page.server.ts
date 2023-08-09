import { db } from "$lib/database";
import { redirect, fail } from "@sveltejs/kit";
import type { Action, Actions } from "./$types";
import type { PageServerLoad } from "./$types";


export const load = async ({  locals, params }) => {
    if (!locals.user) {
        throw redirect(303, '/login');
    }
    if (!locals.homegameData) {
        throw redirect(303, '/');
    }
    if (locals.homegameData.name != params.homegame) {
        throw redirect(303, '/');
    }

    return {
        user: locals.user,
        homegameData: locals.homegameData,
    }
}

const addpermissions: Action = async({request, params}) => {
    const data = await request.formData();
    const username = data.get('username');

    if (typeof username !== 'string' || !username) {
        return fail(400, { fail: true });
    }

    const user = await db.user.findUnique({
        where: { username: username },
        select: { id: true },
    });

    if (!user) {
        return fail(400, { credentials: true });
    }

    const homegame = await db.homegames.findUnique({
        where: { name: params.homegame },
        select: { id: true },
    });

    if (!homegame) {
        return fail(400, { credentials: true });
    }

    const updatedHomegame = await db.homegames.update({
        where: { id: homegame.id },
        data: {
            readPlayers: {
                connect: { id: user.id },
            },
        },
    });
    
        

}

export const actions: Actions = { addpermissions };