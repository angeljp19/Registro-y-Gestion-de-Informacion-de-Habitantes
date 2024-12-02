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

<div class="w-full h-full flex justify-center items-center">
    <Card>
        <form use:enhance method="post" class="flex flex-col space-y-6" action="?/form1">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Inicia Sesión</h3>
          <Label class="space-y-2">
            <span>Nombre de usuario</span>
            <Input type="text" name="username" placeholder="" required />
          </Label>
          <Label class="space-y-2">
            <span>Contraseña</span>
            <Input  type="password" name="pw" placeholder="" required />
          </Label>
          <div class="flex items-start">
            <a href="/changePassword" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Olvidaste tu contraseña? </a>
          </div>
          <Button type="submit" class="w-full">Inicia sesión</Button>
        </form>
      </Card>
  </div>