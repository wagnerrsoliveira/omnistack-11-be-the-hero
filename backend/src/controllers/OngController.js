const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request,reponse){
        const ongs = await connection('ongs').select('*');
        return reponse.json(ongs);
    },
    
    async create(request,reponse){
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return reponse.json({id});
    }
};