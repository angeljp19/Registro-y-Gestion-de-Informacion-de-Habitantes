<script>
    import { Label, Input, Select, Textarea, Button, TabItem, Tabs} from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { enhance } from '$app/forms';
    import { Modal } from 'flowbite-svelte';

    export let data
    let items = data.result

    let parestesco = [
    { value: 'MADRE', name: 'MADRE' },
    { value: 'PADRE', name: 'PADRE' },
    { value: 'ESPOSO', name: 'ESPOSO' },
    { value: 'ESPOSA', name: 'ESPOSA' },
    { value: 'HIJO', name: 'HIJO' },
    { value: 'HIJA', name: 'HIJA' },
    { value: 'HERMANO', name: 'HERMANO' },
    { value: 'HERMANA', name: 'HERMANA' },
    { value: 'ABUELO', name: 'ABUELO' },
    { value: 'ABUELA', name: 'ABUELA' },
    { value: 'TIO', name: 'TIO' },
    { value: 'TIA', name: 'TIA' },
    { value: 'SOBRINO', name: 'SOBRINO' },
    { value: 'SOBRINA', name: 'SOBRINA' },
    { value: 'PRIMO', name: 'PRIMO' },
    { value: 'PRIMA', name: 'PRIMA' },
    { value: 'AMIGO', name: 'AMIGO' },
    { value: 'AMIGA', name: 'AMIGA' },
    { value: 'SUEGRO', name: 'SUEGRO' },
    { value: 'SUEGRA', name: 'SUEGRA' }
];


    let defaultModal = false;
    export let form

    let nombres = ''
    let apellidos = ''
    let direccionvivienda = ''
    let cedula = ''

    $: if(form?.result){
        try{
            nombres = form.result[0].nombres
            apellidos = form.result[0].apellidos
            direccionvivienda = form.result[0].direccionvivienda
            cedula = form.result[0].cedula
        }catch{
            nombres = ''
            apellidos = ''
            direccionvivienda = ''
            cedula = ''
        }
        
    }
    let result

    $: if (form?.missing) {
        defaultModal = true;
        result = form?.result
        form = ''
    }

    let nombresFamiliar = ''
    let apellidosFamiliar = ''
    let direccionFamiliar = ''
    let idFamiliar = ''
    function cargar(nombres, apellidos, direccion, id){
        nombresFamiliar = nombres
        apellidosFamiliar = apellidos
        direccionFamiliar = direccion
        idFamiliar = id
    }

    let items2 = []

    $: if(form?.result2){
        items2 = [...form.result2];
    }

</script>

<Modal title="Error al enviar datos" bind:open={defaultModal} autoclose outsideclose>
    <p>{result.message ?? result.error[0].message}</p>
