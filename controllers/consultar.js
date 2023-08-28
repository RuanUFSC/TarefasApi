const database = require("../config/database")

exports.tarefas = (req, res) => {
    const query = "SELECT * FROM tarefas"
    database.query(query).then(
        (resultado) => {
            res.status(200).send({ tarefas: resultado.rows })
          
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        
        }

    )
}


exports.tarefasID = (req, res) => {
    const query = "SELECT * FROM tarefas WHERE id = $1 "
    const values = [req.params.id]
    database.query(query,values).then(
        (resultado) => {
            res.status(200).send({ tarefas: resultado.rows })
          
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        
        }

    )
}