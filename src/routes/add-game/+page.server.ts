
import { db } from '$lib/database';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';



export const actions: Actions =  {
    default: async ({ locals, request }) => {
        if (!locals.user) {
            throw redirect(303, '/login');
        }
        if (!locals.homegameData) {
            throw redirect(303, '/create-homegame');
        }

        // get the formdata
        const formData = await request.formData();
        console.log(formData)

        const players = [];
        let currentPlayer = {} as any;

        for (const [key, value] of formData.entries()) {
            if (key === 'name') {
                currentPlayer.name = value;
            } else if (key === 'winnings') {
                currentPlayer.score = parseInt(value.toString());
                currentPlayer.totalScore = parseInt(value.toString());
                players.push({ ...currentPlayer });
                currentPlayer = {}; // Reset for the next player
            }
        }

        const homegameName: string = locals.homegameData.name;
        const playerArray: any[] = [];
        
        for (const player of players) {
            const newPlayer = await db.player.upsert({
                where: { homegameName_name: {homegameName, name: player.name} },
                update: {
                    score: player.score,
                    totalScore: { increment: player.score },
                },
                create: {
                    homegame: { connect: { name: homegameName } },
                    name: player.name,
                    score: player.score,
                    totalScore: player.score,
                },
            });
            playerArray.push(newPlayer);
        }

        
        const game = await db.game.create({
            data: {
                homegame: { connect: { name: locals.homegameData.name } },
                players: {
                    connect: playerArray.map((player) => ({ id: player.id })),
                },
            },
            include: {
                players: true,
            },
        });
        
        throw redirect(303, `/${locals.homegameData.name}`);

        
    }
}