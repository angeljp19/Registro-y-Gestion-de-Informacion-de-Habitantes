<script>
    import { Label, Input, Select, Textarea, Button } from 'flowbite-svelte';
    import { enhance } from '$app/forms';

    
    import { Modal } from 'flowbite-svelte';

    let defaultModal = false;
    /** @type {import('./$types').PageData} */

    /** @type {import('./$types').ActionData} */
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

<div class="w-full h-full ">
    <form method="post" use:enhance  action="?/form1" class="flex flex-col justify-center h-full items-center overflow-auto">
        <div class="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14 p-5 overflow-auto"> 
            <div class="w-full md:col-span-3">
                <Label for="nombres" class="block mb-2">Nombres</Label>
                <Input id="nombres" name='nombres' placeholder=" " />
            </div>               
            <div class="w-full md:col-span-3">
                <Label for="Apellidos" class="block mb-2">Apellidos</Label>
                <Input id="default-Input" name="apellidos" placeholder=" " />
            </div>
            <div class="w-full md:flex md:col-span-3">
                <div class="w-full md:mr-5">
                    <Label for="cedula" class="block mb-2">Cedula</Label>
                    <Input id="cedula" name="cedula" placeholder=" " /> 
                </div>                
                <div class="w-full">
                    <Label for="fnacimiento" class="block mb-2">Fecha nacimiento</Label>
                    <Input id="fnacimiento" name="fnacimiento" placeholder="año/mes/dia" /> 
                </div> 
            </div>   
            <div class="w-full md:flex md:col-span-3">
                <div class="w-full md:mr-5">
                    <Label>
                        Genero
                        <Select name="genero" class="mt-2" items={[{value:"MASCULINO", name:"MASCULINO"}, {value:"FEMENINO", name:"FEMENINO"}]}/>
                    </Label>
                </div>                
                <div class="w-full">
                    <Label>
                        Instruccion
                        <Select name="instruccion" class="mt-2" 
                        items={[{value:"NINGUNA", name:"NINGUNA"}, {value:"EDUCACION BASICA", name:"EDUCACION BASICA"}, {value:"BACHILLER", name:"BACHILLER"}, {value:"UNIVERSITARIA", name:"UNIVERSITARIA"}]}/>
                    </Label>
                </div> 
            </div>   
            <div class="w-full md:flex md:col-span-3">
                <div class="w-full md:mr-5">
                    <Label for="sectortrabajo" class="block mb-2">Sector de trabajo
                        <Select name="sectortrabajo" class='mt-2' 
                        items={[{value:"NINGUNO", name:"NINGUNO"}, {value:"PUBLICO", name:"PUBLICO"}, {value:"PRIVADO", name:"PRIVADO"}]} />
                    </Label>   
                </div>              
                <div class="w-full">
                    <Label>
                        Ocupacion
                        <Select name="ocupacion" class="mt-2" 
                        items={[{value:"TRABAJADOR", name:"TRABAJADOR"}, {value:"ESTUDIANTE", name:"ESTUDIANTE"}, {value:"HOGAR", name:"HOGAR"}]}/>
                    </Label>
                </div> 
            </div>   
            <div class="w-full md:flex md:col-span-3">
                <div class="w-full md:mr-5">
                    <Label for="estatusvivienda" class="block mb-2">Estatus de vivienda</Label>
                    <Input id="estatusvivienda" name="estatusvivienda" placeholder="" /> 
                </div>  
                <div class="w-full">
                    <Label for="centrovotacion" class="block mb-2">Centro de votacion</Label>
                    <Input id="centrovotacion" name="centrovotacion" placeholder="" /> 
                </div>  
            </div>
            <div class="w-full md:flex md:col-span-3">
                <div class="w-full md:mr-5">
                    <Label for="Correo" class="block mb-2">Correo</Label>
                    <Input id="Correo" name="correo" placeholder="" /> 
                </div>  
                <div class="w-full">
                    <Label for="Telefono" class="block mb-2">Telefono</Label>
                    <Input id="Telefono" name="telefono" placeholder="" /> 
                </div>  
            </div>
            <div class="w-full md:col-span-3 ">
                <Label for="direccionvivienda" class="block mb-2">Direccion de vivienda</Label>
                <Textarea id="direccionvivienda" name="direccionvivienda" rows=3></Textarea>
            </div>  
        </div>
        <Button type="submit" class="mt-2">Crear Habitante</Button>       
