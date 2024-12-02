<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;
</script>

<Navbar class="static">
  <NavBrand href="/dashboard">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SISTEMA DE REGISTRO DE HABITANTES</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi class="cursor-pointer">
      Usuario<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <Dropdown class="w-44 z-20">
      <DropdownItem href="/signup">Crear nuevo usuario</DropdownItem>
      <DropdownItem href="/dashboard/deleteUser">Eliminar usuario</DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/logout" data-sveltekit-preload-data="tap">Cerrar sesion</DropdownItem>
    </Dropdown>
    <NavLi href="/dashboard">Inicio</NavLi>
    <NavLi class="cursor-pointer">
      Habitantes<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <Dropdown class="w-44 z-20">
      <DropdownItem href="/dashboard/habitantes">Agregar</DropdownItem>
      <DropdownItem href="/dashboard/habitantes/buscar">Registros</DropdownItem>
    </Dropdown>
    <NavLi href="/dashboard/habitantes/familias">Familias</NavLi>
    <NavLi href="/dashboard/habitantes/reportes">Reportes</NavLi>
  </NavUl>
</Navbar>