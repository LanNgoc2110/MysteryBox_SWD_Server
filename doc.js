const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routers/index.js", "./routers/auth.router.js"];

swaggerAutogen(outputFile, endpointsFiles);