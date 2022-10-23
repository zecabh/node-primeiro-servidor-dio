const express = require("express")
const path = require("path")

const stats = require("./pcRamUsage.js")

const app = express()
const router = express.Router() 

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

router.get("/stats", (req, res)=>{
    res.end(JSON.stringify(stats, null, 2))
})

app.use(router)

app.listen(process.env.PORT || 3333, ()=>{
    console.log("Servidor rodando!")
})