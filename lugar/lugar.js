const axios = require('axios');



const getLugarLatLng = async(dir) => {


    const urlencoded = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${urlencoded}`,
        headers: {
            'x-rapidapi-key': '8088e119e0msh350237ecffb73e3p1881a6jsna8c6e0e923b4'
        }
    });


    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`no hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }


}


module.exports = {
    getLugarLatLng
}