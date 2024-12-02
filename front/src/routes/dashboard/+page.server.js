import 'dotenv/config';

export async function load({fetch}) {
    const response2 = await fetch(`http://${process.env.SERVER}/users/getStadistic`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
        credentials: 'include',
    });

    const result = await response2.json() 
    if(response2.ok){
        return {result}
    }
}
