import { attemptHomegameAuthQuery } from "$lib/utils/attemptHomegameAuthQuery";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = (async ({ cookies, locals }) => {
        
        const uid = locals.userID;
        if (!uid) {
            console.log('redirecting to login');
            return {
                isLoggedIn: false,
                uid: null
            }
        }

        return {
            isLoggedIn: true,
            uid: uid
        }

});