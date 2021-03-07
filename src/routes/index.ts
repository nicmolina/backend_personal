import { Router } from 'express';
import cryptosRouter from './appointments.routes';
import spotifyRouter from './spotify.routes';
const routes = Router();

//use para qualquer tipo de rota
routes.use('/cryptos', cryptosRouter);
routes.use('/spotify', spotifyRouter);

export default routes;

/*
routes.get('/crypto', (request, response) =>{
    const { name, email } = request.body;
    const apiKey = '4cc9aaff-0c0d-437a-8a66-7dfd85fd5efb';
    const client = new CoinMarketCap(apiKey);

    const user = {
        name,
        email,
    };
    client.getIdMap({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
    return response.json(user);
});
*/