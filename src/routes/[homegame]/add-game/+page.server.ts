
import { db } from '$lib/database';
import type { Actions } from '../$types';
import { redirect } from '@sveltejs/kit';



export const actions: Actions =  {
    default: async ({ locals, request, params }) => {
        if (!locals.user) {
            throw redirect(303, '/login');
        }
        if (!locals.homegameData) {
            if (!locals.user.readable) {
                throw redirect(303, '/create-homegame');
            }
        }
        const homegameName: string = params.homegame;
        // get the formdata
        const formData = await request.formData();

        const players = [];
        let currentPlayer = {} as any;

        
        
        const game = await db.game.create({
            data: {
                homegame: { connect: { name: homegameName } },
            },
            include: {
                players: true,
            },
        });

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

        
        const playerArray: any[] = [];
        
        for (const player of players) {
            const existingPlayer = await db.player.findUnique({
                where: { homegameName_name: { homegameName, name: player.name } },
              });
            if (existingPlayer) {
                const newPlayer = await db.player.update({
                    where: { homegameName_name: {homegameName, name: player.name} },
                    data: {
                        totalScore: { increment: player.score },
                        scores: {
                            create: {
                                game: { connect: { id: game.id } },
                                score: player.score,
                        },
                    },
                },
                });
            }
            else {
                const newPlayer = await db.player.create({
                    data: {
                        homegame: { connect: { name: homegameName } },
                        name: player.name,
                        totalScore: player.score,
                        scores: {
                            create: {
                                game: { connect: { id: game.id } },
                                score: player.score,
                            }
                        },
                    },
                });
            }
                

            }


        // 
        /* players: {
            connect: playerArray.map((player) => ({ id: player.id })),
        }, */
        
        throw redirect(303, `/${homegameName}`);

        
    }
}