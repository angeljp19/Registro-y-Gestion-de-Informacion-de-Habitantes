<script>
    import { goto } from "$app/navigation"
    import { Label, Input, Button, Dropdown, DropdownItem  } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
	/** @type {import('./$types').PageData} */
	export let data;
  let items = data.result
</script>

<div class="pb-20 w-full h-full flex lg:pb-0">
  <div class="w-full h-full  mr-5 ml-5 overflow-auto">
    <Table striped={true} {items} placeholder="Buscar por nombre" hoverable={true} filter={(item, searchTerm) => item.nombres.toLowerCase().includes(searchTerm.toLowerCase())} >
      <TableHead>
        <TableHeadCell sort={(a, b) => a.nombres.localeCompare(b.nombres)} defaultSort>Nombres</TableHeadCell>
        <TableHeadCell sort={(a, b) => a.apellidos.localeCompare(b.apellidos)}>Apellidos</TableHeadCell>
        <TableHeadCell>Cedula</TableHeadCell>
        <TableHeadCell>Genero</TableHeadCell>
        <!-- <TableHeadCell>Edad</TableHeadCell> -->
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow slot="row" let:item>
          <TableBodyCell>{item.nombres}</TableBodyCell>
          <TableBodyCell>{item.apellidos}</TableBodyCell>
          <TableBodyCell>{item.cedula ?? ''}</TableBodyCell>
          <TableBodyCell>{item.genero ?? ''}</TableBodyCell>
          <!-- <TableBodyCell>{item.edad ?? ''}</TableBodyCell> -->
          <TableBodyCell>
            <div class="flex w-full items-center justify-center gap-5">
              <Button color='green'>Editar<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
              <Dropdown>
                <DropdownItem href={`/dashboard/habitantes/editar/infohabitantes/${item.id}`}>Info Habitante</DropdownItem>
                <DropdownItem  href={`/dashboard/habitantes/editar/infosocial/${item.id}`}>Info Social</DropdownItem>
              </Dropdown>
              <form method="post" action="?/form1">
                <input class="hidden" name="id" value={item.id}>
                <Button type='submit' color='red'>Eliminar</Button>
              </form>
              <Button href={`/dashboard/habitantes/infohabitante/${item.id}`} color='yellow'>Info completa</Button>
            </div>
          </TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
  </div>
</div>
