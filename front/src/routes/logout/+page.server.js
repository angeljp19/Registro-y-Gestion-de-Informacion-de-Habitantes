import {redirect, fail} from '@sveltejs/kit';

export async function load({ cookies }) {
    cookies.set('token', '', {
        path: '/',
        httpOnly: true, // Si fue configurada como HttpOnly
        secure: false, // Si fue configurada como Secure
        maxAge: 0
    })
    redirect(303, '/login')
}