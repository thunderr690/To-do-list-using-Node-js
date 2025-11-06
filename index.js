import express from 'express'
import path from "path"

import { fileURLToPath } from 'url'

const app = express()


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine','ejs')
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, resp) => {
    resp.render('list')
})

app.get("/add", (req, resp) => {
    resp.render('add')
})

app.get("/update", (req, resp) => {
    resp.render('update')
})

app.post("/update", (req, resp) => {
    resp.redirect('/')
})

app.post("/add", (req, resp) => {
    resp.redirect('/')
})

app.listen(3200)