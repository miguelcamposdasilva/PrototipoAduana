function verificarSesionYRedirigir(pagina) {
  // Verificar si el usuario está logeado y es funcionario
  const usuarioLogeado = localStorage.getItem("usuarioLogeado");
  const esFuncionario = usuarioLogeado === "funcionario";
  
  if (!usuarioLogeado) {
    // Si no hay sesión, redirigir al login con la página de destino como parámetro
    localStorage.setItem("paginaDestino", pagina);
    window.location.href = "../users/login.html";
    return;
  }
  
  // Verificar permisos para páginas de funcionario
  if (pagina.includes("dashboard") || pagina.includes("funcionario")) {
    if (!esFuncionario) {
      alert("Acceso denegado: Se requieren privilegios de funcionario");
      return;
    }
  }
  
  // Redirigir a la página solicitada
  window.location.href = pagina;
}