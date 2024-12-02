<script>
    import { Label, Input, Select, Textarea, Button } from 'flowbite-svelte';
    import { enhance } from '$app/forms';
</script>

<form method="post" use:enhance  action="?/form1">
    <div class="flex flex-col items-center justify-center"> 
        <div class="w-full flex items-center justify-end pb-20  lg:pb-0 pr-20">
            <Button type="submit" pill>Crear Habitante</Button>
        </div>
        <div class="w-full overflow-auto md:h-[550px] md:p-2 md:shadow-2xl h-auto grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14"> 
            <div class="w-full md:col-span-3">
                <Label for="nombres" class="block mb-2">Nombres</Label>
                <Input id="nombres" name='nombres' placeholder="" />
            </div>
            
            <div class="w-full md:col-span-3">
                <Label for="Apellidos" class="block mb-2">Apellidos</Label>
                <Input id="default-input" name="apellidos" placeholder="Default input" />
            </div>
            <div class="w-full md:flex md:col-span-3">
                <div class="w-full md:mr-5">
                    <Label for="cedula" class="block mb-2">Cedula</Label>
                    <Input id="cedula" name="cedula" placeholder="Default input" /> 
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
                        <Select name="genero" class="mt-2" items={[{value:"MASCULINO", name:"MASCULINO"}, {value:"FEMENINO", name:"FEMENINO"}]} placeholder="Opciones"/>
                    </Label>
                </div>                
                <div class="w-full">
                    <Label>
                        Instruccion
                        <Select name="instruccion" class="mt-2" 
                        items={[{value:"NINGUNA", name:"NINGUNA"}, {value:"EDUCACION BASICA", name:"EDUCACION BASICA"}, {value:"BACHILLER", name:"BACHILLER"}, {value:"UNIVERSITARIA", name:"UNIVERSITARIA"}]} 
                        placeholder="Opciones"/>
                    </Label>
                </div> 
            </div>   
            <div class="w-full md:flex md:col-span-3">
                <div class="w-full md:mr-5">
                    <Label for="sectortrabajo" class="block mb-2">Sector de trabajo</Label>
                    <Input id="sectortrabajo" name="sectortrabajo" placeholder="" /> 
                </div>              
                <div class="w-full">
                    <Label>
                        Ocupacion
                        <Select name="ocupacion" class="mt-2" 
                        items={[{value:"TRABAJADOR", name:"TRABAJADOR"}, {value:"ESTUDIANTE", name:"ESTUDIANTE"}, {value:"HOGAR", name:"HOGAR"}]} 
                        placeholder="Opciones"/>
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
    </div>
</form>
