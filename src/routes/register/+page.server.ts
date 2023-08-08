import {fail, redirect } from '@sveltejs/kit'
import type { Action, Actions} from './$types'    
import bcrypt from 'bcrypt'

import { db } from '$lib/database'

enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export const load = async ({ locals }) => {
    if (locals.user) {
        throw redirect(303, '/')
    }


}



const register: Action = async ({request}) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    console.log({ username, password })

    if (typeof username !== 'string' || typeof password !== 'string' || !username) {
        return fail(400, { fail: true })
    }

    const user = await db.user.findUnique({
        where: { username }
    })

    if (user) {
        return fail(400, { user: true })
    }

    await db.user.create({
        data: {
            username,
            passwordHash: await bcrypt.hash(password, 10),
            userAuthToken: crypto.randomUUID(),
            role: { connect: { name: Roles.USER }, },
        }
    })

    throw redirect(303, '/login')
}

export const actions: Actions = { register }