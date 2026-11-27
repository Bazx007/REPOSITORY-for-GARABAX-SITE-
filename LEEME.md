# Trazo: base de un sitio de arte digital

## Cómo abrirlo

1. Descomprimí el ZIP completo.
2. Abrí la carpeta arte-digital en VS Code.
3. Abrí index.html en Chrome, Firefox o Edge con doble clic.
4. Guardá tus cambios en VS Code y recargá el navegador.

No requiere instalaciones, servidor, npm ni conexión a internet.

## Organización

- index.html: página principal, presentación, navegación y contenedor de tarjetas.
- css/estilos.css: colores, tipografía, distribución y adaptación al celular.
- js/app.js: lista de obras y generación de tarjetas.
- imagenes/: imágenes de muestra. Podés agregar tus JPG, PNG, WebP o SVG.
- obras/: destinos provisionales de los enlaces. Su diseño queda pendiente.

## HTML: estructura y significado

Una etiqueta delimita un elemento: <p>Texto</p> crea un párrafo.
Los atributos agregan información: href en un enlace indica su destino.

- head: título, codificación, configuración móvil y archivos conectados.
- body: contenido visible.
- header: cabecera; nav: navegación; main: contenido principal.
- section: sección; article: una tarjeta con sentido propio; footer: pie.
- h1: título principal; h2: título de sección; h3: título de tarjeta.
- p: párrafo; a: enlace; img: imagen.
- id: identificador único, como galeria. href="#galeria" salta a esa sección.
- class: nombre reutilizable para aplicar estilos a varios elementos.

La etiqueta link conecta el CSS. La etiqueta script conecta JavaScript.
El atributo defer permite ejecutar el script cuando el HTML ya está leído.

## CSS: presentación

Una regla como `.tarjeta h3 { font-size: 24px; }` selecciona los títulos
h3 dentro de tarjetas y les asigna un tamaño.
Las variables de :root permiten cambiar los colores desde un solo lugar.
Grid distribuye las tarjetas en columnas. Las reglas @media cambian esa
cantidad según el ancho de pantalla.

## JavaScript: datos y comportamiento

const declara una referencia que no se reasigna.
`obras` es un array (lista); cada objeto entre llaves representa una obra.
Las propiedades titulo, imagen y enlace guardan sus datos.

querySelector busca un elemento del HTML usando un selector.
createElement crea un elemento en memoria.
textContent coloca texto sin interpretarlo como HTML.
append y appendChild insertan elementos en la página.
crearTarjeta es una función: recibe una obra y devuelve su tarjeta.
forEach ejecuta una función una vez por cada elemento de la lista.
length devuelve la cantidad de elementos.

El DOM es la representación del documento que JavaScript puede consultar
y modificar. El script encuentra el contenedor #tarjetas, crea los artículos
y los inserta en él. Los enlaces navegan con HTML: no necesitan un evento click.

## Cómo agregar una tarjeta

1. Copiá una imagen dentro de imagenes/, por ejemplo mi-obra.jpg.
2. En js/app.js agregá este objeto dentro del array obras, antes de su cierre ].
   Separá cada objeto del siguiente con una coma.

```js
{
  titulo: "Mi nueva obra",
  categoria: "Ilustración",
  descripcion: "Una breve descripción de mi creación.",
  imagen: "ejemplo.svg",
  alt: "ejem",
  enlace: "obras/mi-obra.html"
}
```

3. Creá obras/mi-obra.html copiando una de las páginas provisionales.
4. Guardá y recargá index.html. El contador se actualiza automáticamente.

Usá rutas y nombres exactos, preferentemente sin espacios ni tildes.
Los destinos y las imágenes se resuelven desde index.html porque allí se
insertan las tarjetas. Dentro de obras/, ../ permite subir una carpeta.
Para destinos externos, usá la URL completa con https:// y una fuente confiable.

## Cómo colocar tu logo

Guardá imagenes/logo.png. En la cabecera de index.html reemplazá el contenido
`trazo<span>®</span>` del enlace de marca por:

```html
<img src="imagenes/logo.png" alt="Nombre de tu sitio" width="120">
```

## Alcance de esta primera etapa

Los nombres y las ilustraciones son ejemplos reemplazables. Las imágenes
SVG son gráficos geométricos incluidos en el proyecto.
No hay formulario de subida, usuarios ni base de datos. Para publicar una
obra se editan los archivos: JavaScript no guarda cambios en un servidor.
Para que otras personas entren con un enlace, el sitio deberá alojarse en
un servicio web. Abrirlo en tu equipo permite probarlo localmente.

La próxima etapa será definir las páginas individuales: imagen completa,
descripción, autor, técnica u otros datos que elijas.
