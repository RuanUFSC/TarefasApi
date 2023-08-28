const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const consultarRoutes = require('./routes/consultar')
const cadastrarRoutes = require('./routes/cadastrar')
const deletarRoutes = require('./routes/delete')
const editarRoutes = require('./routes/editar')

app.use('/', consultarRoutes)
app.use('/', cadastrarRoutes)
app.use('/', deletarRoutes)
app.use('/', editarRoutes)



app.listen(port, () =>{
    console.log('servidor express rodando')
})
