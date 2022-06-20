const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');


crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)); 