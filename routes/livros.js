import express from "express";
const router = express.Router();
import dadosController from '../controller/controller.js'


router.get("/", async (req, res, next) => {
    let itens = [];
    itens = dadosController.items
    res.render('index.ejs',{itens: itens});
});
export default router;
