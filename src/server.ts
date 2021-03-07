import express from 'express';
import routes from './routes'; 
const cors = require('cors');
const app = express();

require('dotenv').config()

app.use(cors);
app.use(routes);

app.listen(process.env.PORT || 3333);