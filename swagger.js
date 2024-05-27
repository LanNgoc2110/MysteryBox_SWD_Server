const swaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        title: "NodeJs + MySQL API",
        description: "NodeJs + MySQL API",
    },
    host: 'localhost:8080',
    schemes: ['http']
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./server.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')
})