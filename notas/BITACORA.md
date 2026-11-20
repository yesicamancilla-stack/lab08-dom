
# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | El titulo cambio a Hola TECSUP | Si |
| style.color | El titulo cambio a color azul | Si |


## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Hacer un clic en el boton | 1 |
| dblclick | Hacer doble clic en el boton | 1 |
| mouseover | Pasar el cursor sobre el boton | 1 |

evento.type muestra el tipo de evento que se ejecuto, como click, dblclick o mouseover.

evento.target muestra el elemento HTML que recibio el evento, en este caso el boton Sumar 1.

## Ejercicio 4: Eventos input y submit


| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El saludo cambio mientras escribia | No |
| Enviar sin preventDefault | El mensaje Enviado aparecio y desaparecio | Si |
| Enviar con preventDefault, correo sin @ | Aparecio un mensaje de error en rojo | No |
| Enviar con preventDefault, correo con @ | Aparecio el mensaje Enviado con el correo | No |


## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500 | 1875.00 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90.00 |


Usar una clase permite crear varios productos con los mismos atributos y metodos sin repetir el codigo.

Tambien facilita agregar nuevos productos y mostrarlos automaticamente en la pagina sin modificar el HTML.
