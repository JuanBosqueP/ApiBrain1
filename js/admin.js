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
// Cambio dinámico entre secciones
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Logout
function logoutd() {
  alert("Cerrando sesión...");
  window.location.href = 'seleccion inicio de sesion.html';
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

function getEstudiantes() {
  fetch('http://localhost:5001/api/estudiantes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById('estudiantesResult');
      resultDiv.innerHTML = '<ul>' + data.map(estudiante => `
        <li>
          <strong>ID:</strong> ${estudiante._id} - 
          <strong>Nombre:</strong> ${estudiante.nombre} ${estudiante.apellido} - 
          <strong>Email:</strong> ${estudiante.email} - 
          <strong>Teléfono:</strong> ${estudiante.telefono || 'No especificado'} - 
          <strong>Fecha de creación:</strong> ${new Date(estudiante.createdAt).toLocaleString()}
        </li>`).join('') + '</ul>';
    })
    .catch((error) => {
      console.error('Error al obtener los estudiantes:', error);
      alert('No se pudieron cargar los estudiantes.');
    });
}

function updateEstudiante() {
  const id = prompt('ID del estudiante que desea actualizar:');
  
  // Solicitar los datos actualizados al usuario
  const updatedData = {
    nombre: prompt('Nuevo nombre del estudiante:'),
    apellido: prompt('Nuevo apellido del estudiante:'),
    email: prompt('Nuevo correo del estudiante (dejar vacío para no cambiar):'),
    telefono: prompt('Nuevo teléfono del estudiante (dejar vacío para no cambiar):'),
  };

  // Limpiar campos vacíos (solo se enviarán los campos modificados)
  Object.keys(updatedData).forEach(key => {
    if (!updatedData[key]) delete updatedData[key];
  });

  // Enviar la solicitud PUT al backend
  fetch(`http://localhost:5001/api/estudiantes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al actualizar el estudiante');
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message || 'Estudiante actualizado exitosamente');
      getEstudiantes(); // Refresca la lista de estudiantes
    })
    .catch((error) => {
      console.error('Error al actualizar el estudiante:', error);
      alert('Hubo un error al actualizar el estudiante.');
    });
}


function deleteEstudiante() {
  const id = prompt('ID del estudiante que desea eliminar:');
  fetch(`http://localhost:5001/api/estudiantes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message || 'Estudiante eliminado exitosamente');
      getEstudiantes(); // Refresca la lista de estudiantes
    })
    .catch((error) => {
      console.error('Error al eliminar el estudiante:', error);
    });
}

function getDocentes() {
  fetch('http://localhost:5001/api/tutores', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById('docentesResult');
      resultDiv.innerHTML = '<ul>' + data.map(tutor => `
        <li>
          <strong>ID:</strong> ${tutor._id} - 
          <strong>Nombre:</strong> ${tutor.nombre} ${tutor.apellido} - 
          <strong>Email:</strong> ${tutor.email} - 
          <strong>Materia:</strong> ${tutor.materia} - 
          <strong>Nivel Educativo:</strong> ${tutor.nivelEducativo || 'No especificado'} - 
          <strong>Fecha de creación:</strong> ${new Date(tutor.createdAt).toLocaleString()}
        </li>`).join('') + '</ul>';
    })
    .catch((error) => {
      console.error('Error al obtener los tutores:', error);
      alert('No se pudieron cargar los tutores.');
    });
}




function updateDocente() {
  const id = prompt('ID del docente que desea actualizar:');
  
  // Solicitar los datos actualizados al usuario
  const updatedData = {
    nombre: prompt('Nuevo nombre del docente:'),
    apellido: prompt('Nuevo apellido del docente:'),
    email: prompt('Nuevo correo del docente (dejar vacío para no cambiar):'),
    materia: prompt('Nueva materia del docente (dejar vacío para no cambiar):'),
    nivelEducativo: prompt('Nuevo nivel educativo del docente (dejar vacío para no cambiar):'),
  };

  // Limpiar campos vacíos (solo se enviarán los campos modificados)
  Object.keys(updatedData).forEach(key => {
    if (!updatedData[key]) delete updatedData[key];
  });

  // Enviar la solicitud PUT al backend
  fetch(`http://localhost:5001/api/tutores/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al actualizar el docente');
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message || 'Docente actualizado exitosamente');
      getDocentes(); // Refresca la lista de docentes
    })
    .catch((error) => {
      console.error('Error al actualizar el docente:', error);
      alert('Hubo un error al actualizar el docente.');
    });
}


function deleteDocente() {
  const id = prompt('ID del docente que desea eliminar:');
  fetch(`http://localhost:5001/api/tutores/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message || 'Docente eliminado exitosamente');
      getDocentes(); // Refresca la lista de docentes
    })
    .catch((error) => {
      console.error('Error al eliminar el docente:', error);
    });
}

