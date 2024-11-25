function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
  
    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.classList.add('active');
    }
  }
  
  function logout() {
    // Redirigir al HTML de login
    window.location.href = "seleccion inicio de sesion.html";
  }
  
  function registrarAdmin() {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmar_password').value;
  
    // Validar contraseñas
    if (password !== confirmarPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  
    // Crear objeto administrador
    const admin = {
      nombre,
      apellido,
      email: correo,
      password,
    };
  
    // Enviar datos a la API
    fetch('http://localhost:5001/api/admins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message); // Confirmación de éxito
          window.location.href = 'login admin.html'; // Redirigir al login
        } else {
          alert('Error al registrar el administrador.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al conectar con el servidor.');
      });
  }
  