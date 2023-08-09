import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ locals, params }) => {
    console.log("Hello")

    if (!locals.user) {
        throw redirect(303, '/login');
    }

    if (locals.user.readable) {
        for (const homegame of locals.user.readable) {
            if (homegame.name === params.homegame) {
                console.log("Homegame okay:", homegame )
                return {
                    homegameData: homegame,
                    readable: true,
                }
                
            }
        }

    }
/* 
    if (params.homegame !== locals.homegameData.name || !permission) {
        throw redirect(303, '/');
    } */


    if (locals.homegameData.name == params.homegame) {
        console.log("Homegame set:", locals.homegameData)
        return {
            homegameData: locals.homegameData,
        }
    }
    throw redirect(303, '/');

    
});

