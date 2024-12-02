<script>
    import { enhance } from '$app/forms'; 
    import { Label, Input, Select, Button } from 'flowbite-svelte'
    import { Modal } from 'flowbite-svelte';


    let defaultModal = false;
    export let form;

    let result

    async function getpdf() {
        const data = {
            filter: selectedFilter,
            value: selectedvalue
        }
        const response = await fetch(`http://localhost:3000/users/getByFilter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            ,
            body: JSON.stringify(data)
        });


        if (!response.ok) {
            const result = await response.json()
            console.log(result)
            return result
        }


        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'reporte.pdf';
        link.click();
        URL.revokeObjectURL(url);
    }

    $: if (form?.missing) {
        defaultModal = true;
        result = form?.result
        form = ''
    }

    const filtroSelect = [{value:"genero", name:"Genero"}, {value:"instruccion", name:"Instruccion"}, {value:"ocupacion", name:"Ocupacion"}, {value:"parentesco", name:"Parentesco"},{value:'edad', name:'Edad'},{value:'todos', name:'Todos'}]

    const valores = {genero: [{value: 'MASCULINO', name:'Masculino'}, {value:"FEMENINO", name:"Femenino"}],
    instruccion: [{value:"NINGUNA", name:"Ninguna"}, {value:"EDUCACION BASICA", name:"Educacion basica"}, {value:"BACHILLER", name:"Bachiller"}, {value:"UNIVERSITARIA", name:"Universitaria"}], 
    ocupacion: [{value:"ESTUDIANTE", name:"Estudiante"}, {value:"TRABAJADOR", name:"Trabajador"}, {value:"HOGAR", name:"Hogar"}],parentesco: [{value:"JEFE", name:"Jefe"}], edad: [{value: 'menor', name: "Menores de edad"}, {value: 'adulto', name: "Adultos"}, {value: 'mayor', name: "Adultos mayores"}] ,todos:[{value:"todos", name:"todos"}]} 

    let selectedFilter = ''
    let selectedvalue = ''
</script>
<Modal title="Error al enviar datos" bind:open={defaultModal} autoclose outsideclose>
    <p>{result.message ?? "Ha ocurrido un error"}</p>
</Modal>

<div class="w-full h-full flex justify-center items-center">
    <div class="md:w-1/2 w-full h-1/2 bg-slate-800 rounded-xl p-5 flex flex-col justify-center gap-12">
        <div class="flex flex-col md:flex-row">
            <Label class="w-full md:pr-5 pr-0">Filtro
                <Select name='filter' bind:value={selectedFilter} items={filtroSelect}></Select>
            </Label>
            <Label class="w-full">Valor
                <Select name='value' bind:items={valores[selectedFilter]} bind:value={selectedvalue}></Select>
            </Label>
        </div>
        <Button type="submit" on:click={getpdf}>Generar PDF</Button>
    </div>
</div>



