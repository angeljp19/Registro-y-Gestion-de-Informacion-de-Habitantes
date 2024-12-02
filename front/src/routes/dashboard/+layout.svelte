<script>
    import { onMount } from 'svelte';
    import Navbar from "../../components/dashboard/navbar.svelte";
    let username;
        let rol;

        onMount(() => {
            username = localStorage.getItem('username');
            rol = localStorage.getItem('rol');
        });
</script>

<div class="flex flex-col h-full">
    <div class="w-full mb-3">
        <Navbar {username} />
    </div>
    <div class="w-full h-full overflow-auto">
        <slot />
    </div>
</div>
