const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'high',
        type: 'number',
        demandOption: true,
        default: 20,
        describe: 'Hasta donde se multiplicará la base'
    })
    .option('l', {
        alias: 'List',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'Las opciones tienen que ser números tiene que ser un número'
        } else return argv
    })
    .argv;

module.exports = argv;