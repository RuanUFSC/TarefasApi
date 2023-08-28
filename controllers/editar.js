const database = require("../config/database")


exports.marcarAndamento = (req,res) =>{
    const query = "UPDATE tarefas SET status = 'Em Andamento'  WHERE id=$1"
    const values = [req.params.id]

    database.query(query,values).then(
        ()=>{
            res.status(200).send({mensagem: "Tarefa marcada como Em andamento!"}
            )
            
        },
        (erro) => {
            res.status(500).send({erro:erro})
        }
    )
}

exports.marcarConcluida = (req,res) =>{
    const query = "UPDATE tarefas SET status = 'Concluida'  WHERE id=$1"
    const values = [req.params.id]

    database.query(query,values).then(
        ()=>{
            res.status(200).send({mensagem: "Tarefa marcada como concluida!"}
            )
            
        },
        (erro) => {
            res.status(500).send({erro:erro})
        }
    )
}