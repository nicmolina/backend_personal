"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointments_routes_1 = __importDefault(require("./appointments.routes"));
var spotify_routes_1 = __importDefault(require("./spotify.routes"));
var routes = express_1.Router();
//use para qualquer tipo de rota
routes.use('/cryptos', appointments_routes_1.default);
routes.use('/spotify', spotify_routes_1.default);
exports.default = routes;
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