</form>
</div>

<!-- <div class='w-full h-full bg-black flex flex-col'>
    <h6 class="text-center text-white text-xl font-bold">Informacion Habitantes</h6>
    <form method="post" use:enhance  action="?/form1" class="flex flex-col justify-center items-center overflow-auto">
            <div class="w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14 p-5"> 
                <div class="w-full md:col-span-3">
                    <Label for="nombres" class="block mb-2">Nombres</Label>
                    <Input id="nombres" name='nombres' placeholder=" " />
                </div>               
                <div class="w-full md:col-span-3">
                    <Label for="Apellidos" class="block mb-2">Apellidos</Label>
                    <Input id="default-Input" name="apellidos" placeholder=" " />
                </div>
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="cedula" class="block mb-2">Cedula</Label>
                        <Input id="cedula" name="cedula" placeholder=" " /> 
                    </div>                
                    <div class="w-full">
                        <Label for="fnacimiento" class="block mb-2">Fecha nacimiento</Label>
                        <Input id="fnacimiento" name="fnacimiento" placeholder="año/mes/dia" /> 
                    </div> 
                </div>   
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label>
                            Genero
                            <Select name="genero" class="mt-2" items={[{value:"MASCULINO", name:"MASCULINO"}, {value:"FEMENINO", name:"FEMENINO"}]}/>
                        </Label>
                    </div>                
                    <div class="w-full">
                        <Label>
                            Instruccion
                            <Select name="instruccion" class="mt-2" 
                            items={[{value:"NINGUNA", name:"NINGUNA"}, {value:"EDUCACION BASICA", name:"EDUCACION BASICA"}, {value:"BACHILLER", name:"BACHILLER"}, {value:"UNIVERSITARIA", name:"UNIVERSITARIA"}]}/>
                        </Label>
                    </div> 
                </div>   
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="sectortrabajo" class="block mb-2">Sector de trabajo
                            <Select name="sectortrabajo" class='mt-2' 
                            items={[{value:"NINGUNO", name:"NINGUNO"}, {value:"PUBLICO", name:"PUBLICO"}, {value:"PRIVADO", name:"PRIVADO"}]} />
                        </Label>   
                    </div>              
                    <div class="w-full">
                        <Label>
                            Ocupacion
                            <Select name="ocupacion" class="mt-2" 
                            items={[{value:"TRABAJADOR", name:"TRABAJADOR"}, {value:"ESTUDIANTE", name:"ESTUDIANTE"}, {value:"HOGAR", name:"HOGAR"}]}/>
                        </Label>
                    </div> 
                </div>   
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="estatusvivienda" class="block mb-2">Estatus de vivienda</Label>
                        <Input id="estatusvivienda" name="estatusvivienda" placeholder="" /> 
                    </div>  
                    <div class="w-full">
                        <Label for="centrovotacion" class="block mb-2">Centro de votacion</Label>
                        <Input id="centrovotacion" name="centrovotacion" placeholder="" /> 
                    </div>  
                </div>
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="Correo" class="block mb-2">Correo</Label>
                        <Input id="Correo" name="correo" placeholder="" /> 
                    </div>  
                    <div class="w-full">
                        <Label for="Telefono" class="block mb-2">Telefono</Label>
                        <Input id="Telefono" name="telefono" placeholder="" /> 
                    </div>  
                </div>
                <div class="w-full md:col-span-3 ">
                    <Label for="direccionvivienda" class="block mb-2">Direccion de vivienda</Label>
                    <Textarea id="direccionvivienda" name="direccionvivienda" rows=3></Textarea>
                </div>  
            </div>
            <Button type="submit" class="mt-2">Crear Habitante</Button>
    </form>
</div> -->










