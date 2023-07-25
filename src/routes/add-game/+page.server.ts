import { db } from '$lib/firebase'
import { Timestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import type { Actions } from './$types';
import { addGameToHomegame } from '$lib/utils/addGame';
import { generateUniqueId } from '$lib/utils/generateUniqueId';
import { get } from 'svelte/store';
import { auth } from 'firebase-admin';
import { authStore } from '$lib/stores/authStore';
import { redirect } from '@sveltejs/kit';


export const actions: Actions =  {
    default: async ({ locals, request, params }) => {
        //event.preventDefault();
        const data = await request.formData();

        const formDataArray = Array.from(data.entries());
        
        authStore.subscribe((curr: any) => {
            console.log('User on mount: ', curr?.currentUser?.uid);
        })


        console.log('User', get(authStore).currentUser);
        //fetchHomegameData(get(authStore).currentUser?.uid);

        const playerDataObject: any = {};
        for (let i = 0; i < formDataArray.length; i += 2) {
            const playerId = generateUniqueId(); // Replace generateRandomId() with your random ID generation logic
            const name = formDataArray[i][1];
            const delta = formDataArray[i + 1][1];
            playerDataObject[playerId] = { name, delta };
        }
        console.log(playerDataObject);
        const newGameData = {
            date: Timestamp.fromDate(new Date()),
            players: playerDataObject,
          };
        console.log( 'New data: ', newGameData);
        try {
            await addGameToHomegame('yAW59gEcHmpeqQesvwWA', newGameData);
            console.log('Did update')
            redirect(302, '../login');
        }

        catch (error) {
            console.error('Error adding game to homegame:', error);
        }
        
}
}