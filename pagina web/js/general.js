function handleRedirection() {
    // Obtener el valor seleccionado
    const userType = document.getElementById('tipo_cuenta').value;
  
    // Verificar la selección y redirigir a la página correspondiente
    if (userType === "administrador") {
      window.location.href = "admin.html"; // Página para administrador
    } else if (userType === "tutor") {
      window.location.href = "docente.html"; // Página para docente
    } else if (userType === "usuario") {
      window.location.href = "estudiante.html"; // Página para estudiante
    } else {
      alert("Por favor, seleccione un tipo de cuenta válido."); // Mensaje de error si no se seleccionó nada
    }
  }
  