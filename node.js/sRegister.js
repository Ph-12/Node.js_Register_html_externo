//Requisões express, pg, body-parser
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');


// Denominando variaveis do modulo
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.options('*',cors())
const port = 8081

//Conexao com banco de dados
const pool = new Pool({
    user: 'usuario',
    host: 'ip_do_banco',
    database: 'Nome_do_banco',
    password: 'Senha_do_usuario',
    port: 5432
})

//Açoes das rotas
app.post('/login', (req, res) => {
    console.log('Hello')
})

app.post('/registro_U', (req, res) => {
    let comando = 'insert into coletalixo.usuario(usuario_cpf, usuario_nome, usuario_tipo,'
    comando += 'usuario_localizacao, usuario_senha, usuario_status)'
    comando += 'values ($1, $2, $3, $4, $5, $6);'

    const values = [req.body.usuario.usuario_cpf, req.body.usuario.usuario_nome, req.body.usuario.usuario_tipo, req.body.usuario.usuario_localizacao, req.body.usuario.usuario_senha, req.body.usuario.usuario_status]

    console.log('informaçoes do front')
    console.log(req.body)

    pool.query(comando, values, (err, consulta) => {
        if (err) {
            console.log('Algo deu errado: ' + err)
            res.send('error no insert')
        }
        else {
            res.send('ok')
        }
    });
})

//Porta de entrar esperando ser chamado
app.listen(port, ()=> {
    pool.connect()
    console.log(`example app listening at http:localhost:${port}`)
})