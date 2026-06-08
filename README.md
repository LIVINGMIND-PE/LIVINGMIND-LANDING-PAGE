# LIVING MIND - Plataforma de Aprendizaje y Tutorías Online

¡Bienvenido a **LIVING MIND**! Este proyecto es una plataforma web moderna diseñada para conectar a estudiantes con tutores expertos de todo el mundo. El sitio permite a los usuarios buscar clases en diversas áreas (Académica, Profesional y Desarrollo Personal) y ofrece una sección dedicada para que nuevos profesionales se unan como tutores.

---

## Estructura del Proyecto

El proyecto está compuesto por dos páginas principales completamente responsivas:

* **`index.html` (Landing Page Principal):** Orientada a los estudiantes. Cuenta con un buscador de materias, exploración de categorías de aprendizaje, una sección de cómo funciona el servicio ("Encuentra, Conecta, Aprende") y llamados a la acción para iniciar el viaje educativo.
* **`tutor.html` (Conviértete en Tutor):** Orientada a los profesionales que desean enseñar. Explica los beneficios de la plataforma (horarios flexibles, alcance global, pagos seguros) y detalla el proceso de integración en 3 simples pasos.

---

## Características Visuales y de Diseño

El diseño de la interfaz ha sido cuidadosamente estructurado siguiendo las maquetas de diseño para garantizar la consistencia de la marca:

### Paleta de Colores
* **Verde Corporativo:** `#00594C` (aproximado) - Utilizado en secciones principales de enganche, botones secundarios y branding.
* **Acento Naranja/Dorado:** `#F2A115` (aproximado) - Utilizado para los botones de llamado a la acción principales (*Call to Action*).
* **Fondos Neutros:** Combinación de blanco puro y tonos azulados/grises muy tenues para delimitar las tarjetas de beneficios y categorías.

### Tipografía y Componentes
* Jerarquía clara con fuentes sans-serif modernas y legibles.
* Diseño basado en tarjetas (*Cards*) con sutiles sombras (*box-shadow*) y bordes redondeados para una experiencia limpia y estética.
* Iconografía intuitiva para representar el flujo de procesos y los beneficios.

---

## Tecnologías Sugeridas para la Implementación

Para llevar estas vistas a código, se recomienda la siguiente estructura base:

* **HTML5:** Estructura semántica (`<header>`, `<main>`, `<section>`, `<footer>`).
* **CSS3 / Tailwind CSS:** Para el estilizado rápido, grid de categorías, flexbox en la navegación y adaptabilidad móvil (*Responsive Design*).
* **Componentes Clave:**
    * Formularios de búsqueda funcionales en el Hero de `index.html`.
    * Efectos *hover* interactivos en las tarjetas de categorías y botones.

---

## Organización de Archivos

```text
├── index.html          # Vista principal para estudiantes
├── tutor.html          # Vista de captación de tutores
├── css/
│   └── styles.css      # Hojas de estilo personalizadas
└── assets/             # Imágenes, iconos y logotipos de LIVING MIND