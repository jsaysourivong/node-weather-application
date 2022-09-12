request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=23b17ec2ea4e7e65e637d0ec2817dd99&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to find coordinates', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. it feels like " +  body.current.feelslike)
        }
    })
}

module.exports = forecast