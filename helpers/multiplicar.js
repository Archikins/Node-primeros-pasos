const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, h, l) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        salida += '===============\n'
        salida += `Tabla del ${base}\n`
        salida += '===============\n'

        for (let i = 1; i < (h + 1); i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (l) console.log(salida)

        return `./salida/tabla-${base}.txt`

    });

};

module.exports = {
    crearArchivo
};