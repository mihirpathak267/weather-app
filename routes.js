const express = require('express');
const router = express.Router();
const https = require('node:https');
require('dotenv').config();

router.get('/', (req, res)=>{
    res.sendFile(__dirname+'/weather.html')
});

router.post('/', (req, res)=>{
    const query = req.body.cityName;
    const url = process.env.WEATHER_API+'q='+query+'&appid='+process.env.APIKEY+'&units='+process.env.UNIT;
    https.get(url, (response)=>{
        response.on('data', (data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesIcon = weatherData.weather[0].icon;
            const weatherDes = weatherData.weather[0].description;
            const imageUrl = "http://openweathermap.org/img/wn/"+weatherDesIcon+"@2x.png";
            res.write("<h1>The temperature in "+query+" is "+temp+" degree celcius.</h1>");
            res.write("<h1>The weather description is "+weatherDes+".</h1>");
            res.write("<img src="+imageUrl+">");
            res.send();
        })
        
    })
})

module.exports = router;