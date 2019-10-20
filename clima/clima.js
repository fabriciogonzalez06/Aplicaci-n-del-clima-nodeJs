const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=89c8a53fe49bfe7ce02d4449242ae687&units=metric`);
    //console.log(resp);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}