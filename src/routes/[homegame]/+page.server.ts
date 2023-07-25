
import { redirect } from "@sveltejs/kit";
import { attemptHomegameAuthQuery } from "$lib/utils/attemptHomegameAuthQuery";
import { fetchHomegameData, getHomegameDataFromLocalStorage } from "$lib/stores/homegameStore";
import type { HomegameData } from "$lib/types";
import { db } from "$lib/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import { homegameLocalStorage } from "$lib/stores/homegameLocalStorage.js";
import { get } from "svelte/store";

export const load = (async ({ cookies, locals }) => {


    const uid = locals.userID;
    if (!uid) {
        console.log('redirecting to login');
        throw redirect(301, '../login');
    }

    const homegamesRef = query(collection(db, 'homegames'), where('owner', '==', uid));
    const querySnapshot = await getDocs(homegamesRef);

    console.log(get(homegameLocalStorage))

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
});

