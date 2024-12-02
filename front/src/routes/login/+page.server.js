import {redirect, fail} from '@sveltejs/kit';
import 'dotenv/config';

export const actions = {
    form1: async ({request, cookies}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/verifyUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const result = await response.json()
        if (response.ok) {
            const cookies1 = response.headers.get('set-cookie');
            const tokenCookie = cookies1?.split(';').find(cookie => cookie.trim().startsWith('token='));
            const token = tokenCookie ? tokenCookie.split('=')[1] : null;
            cookies.set('token', token, {path: '/', httponly: true, secure: false, sameSite: 'lax'})
            redirect(303, '/dashboard')
        }else{
            return fail(400, {missing: true, result})
        }  
    }
}