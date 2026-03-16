import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const app = express()

let __dirname = dirname(fileURLToPath(import.meta.url))

app.set("view engine", "ejs")
app.set("views", join(__dirname, "../public/views"))

app.use(express.static(join(__dirname, "../public")))

app.get("/", (req, res) => {
    res.render("main")
})

app.get("/Unit-Converstion", (req, res) => {
    res.render("uniconver")
})

app.get("/Calculator", (req, res) => {
    res.render("calculator")
})

app.listen(5000, console.log("Alive in http://localhost:5000"))