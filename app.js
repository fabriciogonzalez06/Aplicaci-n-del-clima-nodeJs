const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'direccion de la ciudad',
            demand: true
        }
    }

).argv;



const getInfo = async(direccion) => {


    try {
        let coord = await lugar.getLugarLatLng(direccion);

        let temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de ${coord.direccion} es ${temp}`

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion).then(console.log).catch(console.log());