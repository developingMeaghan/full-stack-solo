const connection = require ('./connection')

function getDeck (db = connection){
    return db('magic').select()
}

module.exports = {
    getDeck,
}