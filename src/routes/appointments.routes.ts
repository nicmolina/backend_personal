import { Router } from 'express';
import axios from 'axios';

const cryptosRouter = Router();

cryptosRouter.get('/', async(request, response)=>{

    const client = await getCrypto();
    console.log(client);
    
    return response.json(client);
});

async function getCrypto(){
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'X-CMC_PRO_API_KEY' : '4cc9aaff-0c0d-437a-8a66-7dfd85fd5efb'
        }
    }
    const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=ADA,ETH,BTC,VET';
    const data = axios.get(URL, config).then((response) => {
        return response.data.data;   
      }, (error) => {
        console.log(error);
    });

    return data;
}

export default cryptosRouter;

/*

cryptosRouter.get('/', (request, response)=>{

    const { name, email } = request.body;
    const apiKey = '4cc9aaff-0c0d-437a-8a66-7dfd85fd5efb';
    const client = new CoinMarketCap(apiKey);

    const user = {
        name,
        email,
    };
    client.getIdMap({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
    return response.json(user);    
    //return response.json({message: 'Hello World'}) 

});

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