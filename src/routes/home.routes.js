module.exports = (server, axios) => {

    server.route({
        method: 'GET',
        path: '/',
        options: {
            description: 'Bem vindo a nossa API',
            notes: 'Rota default da aplicação',
            tags: ['api'],
            validate: {
                failAction: (req, res, error) => {
                    throw error
                }
            },
            handler: async (req, headers) => {
                return { success: 'Bem-vindo a nossa API'}
            }
        },
    });
}