# Aplicacion Web para el registro y gestion de datos de habitantes

![inicio](https://github.com/user-attachments/assets/e872dcb7-cad2-47ed-bbf9-892bdf7937fd)

Este proyecto permite la gestion eficiente de los datos de los habitantes de una comunidad, permitiendo realizar de manera eficiente el registro de la informacion y su recuperacion, asi como tambien el almacenamiento 
seguro de los mismos. Agilizando la manera en que se registran los datos con una interfaz intuitiva y practica, hace de este proceso algo sencillo ademas de ahorrar tiempo y recursos. Permite el registro de datos 
personales del habitante como:
  -  Nombres
  -  Cedula
  -  Ocupacio
  -  Direccion
  -  Email
  -  Entre otros...

![registros](https://github.com/user-attachments/assets/6eac1157-a866-47c8-a166-246e4a8ded43)
    
Ademas, tambien registra individualmente para cada habitante un conjunto de informacion social como:
  -  Discapacidades
  -  Padecimientos
  - Habilidades y destrezas
  - Beneficios
  - Entre otros

Tambien posee la opcion de crear cargas familiares pudiendo registrar asi el nucleo familiar de cada uno de los habitantes, asignando un jefe de familia y agregando a los integrantes con una relacion de parentesco
con el mismo. 

![familia-2](https://github.com/user-attachments/assets/f8e0316b-ee80-434f-9d5b-3352018afe12)
![familia-1](https://github.com/user-attachments/assets/dac86c0c-8550-43be-9cbe-2a3539a9873a)


Ademas, genera reportes en formato PDF con los datos de los habitantes segun la aplicacion de filtros.

![reportes](https://github.com/user-attachments/assets/63cbc4f4-fb02-4d56-ae8d-bf80e56c6aeb)

En el frontend se utilizaron tecnologias y herramientas como:

  - Sveltekit
  - TailwindCss
  - FlowBite

En el backend, se empleo:
  - Express (Node.js)
  - PostgreSQL

## Instalacion

Para su instalacion debe tener instalado en su computadora:
  -  Node.js (Version utilizada: 20.12.2)
  -  PostgreSQL (Version utilizada: 17.0)

Clone el repositorio y exporte 'schema.sql' a Postgres para crear una copia de la base de datos. Con una terminal, entre a la ruta 'front' y ejecute el comando 'npm install' para instalar las dependencias,
de igual manera ejecutar ese comando en la ruta 'back'. Cree un archivo .env en la carpeta 'front' siguiendo como ejemplo el archivo .env.example. Cree otro archivo .env en la carpeta 'back' siguiendo
el ejemplo de .env.example, aca ingresara las credencias para ingresar a la base de datos Postgress. Para ejecutar la aplicacion, abra una terminal en la ruta 'front' y ejecute el comando 'npm run dev', de igual
manera abra una terminal en la ruta 'back' y ejecute el comando 'node app.js'

  






