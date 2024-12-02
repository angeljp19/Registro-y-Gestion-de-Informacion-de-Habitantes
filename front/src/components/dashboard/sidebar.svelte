<script>
   import { page } from '$app/stores';
   import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
   import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
   $: activeUrl = $page.url.pathname;
   let activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
   let nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
 </script>
 
 <Sidebar {activeUrl} {activeClass} {nonActiveClass}>
   <SidebarWrapper>
     <SidebarGroup>
       <SidebarItem label="Agregar" href="/dashboard/habitantes">
       </SidebarItem>
       <SidebarItem label="Eliminar" href="/docs/components/accordion">
       </SidebarItem>
       <SidebarItem label="Actualizar" href="/docs/components/alert">
       </SidebarItem>
       <SidebarItem label="Buscar" href="/dashboard/habitantes/buscar">
       </SidebarItem>
     </SidebarGroup>
   </SidebarWrapper>
 </Sidebar>