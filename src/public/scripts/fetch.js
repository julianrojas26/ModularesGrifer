function enviar() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  const usuario = {
    user,
    pass,
  };
  fetch("http://localhost:3000/a", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: usuario
  })
    .then((res) => usuario)
    .then((data) => console.log(data));
}
