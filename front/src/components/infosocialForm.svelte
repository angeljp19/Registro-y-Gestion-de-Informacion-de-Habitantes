<script>
    import { Label, Input, Select, Textarea } from 'flowbite-svelte';
</script>

<div class="flex flex-col w-full items-center justify-center">
    <div class="w-full h-auto grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14">
        <Label> Gran Mision Vivienda
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Barrio Nuevo Barrio Tricolor
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Beneficiado como Jefe de la Patria
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Parto Humanizado
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Semanas de embarazo
            <Input></Input>
        </Label>
        <Label> Fecha de parto
            <Input placeholder='año/mes/dia'></Input>
        </Label>
        <Label> Lactancia
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> IVSS
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Bajo Peso
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Beneficiado con el I.N.N
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Chamba Juvenil
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Amor Mayor
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Otros beneficios
            <Input placeholder='año/mes/dia'></Input>
        </Label>
        <Label> Registrado en Patria
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Persona con discapacidad
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Tipo de discapacidad
            <Input placeholder=''></Input>
        </Label>
        <Label> Carnet expedido por el CONAPDIS
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Beneficiado con Mision Jose Gregorio Hernandez
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Beneficiado con el VENAPP
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Padecimientos
            <Input placeholder=''></Input>
        </Label>
        <Label> Medicinas
            <Input placeholder=''></Input>
        </Label>
        <Label> Patio Productivo
            <Select class="mt-2" items={[{value:'SI', name:'SI'}, {values:'NO', name:'NO'}]} placeholder="Opciones"/>
        </Label>
        <Label> Descripcion patio productivo
            <Input placeholder=''></Input>
        </Label>
        <Label> Habilidades y destrezas para un proyecto productivo
            <Input placeholder=''></Input>
        </Label>
        <Label> Brigadista MSV que lo atiende
            <Input placeholder=''></Input>
        </Label>
        <Label> Lider de calle que lo atiende
            <Input placeholder=''></Input>
        </Label>
    </div>
</div>