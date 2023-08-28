const database = require('../config/database')

exports.delete = (req,res) =>{
    const query = "DELETE FROM tarefas WHERE id=$1;"
    const values = [req.params.id]
    
database.query(query, values).then(
    () => {
        res.status(200).json({mensagem : "Tarefa removida com sucesso"})
    },
    (erro) =>{
        res.status(500).send({erro:erro})
    }
)
}