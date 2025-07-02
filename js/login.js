document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("usuario").value.trim().toLowerCase();
  const pass = document.getElementById("clave").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;
  const mensaje = document.getElementById("mensaje");

  // Usuarios prototipo (fijos)
  const credencialesValidas = {
    "usuario@aduana.com": {
      clave: "usuario123",
      tipo: "persona",  // ← aquí debe ser "persona", no "usuario"
      redirigir: "../index.html"
    },
    "funcionario@aduana.com": {
      clave: "funcionario123",
      tipo: "funcionario",
      redirigir: "../official/dashboard-funcionario.html"
    }
  };

  let usuarioInfo = credencialesValidas[user];

  if (!usuarioInfo) {
    // Buscar en usuarios registrados dinámicamente
    const usuarioRegistrado = localStorage.getItem(user);
    if (usuarioRegistrado) {
      const datos = JSON.parse(usuarioRegistrado);
      if (pass === datos.password && tipoUsuario === datos.tipo) {
        usuarioInfo = {
          clave: datos.password,
          tipo: datos.tipo,
          redirigir:
            datos.tipo === "funcionario"
              ? "../official/dashboard-funcionario.html"
              : "../index.html"
        };
      }
    }
  }

  if (usuarioInfo && pass === usuarioInfo.clave && tipoUsuario === usuarioInfo.tipo) {
    localStorage.setItem("usuarioLogeado", usuarioInfo.tipo);
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
    mensaje.style.color = "green";

    const paginaDestino = localStorage.getItem("paginaDestino") || usuarioInfo.redirigir;
    localStorage.removeItem("paginaDestino");

    setTimeout(() => {
      window.location.href = paginaDestino;
    }, 1000);
  } else {
    mensaje.textContent = "Usuario, contraseña o tipo de usuario incorrecto.";
    mensaje.style.color = "red";
  }
});
