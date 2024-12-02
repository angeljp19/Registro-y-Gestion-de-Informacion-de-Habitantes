import {redirect, fail} from '@sveltejs/kit';
import 'dotenv/config';

export const actions = {
    form1: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/createPerson`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const result = await response.json()
        if(!response.ok){
            console.log(result)
            return fail(400, {missing: true, result})

        }
        const id = result.id
        throw redirect(303, `habitantes/infosocial/${id}`)      
    }
}