const PessoaRepository = require('../repositories/r_pessoas')

const transformer = pessoa => ({
  type: 'pessoas',
  id: pessoa.id,
  attributes: {
    nome: pessoa.nome,
    idade: pessoa.idade
  },
  links: {
    self: `/api/pessoas/${pessoa.id}`
  }
})

const getAll = async () => {
  const pessoas = await PessoaRepository.getAll();
  return { data: pessoas.map(transformer) }
}

const getOne = async (req) => {
  const pessoa = await PessoaRepository.getOne(req.params.id)
  return { data: transformer(pessoa) }
}

const save = async (req, h) => {
  const pessoa = await PessoaRepository.save(req.payload)
  return h.response(transformer(pessoa)).code(201)
}

const remove = async (req, h) => {
  await PessoaRepository.remove(req.params.id)
  return h.response().code(204)
}

module.exports = {
  getAll,
  getOne,
  save,
  remove,
}