function getTutorias() {
  fetch('http://localhost:5001/api/tutorias', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById('tutoriasResult');
      resultDiv.innerHTML = '<ul>' + data.map(tutoria => `
        <li>
          <strong>ID:</strong> ${tutoria._id} - 
          <strong>Estudiante:</strong> ${tutoria.estudiante.nombre} ${tutoria.estudiante.apellido} - 
          <strong>Tutor:</strong> ${tutoria.tutor.nombre} ${tutoria.tutor.apellido} - 
          <strong>Fecha:</strong> ${new Date(tutoria.fecha).toLocaleString()} - 
          <strong>Tema:</strong> ${tutoria.tema} - 
          <strong>Ubicación:</strong> ${tutoria.ubicacion || 'No especificada'}
        </li>`).join('') + '</ul>';
    })
    .catch((error) => {
      console.error('Error al obtener las tutorías:', error);
      alert('No se pudieron cargar las tutorías.');
    });
}

function getTutorias() {
  fetch('http://localhost:5001/api/tutorias', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById('tutoriasResult');
      resultDiv.innerHTML = '<ul>' + data.map(tutoria => `
        <li>
          <strong>ID:</strong> ${tutoria._id} - 
          <strong>Estudiante:</strong> ${tutoria.estudiante.nombre} ${tutoria.estudiante.apellido} - 
          <strong>Tutor:</strong> ${tutoria.tutor.nombre} ${tutoria.tutor.apellido} - 
          <strong>Fecha:</strong> ${new Date(tutoria.fecha).toLocaleString()} - 
          <strong>Tema:</strong> ${tutoria.tema} - 
          <strong>Ubicación:</strong> ${tutoria.ubicacion || 'No especificada'}
        </li>`).join('') + '</ul>';
    })
    .catch((error) => {
      console.error('Error al obtener las tutorías:', error);
      alert('No se pudieron cargar las tutorías.');
    });
}


function updateTutoria() {
  const id = prompt('ID de la tutoría que desea actualizar:');
  
  const updatedData = {
    estudiante: prompt('Nuevo ID del estudiante asignado (dejar vacío para no cambiar):'),
    tutor: prompt('Nuevo ID del tutor asignado (dejar vacío para no cambiar):'),
    fecha: prompt('Nueva fecha de la tutoría (YYYY-MM-DD, dejar vacío para no cambiar):'),
    tema: prompt('Nuevo tema de la tutoría (dejar vacío para no cambiar):'),
    ubicacion: prompt('Nueva ubicación de la tutoría (dejar vacío para no cambiar):'),
  };

  Object.keys(updatedData).forEach(key => {
    if (!updatedData[key]) delete updatedData[key];
  });

  fetch(`http://localhost:5001/api/tutorias/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al actualizar la tutoría');
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message || 'Tutoría actualizada exitosamente');
      getTutorias(); // Refresca la lista de tutorías
    })
    .catch((error) => {
      console.error('Error al actualizar la tutoría:', error);
      alert('Hubo un error al actualizar la tutoría.');
    });
}

function deleteTutoria() {
  const id = prompt('ID de la tutoría que desea eliminar:');

  fetch(`http://localhost:5001/api/tutorias/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al eliminar la tutoría');
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message || 'Tutoría eliminada exitosamente');
      getTutorias(); // Refresca la lista de tutorías
    })
    .catch((error) => {
      console.error('Error al eliminar la tutoría:', error);
      alert('Hubo un error al eliminar la tutoría.');
    });
}

function createTutoria() {
  // Solicitar datos de la nueva tutoría
  const nuevaTutoria = {
    estudiante: prompt('ID del estudiante asignado:'),
    tutor: prompt('ID del tutor asignado:'),
    fecha: prompt('Fecha de la tutoría (YYYY-MM-DD):'),
    tema: prompt('Tema de la tutoría:'),
    ubicacion: prompt('Ubicación de la tutoría (opcional):'),
  };

  // Validar campos obligatorios
  if (!nuevaTutoria.estudiante || !nuevaTutoria.tutor || !nuevaTutoria.fecha || !nuevaTutoria.tema) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  // Enviar la solicitud POST al backend
  fetch('http://localhost:5001/api/tutorias', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nuevaTutoria),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al registrar la tutoría');
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message || 'Tutoría registrada exitosamente');
      getTutorias(); // Refresca la lista de tutorías
    })
    .catch((error) => {
      console.error('Error al registrar la tutoría:', error);
      alert('Hubo un error al registrar la tutoría.');
    });
}



