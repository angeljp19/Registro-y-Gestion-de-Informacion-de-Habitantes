import {redirect} from '@sveltejs/kit'
import 'dotenv/config';
export async function load({cookies, fetch}) {
    const cookie = cookies.get('token');
    const response = await fetch(`http://${process.env.SERVER}/users/verifyToken`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cookie}),
        credentials: 'include',
    });

    if (!response.ok) {
        throw redirect(302, '/login')}}