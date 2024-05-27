const express = require("express");
const connectDatabase = require("./config/connectDatabase");
const initRouter = require("./routers/index");
const dotenv = require("dotenv");
const cors = require("cors");

// const { options } = require("./routers/auth.router");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDatabase();
initRouter(app);
app.get("/api/v1/package", (req, res)=> {
  res.send("heelo")
})

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(8080, () => {
  console.log("Server is running port 8080");
});