</Modal>
<div class="w-full h-full">
    <Tabs>
        <TabItem open title='Crear Famlia'>
            <div class="flex flex-col justify-center items-center">
                <p class="text-white font-light mb-4 mt-2 text-center">Ingrese el numero de cedula de la persona que se tomara como jefe de la familia</p>
                    <div class="grid grid-cols-1 w-full gap-5">
                        <form method="post" use:enhance  action="?/form1">
                            <div class="flex justify-center items-center gap-4">
                                <Input name='cedula' class="w-1/2 md:w-[200px]"></Input>
                                <Button type='submit'>Cargar</Button>
                            </div>
                        </form>
                        <div class="flex flex-col md:flex-row items-center justify-center md:gap-5">
                            <Label class='w-full md:w-[550px]'>Nombres
                                <Input readonly bind:value={nombres} ></Input>
                            </Label>
                            <Label class='w-full md:w-[550px]'>Apellidos
                                <Input readonly  bind:value={apellidos}></Input>
                            </Label>
                        </div>
                        <div class="flex justify-center">
                            <Label class="w-full md:w-[1000px]">
                                <Textarea readonly rows=5 bind:value={direccionvivienda}></Textarea>
                            </Label>  
                        </div>
                        <form method="post" use:enhance  action="?/form2">
                            <input name="cedula" class="hidden" bind:value={cedula}>
                            <div class="w-full flex justify-center items-center">
                                <Button class='w-1/2' type="submit">Crear familia</Button>
                            </div> 
                        </form>
                    </div>
            </div>
        </TabItem>
        <TabItem title='Agregar familiar'>
            <div class="flex flex-col md:flex-row w-full">
                <div class='w-full md:w-1/2 flex justify-center items-center'>
                    <form method="post" use:enhance action="?/form3" class="w-full">
                        <div class="flex flex-col justify-center items-center gap-4">
                            <Label>Cedula del Jefe de familia
                                <Input name="cedulaJefe"/>
                            </Label> 
                            <div class="flex flex-col md:flex-row w-full gap-5">
                                <Label class="w-full">Nombres
                                    <Input bind:value={nombresFamiliar} readonly/>
                                </Label>
                                <Label class="w-full">Apellidos
                                    <Input bind:value={apellidosFamiliar} readonly/>
                                </Label>
                            </div>
                            <Label class="w-full">Direccion
                                <Textarea bind:value={direccionFamiliar} rows=4 readonly/>
                            </Label>
                            <input name='id' class="hidden" bind:value={idFamiliar}>
                            <Label class="w-full md:w-1/2">
                                Parentesco
                                <Select name="parentesco" class="mt-2" 
                                items={parestesco} 
                                placeholder="Opciones"/>
                            </Label>
                            <Button class='w-1/2' type="submit">Cargar</Button>
                        </div>
                    </form>
                </div>
                <div class='w-full flex justify-center items-center mt-5 md:mt-0'>
                    <div class="overflow-auto h-[500px] w-full p-5">
                        <Table striped={true} {items} placeholder="Buscar por nombre" hoverable={true} filter={(item, searchTerm) => item.nombres.toLowerCase().includes(searchTerm.toLowerCase())} >
                            <TableHead>
                              <TableHeadCell>Nombres</TableHeadCell>
                              <TableHeadCell>Apellidos</TableHeadCell>
                              <TableHeadCell>Cedula</TableHeadCell>
                              <TableHeadCell></TableHeadCell>
                            </TableHead>
                            <TableBody tableBodyClass="divide-y">
                              <TableBodyRow slot="row" let:item>
                                <TableBodyCell>{item.nombres}</TableBodyCell>
                                <TableBodyCell>{item.apellidos}</TableBodyCell>
                                <TableBodyCell>{item.cedula ?? ''}</TableBodyCell>
                                <TableBodyCell><Button color='green' on:click={() => {cargar(item.nombres, item.apellidos, item.direccionvivienda, item.id)}}>Cargar</Button></TableBodyCell>
                              </TableBodyRow>
                            </TableBody>
                          </Table>
                    </div>
                </div>
            </div>
        </TabItem>
        <TabItem title='Buscar'>
            <div class="w-full flex flex-col justify-center items-center">
                <form method="post" use:enhance action="?/form4" class="flex w-full justify-center gap-5 mb-10">
                    <Label>
                        <Input name='cedula'/>
                    </Label>
                    <Button type="submit">Buscar</Button>
                </form>
                <div class=" overflow-auto max-h-[450px]">
                    <Table striped={true} >
                        <TableHead>
                          <TableHeadCell>Nombres</TableHeadCell>
                          <TableHeadCell>Apellidos</TableHeadCell>
                          <TableHeadCell>Cedula</TableHeadCell>
                          <TableHeadCell>Parentesco</TableHeadCell>
                        </TableHead>
                        <TableBody tableBodyClass="divide-y">
                            {#each items2 as item}
                                <TableBodyRow slot="row">
                                    <TableBodyCell>{item.nombres ?? ''}</TableBodyCell>
                                    <TableBodyCell>{item.apellidos ?? ''}</TableBodyCell>
                                    <TableBodyCell>{item.cedula ?? ''}</TableBodyCell>
                                    <TableBodyCell>{item.parentesco ?? ''}</TableBodyCell>
                                    {#if item.parentesco == 'JEFE'}
                                        <TableBodyCell><form action="?/form5" method="post">
                                            <input class="hidden" name="idfamilia" value={item.idfamilia}>
                                            <Button type='submit'>Eliminar Familia</Button>
                                        </form></TableBodyCell>
                                    {:else}
                                    {#if item.parentesco}
                                    <TableBodyCell><form action="?/form6" method="post">
                                        <input class="hidden" name="id" value={item.id}>
                                        <Button color='red' type='submit'>Eliminar</Button>
                                    </form></TableBodyCell>
                                    {/if}
                                    {/if}
                                </TableBodyRow>
                            {/each}
                        </TableBody>
                      </Table>
                </div>
            </div>
        </TabItem>
    </Tabs>
</div>
