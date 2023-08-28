const database = require("../config/database")

exports.tarefas = (req, res) => {
    const query = "INSERT INTO tarefas( nome, status) VALUES ($1, $2);";
    const values = [ req.body.nome, req.body.status];
    database.query(query, values).then(
        () => {
            console.log('ta dando insert')
            return res.status(201).send({ mensagem: "Tarefa cadastrada com Sucesso!" });
        },
        (erro) => {
            console.log('deu erro no insert')
            return res.status(500).send({ erro: erro });
        }
    )
}