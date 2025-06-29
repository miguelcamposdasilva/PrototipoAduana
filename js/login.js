document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("clave").value;
  const mensaje = document.getElementById("mensaje");

  // Credenciales para usuario normal
  if (user === "usuario@aduana.com" && pass === "usuario123") {
    localStorage.setItem("usuarioLogeado", "usuario");
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
    mensaje.style.color = "green";
    
    // Redirigir a la página destino o al index por defecto
    const paginaDestino = localStorage.getItem("paginaDestino") || "index.html";
    setTimeout(() => {
      window.location.href = paginaDestino;
    }, 1000);
  } 
  // Credenciales para funcionario
  else if (user === "funcionario@aduana.com" && pass === "funcionario123") {
    localStorage.setItem("usuarioLogeado", "funcionario");
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
    mensaje.style.color = "green";
    
    const paginaDestino = localStorage.getItem("paginaDestino") || "../official/dashboard-funcionario.html";
    setTimeout(() => {
      window.location.href = paginaDestino;
    }, 1000);
  } 
  else {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
    mensaje.style.color = "red";
  }
});