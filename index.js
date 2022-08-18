import express from "express";
import gamesRouter from "./routes/livros.js";
import path from "path";
import { fileURLToPath } from 'url';
const port = 3000;

//config ejs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');


app.listen(port, async () => {    
    try {
    console.log("server iniciado")
    } catch (err) {
        console.log(err)
    }       
});
app.use("/", gamesRouter);
