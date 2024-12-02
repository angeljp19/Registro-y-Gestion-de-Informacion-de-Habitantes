<script>
    import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
    let username = ''
    let pw = ''
    import { goto } from "$app/navigation"
    
    async function login(event) {
        event.preventDefault()

        const response = await fetch('http://192.168.1.15:3000/users/verifyUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, pw }),
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            goto('/dashboard')
        }else{
            const errorData = await response.json()
            console.log(errorData.message)
        }  
    }
</script>

<div class="w-full h-full flex justify-center items-center">
    <Card>
        <form on:submit={login} class="flex flex-col space-y-6" action="/">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Inicia Sesión</h3>
          <Label class="space-y-2">
            <span>Nombre de usuario</span>
            <Input bind:value={username} type="text" name="username" placeholder="" required />
          </Label>
          <Label class="space-y-2">
            <span>Contraseña</span>
            <Input bind:value={pw} type="password" name="pw" placeholder="" required />
          </Label>
          <div class="flex items-start">
            <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Olvidaste tu contraseña? </a>
          </div>
          <Button type="submit" class="w-full">Inicia sesión</Button>
          <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
            No estas registrado? <a href="/signup" class="text-primary-700 hover:underline dark:text-primary-500"> Crea una cuenta</a>
          </div>
        </form>
      </Card>
  </div>
  
