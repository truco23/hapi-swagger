const Joi = require('@hapi/joi')
module.exports = (server, axios) => {
    
    const routesProduct = [
        {
            method:'GET',
            path: '/produtos/{id}',
            options: {
                description: 'Buscando produto por id',
                notes: 'Listar produto por id',
                tags: ['api'], // ADD THIS TAG
                validate: {
                    failAction: (req, res, error) => {
                        throw error
                    },
                    params: Joi.object({ id: Joi.required() })
                },
                handler: async (req, headers) => {
                    const result = await axios.get(`/produtos/${req.params.id}`)
                    console.log('Lista de produtos retornada');
                    return { success: result.data }
                }
            }
        },
        {
            method:'PATCH',
            path: '/produtos/{id}',
            options: {
                description: 'Alterando produto por id',
                notes: 'Alterar produto por id',
                tags: ['api'], // ADD THIS TAG
                validate: {
                    failAction: (req, res, error) => {
                        throw error
                    },
                    params: Joi.object({ id: Joi.required(), nome: Joi.string() }),
                    payload: Joi.object({ id: Joi.string(), nome: Joi.string() })
                },
                handler: async (req, headers) => {
                    const result = await axios.get(`/produtos/${req.params.id}`)
                    console.log('Produto alterado');
                    return { success: result.data }
                }
            }
        },
        {
            method:'DELETE',
            path: '/produtos/{id}',
            options: {
                description: 'Removendo produto por id',
                notes: 'Remover produto por id',
                tags: ['api'], // ADD THIS TAG
                validate: {
                    failAction: (req, res, error) => {
                        throw error
                    },
                    params: Joi.object({ id: Joi.required(), nome: Joi.string() }),
                    payload: Joi.object({ id: Joi.string() })
                },
                handler: async (req, headers) => {
                    const result = await axios.get(`/produtos/${req.params.id}`)
                    console.log('Produto removido');
                    return { success: result.data }
                }
            }
        }
    ]

    server.route(routesProduct)
}