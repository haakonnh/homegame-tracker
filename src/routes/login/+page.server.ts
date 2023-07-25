import { db } from '$lib/firebase';
import { attemptHomegameAuthQuery } from '$lib/utils/attemptHomegameAuthQuery';
import { query, collection, where, getDocs } from 'firebase/firestore';
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
    const homegamesRef = query(collection(db, 'homegames'), where('owner', '==', uid));
    const querySnapshot = await getDocs(homegamesRef);

    //console.log(get(homegameLocalStorage))

    const homegameData = querySnapshot.docs[0].data();
    for (const gameId in homegameData.games) {
        const game = homegameData.games[gameId];
        if (typeof game.date === 'string') {
            // If game.date is stored as a string, create a Date object from it
            game.date = new Date(game.date);
        }
        if (game.date instanceof Date) {
            // Convert the Date object to a string
            game.date = game.date.toISOString();
        }
        // Add similar conversion for other non-serializable properties if needed
    }

    // Serialize and deserialize the entire homegameData object to ensure all properties are serializable
    const serializedHomegameData = JSON.parse(JSON.stringify(homegameData));



    

    return {
        isLoggedIn: true,
        uid: uid,
        homegameData: serializedHomegameData
    }


}) satisfies PageServerLoad;