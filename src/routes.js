const pessoaHandler = require('./handlers/h_pessoas')

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: (req, h) => {
			return 'Hello my friend'
		}
	},
	{
		method: 'GET',
		path: '/api/pessoas',
		handler: pessoaHandler.getAll
	},
	{
		method: 'GET',
		path: '/api/pessoas/{id}',
		handler: pessoaHandler.getOne
	},
	{
		method: 'POST',
		path: '/api/pessoas',
		handler: pessoaHandler.save
	},
	{
		method: 'DELETE',
		path: '/api/pessoas/{id}',
		handler: pessoaHandler.remove,
		options: { cors: true }
	}
]