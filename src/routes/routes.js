import { Router } from "express";
import bodyParser from "body-parser";

const router = Router();

router.use( bodyParser.urlencoded({ extended: true }) );
router.use( bodyParser.json() );

router.get("/", (req, res) => {
    res.render("index")
});

router.get("/nosotros", (req,res) => {
    res.render("nosotros")
})

router.get("/admin", (req, res) => {
    res.render("admin")
}).post("/a", (req, res) => {
    console.log(req)
    res.send("hola")
})

router.get("/portafolio", (req, res) => {
    res.render("portafolio")
})

router.get("/contacto", (req, res) => {
    res.render("contacto")
})

export default router;