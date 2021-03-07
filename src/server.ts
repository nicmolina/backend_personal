import express from 'express';
import routes from './routes'; 
const app = express();

require('dotenv').config()

app.use(routes);

app.listen(process.env.PORT || 3333);