const swaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        title: "NodeJs + MySQL API",
        description: "NodeJs + MySQL API",
    },
    host: 'mysterybox-swd-server-1.onrender.com',
    schemes: ['https']
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./server.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')
}) 