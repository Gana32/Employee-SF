const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const oracledb = require('oracledb');
const employeeRoutes = require('./routes/employeeRoutes');
const cors= require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

oracledb.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE_NAME}`,
  poolMax: 20,
  poolMin: 2,
  poolIncrement: 2,
  poolTimeout: 10
});

app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
