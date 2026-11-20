
// Tarea: Registro de notas de estudiantes

// Clase Estudiante
class Estudiante {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  descripcion() {
    return this.nombre + " - Nota: " + this.nota;
  }
}

// Crear objetos iniciales
const estudiante1 = new Estudiante("Ana", 18);
const estudiante2 = new Estudiante("Luis", 15);

const estudiantes = [estudiante1, estudiante2];

// Seleccionar elementos del DOM
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const nota = document.querySelector("#nota");
const mensaje = document.querySelector("#mensaje");
const listaNotas = document.querySelector("#listaNotas");

// Mostrar estudiantes en la pagina
function mostrarEstudiante(estudiante) {
  const li = document.createElement("li");
  li.textContent = estudiante.descripcion();

  // Crear boton para borrar
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";

  // Evento click para eliminar
  btnBorrar.addEventListener("click", () => {
    const indice = estudiantes.indexOf(estudiante);
    if (indice !== -1) {
      estudiantes.splice(indice, 1);
    }

    li.remove();
    mensaje.textContent = "Estudiante eliminado correctamente";
  });

  li.appendChild(btnBorrar);
  listaNotas.appendChild(li);
}

// Mostrar objetos iniciales
estudiantes.forEach(mostrarEstudiante);

// Evento submit para agregar estudiantes
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreIngresado = nombre.value.trim();
  const notaIngresada = Number(nota.value);

  // Validar los datos
  if (
    nombreIngresado === "" ||
    nota.value.trim() === "" ||
    !Number.isFinite(notaIngresada) ||
    notaIngresada < 0 ||
    notaIngresada > 20
  ) {
    mensaje.textContent = "Ingrese datos validos";
    return;
  }

  // Crear un nuevo objeto
  const nuevoEstudiante = new Estudiante(
    nombreIngresado,
    notaIngresada
  );

  estudiantes.push(nuevoEstudiante);

  // Mostrarlo en la pagina
  mostrarEstudiante(nuevoEstudiante);

  mensaje.textContent = "Estudiante agregado correctamente";

  formulario.reset();
});
