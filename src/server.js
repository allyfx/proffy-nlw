const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLading, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Configurar o nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
//Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Configurar arquivos estáticos(css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLading)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)