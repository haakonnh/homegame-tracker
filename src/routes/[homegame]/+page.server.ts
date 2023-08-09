import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ locals, params }) => {

    if (!locals.user) {
        throw redirect(303, '/login');
    }
    let permission = false;

    if (locals.user.readable) {
        for (const homegame of locals.user.readable) {
            if (homegame.name === params.homegame) {
                locals.homegameData = homegame;
                permission = true;
                console.log("Homegame set:", homegame )
            }
        }

    }
/* 
    if (params.homegame !== locals.homegameData.name || !permission) {
        throw redirect(303, '/');
    } */

    if (permission) {
        return {
            homegameData: locals.homegameData,
        }
    }

    if (locals.homegameData.name == params.homegame) {
        console.log("Homegame set:", locals.homegameData)
        return {
            homegameData: locals.homegameData,
        }
    }
    throw redirect(303, '/');

    
});

