# Cómo personalizar esta versión

Descomprimí todo el ZIP y abrí index.html. No necesitás instalar nada.

## Logo GIF
Guardá tu animación como imagenes/logo.gif. En index.html, dentro del enlace marca-logo, cambiá src="imagenes/logo.svg" por src="imagenes/logo.gif". El navegador reproduce el GIF automáticamente: no necesita JavaScript. Conservamos tu SVG actual hasta que agregues el GIF. El ancho se controla en .marca-logo img, en css/estilos.css. Para reducir movimiento usá un GIF suave o una versión estática; las preferencias de CSS no pausan un GIF.

## Imagen de fondo
La versión incluye fondo.svg de ejemplo, basado en la portada de Órbita. Guardá tu imagen como imagenes/fondo.jpg y cambiá --imagen-fondo en el bloque INTERACTIVIDAD del CSS a url("../imagenes/fondo.jpg"). cover llena la pantalla y puede recortar los bordes.

En js/app.js, actualizarFondo calcula qué proporción de la página recorriste. La fórmula 0.30 + progreso * 0.55 pasa de 30% a 85% de negro. Al volver arriba se aclara. Solo afecta el fondo. Sin JavaScript conserva la oscuridad inicial.

## Zoom y enlaces
--zoom-tarjeta: 1.07 controla cuánto aumenta la imagen. El enlace .imagen-obra contiene la imagen y recorta el zoom. Su href usa obra.enlace, igual que Explorar obra. En celular tocá la imagen; con teclado usá Tab y Enter.

## Colecciones corregidas
La tercera lista ahora se llama obrasMusica en todos sus usos. Se corrigió también aria-labelledby del título musical. Las tres colecciones tienen 4, 2 y 1 tarjetas.

El adjunto no contenía guardian.jpg, ciudad.jpg, bax.jpg ni sus páginas de destino. Incluimos portadas SVG de ejemplo y páginas provisionales para que no queden enlaces rotos. Reemplazá las portadas y actualizá sus rutas en app.js cuando tengas tus imágenes. Tus cuatro obras originales se conservaron.

## Agregar otra colección
Creá una sección con su contenedor y contador de id únicos en index.html. En app.js agregá una lista de objetos con titulo, categoria, descripcion, imagen, alt y enlace. Usá crearTarjeta(obra) para cada objeto, agregala al contenedor y actualizá el contador con lista.length. El nombre de la lista debe coincidir exactamente en todas sus referencias.

Los estilos nuevos están comentados al final del CSS. Respetan la preferencia del sistema de reducir movimiento para las animaciones CSS.
