import { Router } from "express";
import multer from "multer";
import conection from "../../db/db.js";

const router = Router();

export function ingreso(user, pass, route) {
  conection.query("select * from administrador", (err, res) => {
    if (err) throw err;
    let i = 0;
    let acc = false;
    res.forEach((u) => {
      if (u.usuario == user && u.contraseña == pass) {
       acc = true
      }
    });
    if (acc == true) {
      route.render("estadisticas")
    } else {
      route.send("Usuario incorrecto")
    }
  });
}

const upload = multer({
  dest: "src/uploads",
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/nosotros", (req, res) => {
  res.render("nosotros");
});

const file = upload.single("file");

router
  .get("/admin", (req, res) => {
    res.render("admin");
  })
  .post("/login", file, (req, res) => {
    const data = req.body;
    console.log(data.user + data.pass);
    ingreso(data.user, data.pass, res);
  });

router.get("/portafolio", (req, res) => {
  res.render("portafolio");
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});

export default router;
