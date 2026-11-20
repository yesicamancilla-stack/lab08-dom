
# Tarea: Mi componente interactivo

## Componente elegido

Elegí desarrollar un registro de notas de estudiantes
utilizando JavaScript. Este componente permite ingresar
el nombre y la nota de un estudiante, mostrar sus datos
en una lista y eliminar registros mediante un botón.

## Codigo principal

```js
class Estudiante {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  descripcion() {
    return this.nombre + " - Nota: " + this.nota;
  }
}

const estudiantes = [
  new Estudiante("Ana", 18),
  new Estudiante("Luis", 15)
];

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const nota = document.querySelector("#nota");
const mensaje = document.querySelector("#mensaje");
const listaNotas = document.querySelector("#listaNotas");

function mostrarEstudiante(estudiante) {
  const li = document.createElement("li");
  li.textContent = estudiante.descripcion();

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";

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

estudiantes.forEach(mostrarEstudiante);

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreIngresado = nombre.value.trim();
  const notaIngresada = Number(nota.value);

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

  const nuevoEstudiante = new Estudiante(
    nombreIngresado,
    notaIngresada
  );

  estudiantes.push(nuevoEstudiante);
  mostrarEstudiante(nuevoEstudiante);

  mensaje.textContent = "Estudiante agregado correctamente";
  formulario.reset();
});
```

## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Abrir la pagina | Aparecen Ana y Luis con sus notas | Si |
| Agregar a Yesica con nota 17 | Aparece Yesica - Nota: 17 | Si |
| Presionar Borrar | Se elimina el estudiante seleccionado | Si |
| Ingresar una nota mayor a 20 | El formulario no permite registrar la nota | Si |

## Por que disene asi mi clase

Elegí los atributos nombre y nota porque permiten
identificar a cada estudiante y registrar su calificación.

El método descripcion() facilita mostrar la información
de cada estudiante sin repetir el mismo código.

Utilizar una clase permite crear nuevos registros y
organizar mejor los datos de la aplicación.
