const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=eb648afc5be3d99d08bb3de62507fe8b&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (body.error) {
            callback('unable to find location, Try aanother search', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degree,  ' + body.current.weather_descriptions[0])

        }
    })

}


module.exports = forecast