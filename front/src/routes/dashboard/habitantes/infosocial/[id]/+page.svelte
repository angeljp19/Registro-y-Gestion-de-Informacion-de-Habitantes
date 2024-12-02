<script>
    import { Label, Input, Select, Button } from 'flowbite-svelte';
    import { enhance } from '$app/forms';
    export let data
    import { Modal } from 'flowbite-svelte';

    let defaultModal = false;
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
<div class="w-full h-full">
    <form method="post" use:enhance  action="?/form1" class="flex h-full flex-col justify-center items-center">
        <h6 class="text-center text-white text-xl font-bold ">Informacion Social</h6>
        <input class="hidden" type="text" name="idhabitante" value={data.id}>
        <div class="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14 overflow-auto  p-5">
            <Label> Gran Mision Vivienda
                <Select class="mt-2" name="granmisionvivienda">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Barrio Nuevo Barrio Tricolor
                <Select class="mt-2" name="barrionuevobarriotricolor">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado como Jefe de la Patria
                <Select class="mt-2" name="beneficiadojefepatria">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Parto Humanizado
                <Select class="mt-2" name="partohumanizado">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Semanas de embarazo
                <Input type="text" class="mt-2" name="semanasparto" />
            </Label>
            <Label> Fecha de parto
                <Input type="text" class="mt-2" name="fechaparto" placeholder="año/mes/dia" />
            </Label>
            <Label> Lactancia
                <Select class="mt-2" name="lactancia">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> IVSS
                <Select class="mt-2" name="ivss">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Bajo Peso
                <Select class="mt-2" name="bajopeso">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado con el I.N.N
                <Select class="mt-2" name="beneficiadoinn">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Chamba Juvenil
                <Select class="mt-2" name="chambajuvenil">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Amor Mayor
                <Select class="mt-2" name="amormayor">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Otros beneficios
                <Input type="text" class="mt-2" name="otrosbeneficios" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Registrado en Patria
                <Select class="mt-2" name="registradoenpatria">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Persona con discapacidad
                <Select class="mt-2" name="personacondiscapacidad">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Tipo de discapacidad
                <Input type="text" class="mt-2" name="tipodiscapacidad" />
            </Label>
            <Label> Carnet expedido por el CONAPDIS
                <Select class="mt-2" name="carnetconapdis">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado con Mision Jose Gregorio Hernandez
                <Select class="mt-2" name="beneficiadojosegregoriohernandez">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado con el VENAPP
                <Select class="mt-2" name="beneficiadovenapp">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Padecimientos
                <Input type="text" class="mt-2" name="padecimientos" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Medicinas
                <Input type="text" class="mt-2" name="medicinas" />
            </Label>
            <Label> Patio Productivo
                <Select class="mt-2" name="patioproductivo">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Descripcion patio productivo
                <Input type="text" class="mt-2" name="descripcionpatioproductivo" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Habilidades y destrezas para un proyecto productivo
                <Input type="text" class="mt-2" name="habilidadesdestrezas" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Mascotas
                <Select class="mt-2" name="mascotas">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Brigadista MSV que lo atiende
                <Input type="text" class="mt-2" name="brigadistamsv" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Lider de calle que lo atiende
                <Input type="text" class="mt-2" name="liderdecalle" placeholder="Máximo 50 caracteres" />
            </Label>
        </div>
        <Button type="submit" class="mt-2">Enviar Informacion Social</Button>
    </form>
</div>
