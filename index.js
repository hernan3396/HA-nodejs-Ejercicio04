const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hola"));
app.get("/multplicar", (req, res) => {
  console.log(req.query);
  const resultado = JSON.stringify(req.query.num1 * req.query.num2);
  console.log(resultado);
  res.send(resultado);
});

app.listen(3000, () =>
  console.log("¡Servidor corriendo en http://localhost:3000")
);
