import { redirect } from "@sveltejs/kit";


export const load = (async ({ locals, params }) => {
    if (!locals.user) {
        throw redirect(303, '/login');
    }

    if (locals.user.readable) {
        for (const homegame of locals.user.readable) {
            if (homegame.name === params.homegame) {
                return {
                    homegameData: homegame,
                }
            }
        }
    }

    if (!locals.homegameData) {
        throw redirect(303, '/create-homegame');
    }
    
    if (params.homegame !== locals.homegameData.name) {
        throw redirect(303, `/${locals.homegameData.name}`);
    }

    const sortedPlayers = locals.homegameData.players.sort((a: any, b: any) => {
        return b.totalScore - a.totalScore;
    });


    return {
        homegameData: locals.homegameData,
        sortedPlayers: sortedPlayers,
    }
});