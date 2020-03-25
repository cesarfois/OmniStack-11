
const crypto = require('crypto')
const connection = require('../database/connection')


module.exports = {

    // ====================== I N D E X =================================
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    
    }, 

    // ====================== C R E A T E =================================
    async create(request, response){
        const {name, email, whatsapp, city, uf } = request.body
        const id = crypto.randomBytes(4).toString("HEX")
    await connection('ongs').insert({   //  ('nome da tabela'). metodo inserir
                                        // await espera a finalizaçao da funcao.
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id })   // retorno somente o id

    }
}