import type { LayoutServerLoad } from "./$types";


export const load = (async ({ locals, params }) => {
    console.log(locals.user)
    if (!locals.homegameData) {
        return {
            user: locals.user,
        }
    }

    return {
        user: locals.user,
        homegameData: locals.homegameData,
    }

});