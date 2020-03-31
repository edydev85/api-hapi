const PessoaModel = require('../models/m_pessoa')

const getAll = async () => await PessoaModel.find({})

const getOne = async id => await PessoaModel.findById(id)

const save = async (payload) => {
  const { nome, idade } = payload

  const pessoa = new PessoaModel
  pessoa.nome = nome
  pessoa.idade = idade

  await pessoa.save()

  return pessoa
}

const remove = async id => await PessoaModel.findByIdAndDelete({ _id: id })

module.exports = {
  getAll,
  getOne,
  save,
  remove
}