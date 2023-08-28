const pg = require("pg")

const database = new pg.Client("postgres://ozsrbpyr:BFPANeg3g-h2UGsR5FJhX-jiEi0-bP7_@babar.db.elephantsql.com/ozsrbpyr")


database.connect((erro) => {
    if (erro) {
        return console.log("Não foi possivel conectar com o  elephantSQL ", erro)
    } else {
        return console.log("conectado ao elephantSQL!")
    }

})

module.exports = database