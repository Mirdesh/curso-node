const cursos = require('./cursos').cursos;
const opciones_yargvs = require('./opciones_yargs').opciones;
const fs = require('fs');
const argvs = require('yargs')
    .command('inscribir', 'Inscribirme en un curso.', opciones_yargvs).argv;

var imprimir = (textoImprimir) => {
    console.log(textoImprimir);
}

let crearArchivo = (nombre, cedula, curso, duracion, valor) => {
    texto = 'El estudiante ' + nombre + ' con cedula numero ' + cedula + ' se matriculo al curso ' + curso + ', el cual tiene una duracion de ' + duracion + ' y un valor de ' + valor + ' pesos.\n';
    fs.writeFileSync('inscripciones.txt', texto, (err) => {
        if (err) throw err;
        console.log('Se ha creado el archivo')
    })
}



if (argvs.id) {
    let id = cursos.find(curso => curso.id == argvs.id);
    if (id) {
        crearArchivo(argvs.nombre, argvs.cedula, id.nombreCurso, id.duracion, id.valor);

    } else {
        imprimir('El Id ingresado no corresponde a ningun curso, por favor verifiquelo.');
        for (let index = 0; index < cursos.length; index++) {
            setTimeout(function () {
                let texto = "El curso se llama " + cursos[index].nombreCurso + " su id es " + cursos[index].id + ", tiene una duracion de " + cursos[index].duracion + " y un valor de " + cursos[index].valor + " pesos.";
                imprimir(texto);
            }, index * 2000);
        }
    }

} else {
    for (let index = 0; index < cursos.length; index++) {
        setTimeout(function () {
            let texto = "El curso se llama " + cursos[index].nombreCurso + " su id es " + cursos[index].id + ", tiene una duracion de " + cursos[index].duracion + " y un valor de " + cursos[index].valor + " pesos.";
            imprimir(texto);
        }, index * 2000);
    }
}









