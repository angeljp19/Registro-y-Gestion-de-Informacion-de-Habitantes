<script>
    import { Card, Button, Label, Input} from 'flowbite-svelte';
    import { enhance } from '$app/forms';
    import { Modal } from 'flowbite-svelte';
    let defaultModal = false;
    export let form;

    let result

    $: if (form?.missing) {
        defaultModal = true;
        result = form?.result
        form = ''
    }
</script>

<Modal title="Error al enviar datos" bind:open={defaultModal} autoclose outsideclose>
    <p>{result.message ?? result.error[0].message}</p>
</Modal>

<div class="flex justify-center items-center h-full">
    <Card >
        <div class="flex flex-col justify-center items-center text-center">
            <p class="mb-10">Se eliminara de forma permanente el usuario en la base de datos, procure estar seguro de su eliminacion</p>
            <form action="?/form1" method="post" use:enhance>
                <Label class='w-full mb-5'>Usuario
                    <Input name='username'></Input>
                </Label>
                <div class='w-full flex justify-center mb-5'>
                    <Button type="submit">Eliminar usuario</Button>
                </div>
            </form>
        </div>

    </Card>
</div>
    
    
