<script>
    import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
    let username = ''
    let email = ''
    let pw = ''
    import { goto } from "$app/navigation"

    async function signup(event) {
        event.preventDefault()
        const response = await fetch('http://192.168.1.15:3000/users/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, pw }) 
        })

        if (response.ok){
            goto('/login')
        }else{
            const errorData = await response.json()
            console.log(errorData.message)
        }
    }
</script>
<div class="w-full h-full flex justify-center items-center">
    <Card>
        <form on:submit={signup} class="flex flex-col space-y-6" action="/">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Crea una cuenta</h3>
          <Label class="space-y-2">
            <span>Nombre de usuario</span>
            <Input bind:value={username} type="text" name="username" placeholder="" required />
          </Label>
          <Label class="space-y-2">
            <span>Email</span>
            <Input bind:value={email} type="email" name="Email" placeholder="" required />
          </Label>
          <Label class="space-y-2">
            <span>Contraseña</span>
            <Input bind:value={pw} type="password" name="pw" placeholder="" required />
          </Label>
          <Button type="submit" class="w-full">Crear cuenta</Button>
        </form>
      </Card>
  </div>
