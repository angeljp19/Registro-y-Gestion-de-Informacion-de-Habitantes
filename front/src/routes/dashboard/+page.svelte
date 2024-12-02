<script>
import {Card} from 'flowbite-svelte';
	/** @type {import('./$types').PageData} */
	export let data; 
    let stadistic = data.result.stadistic
</script>
    
<div class="w-full h-full flex flex-col">
    <h1 class="text-center text-white text-4xl font-bold m-">Estadisticas</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 h-full">
        <div class="w-full flex justify-center items-center">
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL HOMBRES</h5>
                <h5>{stadistic.masculino}</h5>
            </Card>
        </div>
        <div class="w-full flex justify-center items-center">
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL HABITANTES</h5>
                <h5>{stadistic.total}</h5>
            </Card>
        </div>
        <div class="w-full flex justify-center items-center">
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL MUJERES</h5>
                <h5>{stadistic.femenino}</h5>
            </Card>
        </div>
        <div class="w-full flex justify-center items-center">
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL MENORES</h5>
                <h5>{stadistic.menores}</h5>
            </Card>
        </div>
        <div class="w-full flex justify-center items-center">
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL ADULTOS</h5>
                <h5>{stadistic.adultos}</h5>
            </Card>
        </div>
        <div class="w-full flex justify-center items-center">
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL ADULTOS MAYORES</h5>
                <h5>{stadistic.adultosMayores}</h5>
            </Card>
        </div>
        <div class="w-full flex md:col-span-3 justify-center items-center gap-10">
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL ESTUDIANTES</h5>
                <h5>{stadistic.estudiantes}</h5>
            </Card>
            <Card class="dark:border-orange-500 border-2 text-center">
                <h5 class="text-white font-bold">TOTAL TRABAJADORES</h5>
                <h5>{stadistic.trabajadores}</h5>
            </Card>
        </div>
    </div>
</div>
