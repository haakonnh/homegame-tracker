import { db } from '$lib/database';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = (async ({ event, resolve }) => {
    const session = event.cookies.get('session');

    if (!session) {
        return await resolve(event); 
    }

    

    const user = await db.user.findUnique({
        where: { userAuthToken: session },
        select: { username: true, role: true, id: true, HomegamesRead: {
            select: {
                name: true,
                players: true,
                games: {
                    select: {
                        players: true,
                    }
                    
                },
            }
        }},
    });
    if (typeof user === 'undefined') { return resolve(event); }

    if (!user) {
        return resolve(event);
    }

   

    const homegameData = await db.homegames.findUnique({
        where: { ownerId: user.id },
        select: {
            players: true,
            name: true,
            games: {
                include: {
                    players: true,
                }
            }
        },
    });

    if (!user.HomegamesRead) {
        
        event.locals.user = {
            name: user.username,
            role: user.role.name,
            id: user.id,
            readable: null,
            
        }   
    }

    event.locals.user = {
        name: user.username, 
        role: user.role.name,
        id: user.id,
        readable: user.HomegamesRead,
    }


    
    if (homegameData) {
        event.locals.homegameData = homegameData; // annoying typescript
    }

    return resolve(event);
});