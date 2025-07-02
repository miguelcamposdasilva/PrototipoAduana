function verificarSesionYRedirigir(pagina) {
  const usuarioLogeado = localStorage.getItem("usuarioLogeado");
  const esFuncionario = usuarioLogeado === "funcionario";
  
  if (!usuarioLogeado) {
    // Guardar destino y redirigir al login (ruta absoluta desde raíz)
    localStorage.setItem("paginaDestino", pagina);
    window.location.href = "/users/login.html";
    return;
  }
  
  // Si requiere privilegios de funcionario
  if (pagina.includes("dashboard") || pagina.includes("funcionario")) {
    if (!esFuncionario) {
      alert("Acceso denegado: Se requieren privilegios de funcionario");
      return;
    }
  }

  // Redirigir a la página deseada
  window.location.href = pagina;
}
