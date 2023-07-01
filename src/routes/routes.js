import { Router } from "express";
import { productos } from "../index";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/nosotros", (req, res) => {
  res.render("nosotros");
});


router
  .get("/admin", (req, res) => {
    res.render("admin");
  })
  .post("/login", (req, res) => {
    const data = req.body;
    console.log(data.user + data.pass);
    ingreso(data.user, data.pass, res);
  });

router.get("/portafolio", (req, res) => {
  productos
  res.render("portafolio");
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});

export default router;
