<script>
    import { Label, Input, Select, Button } from 'flowbite-svelte';
    import { enhance } from '$app/forms';
    export let data
    let values = data.result[0]

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
    <form method="post" use:enhance  action="?/form1" class="flex flex-col justify-center items-center h-full overflow-auto">
        <h6 class="text-center text-white text-xl font-bold ">Informacion Social</h6>
        <input class="hidden" type="text" name="idhabitante" value={values.idhabitante}>
        <div class="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-14 overflow-auto  p-5">
            <Label> Gran Mision Vivienda
                <Select bind:value={values.granmisionvivienda} class="mt-2" name="granmisionvivienda">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Barrio Nuevo Barrio Tricolor
                <Select bind:value={values.barrionuevobarriotricolor} class="mt-2" name="barrionuevobarriotricolor">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado como Jefe de la Patria
                <Select bind:value={values.beneficiadojefepatria} class="mt-2" name="beneficiadojefepatria">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Parto Humanizado
                <Select bind:value={values.partohumanizado} class="mt-2" name="partohumanizado">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Semanas de embarazo
                <Input bind:value={values.semanasparto} type="text" class="mt-2" name="semanasparto" />
            </Label>
            <Label> Fecha de parto
                <Input bind:value={values.fechaparto} type="text" class="mt-2" name="fechaparto" placeholder="año/mes/dia" />
            </Label>
            <Label> Lactancia
                <Select bind:value={values.lactancia} class="mt-2" name="lactancia">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> IVSS
                <Select bind:value={values.ivss} class="mt-2" name="ivss">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Bajo Peso
                <Select bind:value={values.bajopeso} class="mt-2" name="bajopeso">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado con el I.N.N
                <Select bind:value={values.beneficiadoinn} class="mt-2" name="beneficiadoinn">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Chamba Juvenil
                <Select bind:value={values.chambajuvenil} class="mt-2" name="chambajuvenil">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Amor Mayor
                <Select bind:value={values.amormayor} class="mt-2" name="amormayor">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Otros beneficios
                <Input bind:value={values.otrosbeneficios} type="text" class="mt-2" name="otrosbeneficios" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Registrado en Patria
                <Select bind:value={values.registradoenpatria} class="mt-2" name="registradoenpatria">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Persona con discapacidad
                <Select bind:value={values.personacondiscapacidad} class="mt-2" name="personacondiscapacidad">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Tipo de discapacidad
                <Input bind:value={values.tipodiscapacidad}  type="text" class="mt-2" name="tipodiscapacidad" />
            </Label>
            <Label> Carnet expedido por el CONAPDIS
                <Select bind:value={values.carnetconapdis} class="mt-2" name="carnetconapdis">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado con Mision Jose Gregorio Hernandez
                <Select bind:value={values.beneficiadojosegregoriohernandez}  class="mt-2" name="beneficiadojosegregoriohernandez">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Beneficiado con el VENAPP
                <Select bind:value={values.beneficiadovenapp} class="mt-2" name="beneficiadovenapp">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Padecimientos
                <Input bind:value={values.padecimientos} type="text" class="mt-2" name="padecimientos" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Medicinas
                <Input bind:value={values.medicinas} type="text" class="mt-2" name="medicinas" />
            </Label>
            <Label> Patio Productivo
                <Select bind:value={values.patioproductivo} class="mt-2" name="patioproductivo">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Descripcion patio productivo
                <Input bind:value={values.descripcionpatioproductivo} type="text" class="mt-2" name="descripcionpatioproductivo" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Habilidades y destrezas para un proyecto productivo
                <Input bind:value={values.habilidadesdestrezas}  type="text" class="mt-2" name="habilidadesdestrezas" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Mascotas
                <Select bind:value={values.mascotas} class="mt-2" name="mascotas">
                    <option value="" disabled selected>Opciones</option>
                    <option value="SI">SI</option>
                    <option selected value="NO">NO</option>
                </Select>
            </Label>
            <Label> Brigadista MSV que lo atiende
                <Input bind:value={values.brigadistamsv} type="text" class="mt-2" name="brigadistamsv" placeholder="Máximo 50 caracteres" />
            </Label>
            <Label> Lider de calle que lo atiende
                <Input bind:value={values.liderdecalle} type="text" class="mt-2" name="liderdecalle" placeholder="Máximo 50 caracteres" />
            </Label>
        </div>
        <Button type="submit" class="mt-2">Enviar Informacion Social</Button>
    </form>
</div>
