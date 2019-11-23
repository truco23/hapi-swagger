const Hapi = require('@hapi/hapi');
const Consign = require('consign')
const server = new Hapi.Server({
    host: 'localhost',
    port: 3001,
});
const axios = require('axios')
const axoisApi = axios.create({
    baseURL: 'http://localhost:3000'
})

Consign({ cwd: 'src' })
    .include('config')
    .then('routes')
    .into(server, axoisApi)