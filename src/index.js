import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import indexRoutes from "./routes/routes.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(indexRoutes);

app.use(express.static(join(__dirname, "/public")));

app.listen(3000);
console.log("El servidor se esta ejecutando en el puerto localhost:3000");

export function productos() {

  fs.readFileSync("../../data/data.JSON", "utf-8", (e, data) => {
    if (e) {
      console.log(e);
      return;
    }
    const jsonContent = JSON.parse(data);
    console.log(jsonContent);
  });
}
