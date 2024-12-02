import {fail} from '@sveltejs/kit';
import 'dotenv/config';

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
        const response = await fetch(`http://${process.env.SERVER}/users/getPersonByCedula`, {
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
        return {result}
    },
    form2: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/createFamily`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
         const result = await response.json()

         if(!response.ok){
            return fail(400, {missing: true, result})
        }
        return {result}
    },
    form3: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/addFamily`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        const result = await response.json()
        if(!response.ok){
            return fail(400, {missing: true, result})
        }

    },

    form4: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/getFamily`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        let result2 = await response.json()
        if(response.ok){
            return {result2}
        }else{
            result2 = [{}]
            return {result2}
        }
    },

    form5: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/deleteFamily`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });
    },
    form6: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/deletePersonFamily`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });
    }
}