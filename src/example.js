const Hapi = require('hapi')
const Server = new Hapi.Server({
    port: 3001,
    host: 'localhost'
})
const HapiSwagger = require('hapi-swagger')
const Inert = require('inert')
const Vision = require('vision')
const Joi = require('@hapi/joi')

const main = async () => {
    
    await Server.register([
        Vision,
        Inert,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Minha api com Swagger',
                    version: 'v1.0'
                },
                lang: 'pt'
            }
        }
    ])
    await Server.start()
    console.log('servidor rodando ' + Server.info.uri)
}

Server.route({
    method: 'GET',
    path: '/',
    config: {
        tags: ['api'],
        description: 'Teste rota default',
        notes: 'Testando o swagger',
        validade: {
            failAction: (req, res, error) => {
                throw error
            },
            query: {
                skip: Joi.object({skip: Joi.string()})
                // teste: Joi.object({
                //     a: Joi
                //         .string()
                //         .min(3)
                //         .max(30)
                //         .required()
                // })
            }
        }
    },
    handler: (req, res) => {
        return 'Hello Word'
    }
})

main()