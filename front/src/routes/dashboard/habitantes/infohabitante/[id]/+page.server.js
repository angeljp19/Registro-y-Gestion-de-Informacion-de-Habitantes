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

    const response2 = await fetch(`http://${process.env.SERVER}/users/getSocialInfo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id}),
        credentials: 'include'
    });

    let result2 = await response2.json()
    if(!result2[0]){
        result2 = [{
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

    const combinedData = {
        data1: result,
        data2: result2
    }

    return combinedData
}