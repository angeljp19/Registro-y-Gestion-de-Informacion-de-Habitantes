import { fail,redirect } from '@sveltejs/kit';
import 'dotenv/config';

export const load = async ({params}) => {
    const id = params.id
    const response = await fetch(`http://${process.env.SERVER}/users/getPerson`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id}),
        credentials: 'include'
    });

    let result = await response.json()
    if(!result[0]){
        throw redirect(303, '/dashboard/habitantes/buscar')
    }


    const response2 = await fetch(`http://${process.env.SERVER}/users/getSocialInfo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id}),
        credentials: 'include'
    });

    result = await response2.json()
    if(result[0]){
        return {result}
    }else{
        return [{
            "idhabitante": id,
            "granmisionvivienda": null,
            "barrionuevobarriotricolor": null,
            "beneficiadojefepatria": null,
            "partohumanizado": null,
            "semanasparto": "",
            "fechaparto": "",
            "ivss": null,
            "lactancia": null,
            "bajopeso": null,
            "beneficiadoinn": null,
            "chambajuvenil": null,
            "amormayor": null,
            "otrosbeneficios": "",
            "registradoenpatria": null,
            "personacondiscapacidad": null,
            "tipodiscapacidad": "",
            "carnetconapdis": null,
            "beneficiadojosegregoriohernandez": null,
            "beneficiadovenapp": null,
            "padecimientos": "",
            "medicinas": "",
            "patioproductivo": null,
            "descripcionpatioproductivo": "",
            "habilidadesdestrezas": "",
            "mascotas": null,
            "brigadistamsv": "",
            "liderdecalle": ""
        }]
    }
}

export const actions = {
    form1: async ({request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries(formData.entries())
        const response = await fetch(`http://${process.env.SERVER}/users/addSocialInfo`, {
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