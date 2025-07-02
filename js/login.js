document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("clave").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;
  const mensaje = document.getElementById("mensaje");

  // Credenciales válidas (modo prototipo)
  const credencialesValidas = {
    "usuario@aduana.com": { clave: "usuario123", tipo: "usuario", redirigir: "../index.html" },
    "funcionario@aduana.com": { clave: "funcionario123", tipo: "funcionario", redirigir: "../official/dashboard-funcionario.html" }
  };

  const usuarioInfo = credencialesValidas[user];

  if (usuarioInfo && pass === usuarioInfo.clave && tipoUsuario === usuarioInfo.tipo) {
    // Guardar tipo de usuario en sesión
    localStorage.setItem("usuarioLogeado", usuarioInfo.tipo);

    // Mensaje de éxito
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
    mensaje.style.color = "green";

    // Redireccionar a página solicitada (o por defecto)
    const paginaDestino = localStorage.getItem("paginaDestino") || usuarioInfo.redirigir;
    localStorage.removeItem("paginaDestino"); // Limpiar destino para futuras sesiones

    setTimeout(() => {
      window.location.href = paginaDestino;
    }, 1000);
  } else {
    mensaje.textContent = "Usuario, contraseña o tipo de usuario incorrecto.";
    mensaje.style.color = "red";
  }
});
