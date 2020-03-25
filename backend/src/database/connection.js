const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development) // add a connection a configuraçao de desenvolvimento


module.exports = connection