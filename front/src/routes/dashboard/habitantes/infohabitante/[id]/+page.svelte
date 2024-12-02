<script>
    import { Label, Input, Select, Textarea, Button, Tabs, TabItem } from 'flowbite-svelte';
    /** @type {import('./$types').PageData} */
	export let data;
    let values = data.data1[0]
    let values2 = data.data2[0]
</script>

<div class="w-full overflow-auto h-full">
    <Tabs>
        <TabItem open title='Info Habitante'>
            <div class="w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14 ">
                <div class="w-full md:col-span-3">
                    <Label for="nombres" class="block mb-2">Nombres</Label>
                    <Input readonly value={values.nombres} />
                </div> 
                <div class="w-full md:col-span-3">
                    <Label for="Apellidos" class="block mb-2">Apellidos</Label>
                    <Input readonly value={values.apellidos} />
                </div>
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="cedula" class="block mb-2">Cedula</Label>
                        <Input readonly value={values.cedula}/> 
                    </div>                
                    <div class="w-full md:mr-5">
                        <Label for="fnacimiento" class="block mb-2">Fecha nacimiento</Label>
                        <Input readonly value={values.fnacimiento}/> 
                    </div> 
                    <div class="w-full">
                        <Label for="edad" class="block mb-2">Edad</Label>
                        <Input readonly value={values.edad}/> 
                    </div> 
                </div>   
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label>
                            Genero
                            <Input readonly value={values.genero}/> 
                        </Label>
                    </div>                
                    <div class="w-full">
                        <Label>
                            Instruccion
                            <Input readonly value={values.instruccion}/> 
                        </Label>
                    </div> 
                </div>   
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="sectortrabajo" class="block mb-2">Sector de trabajo</Label>
                        <Input value={values.sectortrabajo}/> 
                    </div>              
                    <div class="w-full">
                        <Label>
                            Ocupacion
                            <Input readonly value={values.ocupacion}/> 
                        </Label>
                    </div> 
                </div>   
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="estatusvivienda" class="block mb-2">Estatus de vivienda</Label>
                        <Input value={values.estatusvivienda}/> 
                    </div>  
                    <div class="w-full">
                        <Label for="centrovotacion" class="block mb-2">Centro de votacion</Label>
                        <Input value={values.centrovotacion}/> 
                    </div>  
                </div>
                <div class="w-full md:flex md:col-span-3">
                    <div class="w-full md:mr-5">
                        <Label for="Correo" class="block mb-2">Correo</Label>
                        <Input value={values.correo}/> 
                    </div>  
                    <div class="w-full">
                        <Label for="Telefono" class="block mb-2">Telefono</Label>
                        <Input value={values.telefono}/> 
                    </div>  
                </div>
                <div class="w-full md:col-span-3 ">
                    <Label for="direccionvivienda" class="block mb-2">Direccion de vivienda</Label>
                    <Textarea value={values.direccionvivienda} rows=3></Textarea>
                </div>  
            </div>
        </TabItem>
        <TabItem title='Info Social'>
            <div class="w-full h-auto grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14 overflow-auto p-5">
                <Label> Gran Mision Vivienda
                    <Input readonly bind:value={values2.granmisionvivienda} class="mt-2" />
                </Label>
                <Label> Barrio Nuevo Barrio Tricolor
                    <Input readonly bind:value={values2.barrionuevobarriotricolor} class="mt-2" />
                </Label>
                <Label> Beneficiado como Jefe de la Patria
                    <Input readonly bind:value={values2.beneficiadojefepatria} class="mt-2" />
                </Label>
                <Label> Parto Humanizado
                    <Input readonly bind:value={values2.partohumanizado} class="mt-2" />
                </Label>
                <Label> Semanas de embarazo
                    <Input readonly bind:value={values2.semanasparto} type="text" class="mt-2" />
                </Label>
                <Label> Fecha de parto
                    <Input readonly bind:value={values2.fechaparto} type="text" class="mt-2"/>
                </Label>
                <Label> Lactancia
                    <Input readonly bind:value={values2.lactancia} class="mt-2" />
                </Label>
                <Label> IVSS
                    <Input readonly bind:value={values2.ivss} class="mt-2" />
                </Label>
                <Label> Bajo Peso
                    <Input readonly bind:value={values2.bajopeso} class="mt-2" />
                </Label>
                <Label> Beneficiado con el I.N.N
                    <Input readonly bind:value={values2.beneficiadoinn} class="mt-2" />
                </Label>
                <Label> Chamba Juvenil
                    <Input readonly bind:value={values2.chambajuvenil} class="mt-2" />
                </Label>
                <Label> Amor Mayor
                    <Input readonly bind:value={values2.amormayor} class="mt-2" />
                </Label>
                <Label> Otros beneficios
                    <Input readonly bind:value={values2.otrosbeneficios} type="text" class="mt-2"/>
                </Label>
                <Label> Registrado en Patria
                    <Input readonly bind:value={values2.registradoenpatria} class="mt-2" />
                </Label>
                <Label> Persona con discapacidad
                    <Input readonly bind:value={values2.personacondiscapacidad} class="mt-2" />
                </Label>
                <Label> Tipo de discapacidad
                    <Input readonly bind:value={values2.tipodiscapacidad} type="text" class="mt-2" />
                </Label>
                <Label> Carnet expedido por el CONAPDIS
                    <Input readonly bind:value={values2.carnetconapdis} class="mt-2" />
                </Label>
                <Label> Beneficiado con Mision Jose Gregorio Hernandez
                    <Input readonly bind:value={values2.beneficiadojosegregoriohernandez} class="mt-2" />
                </Label>
                <Label> Beneficiado con el VENAPP
                    <Input readonly bind:value={values2.beneficiadovenapp} class="mt-2" />
                </Label>
                <Label> Padecimientos
                    <Input readonly bind:value={values2.padecimientos} type="text" class="mt-2"/>
                </Label>
                <Label> Medicinas
                    <Input readonly bind:value={values2.medicinas} type="text" class="mt-2" />
                </Label>
                <Label> Patio Productivo
                    <Input readonly bind:value={values2.patioproductivo} class="mt-2" />
                </Label>
                <Label> Descripcion patio productivo
                    <Input readonly bind:value={values2.descripcionpatioproductivo} type="text" class="mt-2"/>
                </Label>
                <Label> Habilidades y destrezas para un proyecto productivo
                    <Input readonly bind:value={values2.habilidadesdestrezas} type="text" class="mt-2" />
                </Label>
                <Label> Mascotas
                    <Input readonly bind:value={values2.mascotas} class="mt-2" />
                </Label>
                <Label> Brigadista MSV que lo atiende
                    <Input readonly bind:value={values2.brigadistamsv} class="mt-2" />
                </Label>
                <Label> Lider de calle que lo atiende
                    <Input readonly bind:value={values2.liderdecalle} class="mt-2"/>
                </Label>
            </div>
            
        </TabItem>
    </Tabs>
</div>
