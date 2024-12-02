import {redirect, fail} from '@sveltejs/kit';
import 'dotenv/config';
export const actions = {
    form1: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) 
        })

        if (response.ok){
            redirect(303, '/dashboard')
        }else{
            const result = await response.json()
            return fail(400, {missing: true, result})
        }
    }
}