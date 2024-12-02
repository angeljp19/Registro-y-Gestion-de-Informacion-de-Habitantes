import { error } from '@sveltejs/kit';
import 'dotenv/config';

/** @type {import('./$types').PageLoad} */
export async function load() {
    try{
        const response = await fetch(`http://${process.env.SERVER}/users/getHabitantes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
            credentials: 'include'
        });

        if(response.ok){
            const result = await response.json()
            return {result}
        }else{
            
        }
    }catch(error){
        return error
    }
}

export const actions = {
    form1: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/deletePerson`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });
    }
}