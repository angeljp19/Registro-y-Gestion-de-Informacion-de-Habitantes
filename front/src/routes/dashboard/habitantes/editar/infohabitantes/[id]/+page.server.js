import { fail, redirect } from '@sveltejs/kit';
import 'dotenv/config';

export const load = async ({params}) => {
    const id = params.id

    const exist = await fetch(`http://${process.env.SERVER}/users/getPerson`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id}),
        credentials: 'include'
    });

    let existresult = await exist.json()
    if(!existresult[0]){
        throw redirect(303, '/dashboard/habitantes/buscar')
    }

    const response = await fetch(`http://${process.env.SERVER}/users/getPerson`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id}),
        credentials: 'include'
    });


    const result = await response.json()
    return {result}

}

export const actions = {
    form1: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/updatePerson`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const result = await response.json()
        if(!response.ok){
            return fail(400, {missing: true, result})
        }
        throw redirect(303, '/dashboard/habitantes/buscar')
    }
}