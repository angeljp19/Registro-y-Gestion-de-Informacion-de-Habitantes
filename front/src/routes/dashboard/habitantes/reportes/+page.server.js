import {redirect, fail} from '@sveltejs/kit';
import 'dotenv/config';
export const actions = {
    form1: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/getByFilter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            ,
            body: JSON.stringify(data)
        });


        if (!response.ok) {
            const result = await response.json()
            return fail(400, {missing: true, result})
        }


        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'reporte.pdf';
        link.click();
        URL.revokeObjectURL(url);
}
}