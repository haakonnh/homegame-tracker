import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import type { Action, Actions} from './$types'

import { db } from '$lib/database'

export const load = async ({ locals }) => {
    if (locals.user) {
        throw redirect(303, '/')
    }

}

const login: Action = async ({ cookies, request }) => {
    const data = await request.formData()
    const username  = data.get('username')
    const password = data.get('password')

    if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
        return fail(400, { fail: true })
    }  

    const user = await db.user.findUnique({ where: { username } })

    if (!user) {
        return fail(400, { credentials: true })
    }

    const userPassword = await bcrypt.compare(password, user.passwordHash)

    if (!userPassword) {
        return fail(400, { credentials: true })
    }

    const authenticatedUser = await db.user.update({
        where: { username: user.username },
        data: {
            userAuthToken: crypto.randomUUID()
        }
    })

    cookies.set('session', authenticatedUser.userAuthToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7 // 1 week
    })

    throw redirect(303, '/')


}

export const actions: Actions = { login }
