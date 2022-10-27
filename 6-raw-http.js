
const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=c9b31f78d49a209670a434621d09eacf&query=37.8267,-122.4233'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()