import { attemptHomegameAuthQuery } from '$lib/utils/attemptHomegameAuthQuery';
import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {

    const uid = locals.userID;
    const awaitAuth = await attemptHomegameAuthQuery(uid);

    if (!awaitAuth) {
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


}) satisfies PageServerLoad;