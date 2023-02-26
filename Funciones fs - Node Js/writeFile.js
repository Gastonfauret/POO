//writeFile: (Funcion de la libreria Node): Lee archivos de tipo .txt.
//Se importa la Libraria fs (File System).
var fs = require('fs');
//funcion writeFile: escribe archivos en formato .txt (Primer Parametro), del t3exto indicado 
//(segundo parametro).
//Si cambiamos el segundo parametro, osea el mensaje, sobreescribira el archivo con el nuevo
//texto, no lo anadira. Para hacer usaremos otra funcion.
//Funcion vacia: Imprime mensaje de error(parametro) de encontrarse uno.
// fs.writeFile('data.txt', 'Hola, Que tal', (error) =>
// {if(error) {
//     console.log(`Error: ${error}`);    
// }})
//Imprime: Hola, Mundo formato .txt
//readFile: Funcion para leer los archios de formato plano o .text.
//Aca vemos que solo leeremos el contenido del archivo .txt.
//Error cumple la misma funcion que el ejemplo, y data imprime el contenido del archivo .txt.
//El segundo parametro utf-8, decodifica los caracteres del archivo .txt
// fs.readFile('data.txt', 'utf-8', (error, data) => {
//     if (!error) {
//         console.log(data);}
//     else {
//         console.log(`Error: ${error}`);
//     }        
// });
//imprime: Hola, Que tal
//rename: Cambia el archivo (parametro 1), por el nuevo nombre (parametro 2).
//Solo modifica el nombre, no su contenido.
// fs.rename('data.txt', 'data2.txt', (error, data) => {
//     if (!error) {
//         console.log('Renombrado!');}
//     else {
//         console.log(`Error: ${error}`);
//     }        
// });
//imprime: Renombrado!
//appendFile: Anade elementos nuevos al archivo .txt creado.
//\n: Salto de linea. Agrga el nuevo contenido, abajo del contenido existente.
// fs.appendFile('data2.txt', '\nComo estas? Todo Bien?', (error, data) => {
//     if (!error) {
//         console.log('Contenido Agregado!');}
//     else {
//         console.log(`Error: ${error}`);
//     }        
// });
//Imprime: Contenido Agregado!
//createReadStream: Crea Una copia del archivo .txt creado.
//funcion .pipe: Funcion de node que permite hacer una copia de archivos.
//createWriteStream: Creamos un archivo que sera de escritura de archivos.
//fs.createReadStream('data2.txt').pipe(fs.createWriteStream('data2-copy.txt'));
//No imprime nada, pero crea un nuevo archivo(data2-copy.txt), con igual de contenido que el ya visto
//(data2.txt).
//unlink: Elimina un archivo existente.
// fs.unlink('data2-copy.txt', (error) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     }
// });
//Elimina el archivo 'data2-copy.txt' del directorio.
//readdir: Funcion que nos permite leer los archivos del directorio o carpeta (Node Js).
fs.readdir('./', function (error, archivos) {
    archivos.forEach(function (archivo) {
        console.log(archivo);
    });
});
