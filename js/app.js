// Cada objeto representa una tarjeta. Reemplazá los ejemplos con tus obras.
// Las rutas se interpretan desde index.html.
const obras = [
  {
    titulo: "EL ARTE DE YAREH DEVIL",
    categoria: "Desarrollo de videojuegos",
    descripcion: "Explora el proceso de crear el arte para el juego Yare devils.",
    imagen: "imagenes/icon.svg",
    alt: "Ilustración de ejemplo: sol y montañas de tonos violetas",
    enlace: "obras/horizonte.html"
  },
  {
    titulo: "Órbita interior",
    categoria: "Abstracción",
    descripcion: "Círculos que se encuentran y construyen un pequeño universo.",
    imagen: "imagenes/candadotranspa.png",
    alt: "Ilustración de ejemplo: círculos y anillos sobre fondo oscuro",
    enlace: "obras/orbita.html"
  },
  {
    titulo: "Jardín eléctrico",
    categoria: "Exploración de color",
    descripcion: "Formas orgánicas y contrastes inspirados en la naturaleza.",
    imagen: "imagenes/candadotranspa.png",
    alt: "Ilustración de ejemplo: hojas geométricas verdes y rosadas",
    enlace: "obras/jardin.html"
  },
   {
    titulo: "El arte de YARE DEVILbeta",
    categoria: "Desarrollo de videojuegos",
    descripcion: "Explora el proceso de crear el arte para el juego Yare devils.",
    imagen: "imagenes/candadotranspa.png",
    alt: "Explora tanto los sketches, como los diseños iniciales de este proyecto.",
    enlace: "obras/Yare-Devils-ART.html"
  }

  
];

// Obras que pertenecen a la segunda colección.


const obrasPersonajes = [
  {
    titulo: "Guardián del bosque",
    categoria: "Diseño de personajes",
    descripcion: "Un personaje inspirado en los espíritus del bosque.",
    imagen: "imagenes/candadotranspa.png",
    alt: "Personaje fantástico rodeado de árboles",
    enlace: "obras/guardian.html"
  },
  {
    titulo: "Ciudad imaginaria",
    categoria: "Arte conceptual",
    descripcion: "Una exploración de arquitectura y mundos fantásticos.",
    imagen: "imagenes/candadotranspa.png",
    alt: "Ciudad fantástica con edificios y torres",
    enlace: "obras/ciudad.html"
  }
];







// Obras que pertenecen a la TERCERA colección.
const obrasMusica = [
  {
    titulo: "b adventure",
    categoria: "Diseño de musica",
    descripcion: "Un personaje inspirado en b.",
    imagen: "imagenes/candadotranspa.png",
    alt: "",
    enlace: "obras/baxos.html"
  }
];

const contenedor = document.querySelector("#tarjetas");

// Una función agrupa instrucciones reutilizables.
function crearTarjeta(obra) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const imagen = document.createElement("img");
  imagen.src = obra.imagen;
  imagen.alt = obra.alt;
  // EL TAMAÑO DE LAS IMAGENES DE LAS PORTADAS SE DEBEN BASAR EN:
  imagen.width = 600;
  imagen.height = 250; // MODIFICA EL TAMAÑO DE ESTAS TARJETAS
  imagen.loading = "lazy";

  const categoria = document.createElement("p");
  categoria.className = "categoria";
  categoria.textContent = obra.categoria;

  const titulo = document.createElement("h3");
  titulo.textContent = obra.titulo;

  const descripcion = document.createElement("p");
  descripcion.className = "descripcion";
  descripcion.textContent = obra.descripcion;

  const enlace = document.createElement("a");
  enlace.className = "enlace-obra";
  enlace.href = obra.enlace;
  enlace.textContent = "Explorar obra ↗";
  enlace.setAttribute("aria-label", `Explorar obra: ${obra.titulo}`);

  // La imagen es un enlace real: también funciona con teclado y en celular.
  const enlaceImagen = document.createElement("a");
  enlaceImagen.className = "imagen-obra";
  enlaceImagen.href = obra.enlace;
  enlaceImagen.setAttribute("aria-label", `Ver obra: ${obra.titulo}`);
  enlaceImagen.appendChild(imagen);
  tarjeta.append(enlaceImagen, categoria, titulo, descripcion, enlace);
  return tarjeta;
}

// Recorremos la lista y agregamos una tarjeta por cada obra.
obras.forEach(function (obra) {
  contenedor.appendChild(crearTarjeta(obra));
});

document.querySelector("#cantidad").textContent = obras.length;

// Buscamos el contenedor de la segunda colección.
const contenedorPersonajes = document.querySelector(
  "#tarjetas-personajes"
);

// Creamos una tarjeta por cada obra de esta colección.
obrasPersonajes.forEach(function (obra) {2
  contenedorPersonajes.appendChild(crearTarjeta(obra));
});

// Actualizamos el contador de esta colección.
document.querySelector("#cantidad-personajes").textContent = obrasPersonajes.length;









// Buscamos el contenedor de la TERCERA colección.
const contenedorMusica = document.querySelector(
  "#tarjetas-musica"
);

// Creamos una tarjeta por cada obra de esta colección.
obrasMusica.forEach(function (obra) {
  contenedorMusica.appendChild(crearTarjeta(obra));
});

// Actualizamos el contador de esta colección.
document.querySelector("#cantidad-musica").textContent =
obrasMusica.length;

// Oscurecimiento progresivo: 0 al inicio y 1 al final de la página.
// requestAnimationFrame agrupa actualizaciones para evitar trabajo por cada evento.
let actualizacionPendiente = false;
function actualizarFondo() {
  const recorrido = document.documentElement.scrollHeight - window.innerHeight;
  const progreso = recorrido > 0 ? Math.min(1, Math.max(0, window.scrollY / recorrido)) : 0;
  document.documentElement.style.setProperty("--oscuridad-fondo", 0.30 + progreso * 0.55);
  actualizacionPendiente = false;
}
function programarFondo() {
  if (!actualizacionPendiente) {
    actualizacionPendiente = true;
    window.requestAnimationFrame(actualizarFondo);
  }
}
window.addEventListener("scroll", programarFondo, { passive: true });
window.addEventListener("resize", programarFondo);
window.addEventListener("load", programarFondo);
window.addEventListener("pageshow", programarFondo);
actualizarFondo();
