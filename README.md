# Portafolio Matrix

> Portafolio web personal con estética cyberpunk inspirada en The Matrix

[![Status](https://img.shields.io/badge/status-complete-success)]()
[![License](https://img.shields.io/badge/license-MIT-blue)]()
[![GitHub Pages](https://img.shields.io/badge/deploy-github%20pages-2ea44f)]()

## 🎯 About

Portafolio web interactivo con temática de Matrix que presenta habilidades y proyectos de desarrollo web. Cuenta con efectos visuales inmersivos como lluvia digital, animaciones de escritura tipo terminal, y una interfaz de línea de comandos funcional.

El proyecto demuestra dominio de HTML5, CSS3 y JavaScript vanilla, implementando animaciones performantes, diseño responsive mobile-first, y accesibilidad web.

## ✨ Features

- **Digital Rain Effect**: Animación de lluvia de caracteres katakana en canvas HTML5 con opacidad variable
- **Terminal Interactiva**: Consola funcional con 10+ comandos (help, about, projects, skills, contact, whoami, ls, clear)
- **Glitch Effects**: Distorsiones visuales en títulos y elementos al hacer hover
- **Typing Animation**: Texto que se escribe automáticamente como en una terminal real
- **Code Decode Effect**: Títulos que revelan su contenido mediante animación de descifrado
- **Project Filter**: Sistema de filtrado de proyectos por categoría (Web, Mobile, Games)
- **Contact Form**: Formulario con validación en tiempo real y efectos de carga Matrix
- **Scroll Animations**: Elementos que aparecen suavemente al hacer scroll
- **Responsive Design**: Mobile-first con 3 breakpoints (640px, 768px, 1024px)
- **Accesibilidad**: Navegación por teclado, ARIA labels, soporte para reduced motion

## 🛠️ Technologies

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Styling** | CSS Custom Properties, BEM methodology |
| **Animations** | Canvas API, CSS Keyframes, RequestAnimationFrame |
| **Tools** | Git, GitHub, OpenCode |
| **Deployment** | GitHub Pages |
| **Design** | Mobile-first, Accessibility-first |

## 🚀 Live Demo

[View Demo](https://LeandroPacsiM.github.io/Portafolio-Matrix/)

## 💻 Usage

### Navegación
- Usa el menú de navegación superior para moverte entre secciones
- Scroll suave entre Hero, About, Projects, Skills y Contact

### Terminal Interactiva
Escribe comandos en la terminal del Hero section:

| Comando | Descripción |
|---------|-------------|
| `help` | Lista todos los comandos disponibles |
| `about` | Muestra información sobre el desarrollador |
| `projects` | Lista proyectos destacados |
| `skills` | Muestra habilidades técnicas |
| `contact` | Información de contacto |
| `whoami` | Usuario actual del sistema |
| `ls` | Lista archivos del directorio |
| `clear` | Limpia la consola |

### Filtros de Proyectos
Haz clic en las categorías (All, Web Apps, Mobile, Games) para filtrar los proyectos mostrados.

### Formulario de Contacto
Completa los campos (nombre, email, mensaje) y envía. La validación es en tiempo real.

## 📁 Project Structure

```
Portafolio-Matrix/
├── README.md                 # Documentación del proyecto
├── AGENTS.md                 # Instrucciones para agentes de IA
├── index.html                # Página principal (647 líneas)
├── css/
│   └── styles.css            # Estilos Matrix (1200+ líneas)
├── js/
│   ├── main.js               # Lógica principal, navegación, validación
│   ├── matrix-rain.js        # Animación de lluvia digital
│   └── terminal.js           # Terminal interactiva con comandos
├── assets/
│   └── images/               # Imágenes del proyecto
└── .opencode/skills/         # 12 skills reutilizables
    ├── readme-generator/
    ├── project-init/
    ├── web-component/
    ├── portfolio-section/
    ├── matrix-theme/
    ├── matrix-effects/
    ├── terminal-ui/
    ├── page-transition/
    ├── responsive-layout/
    ├── animation-utils/
    ├── project-showcase/
    └── contact-form/
```

## 🏁 Getting Started

### Prerequisites

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de texto (VS Code recomendado)
- Git instalado (opcional, para contribuir)

### Installation

1. Clona el repositorio:
```bash
git clone https://github.com/LeandroPacsiM/Portafolio-Matrix.git
cd Portafolio-Matrix
```

2. Abre el archivo `index.html` en tu navegador:
```bash
# Opción 1: Doble clic en el archivo
# Opción 2: Usar Live Server en VS Code
# Opción 3: Usar python -m http.server
python -m http.server 8000
```

3. Visita `http://localhost:8000`

### Personalización

1. **Información personal**: Edita `index.html` para cambiar nombre, email, redes sociales
2. **Proyectos**: Modifica la sección de Projects con tus proyectos reales
3. **Colores**: Ajusta las CSS custom properties en `styles.css`
4. **Formulario**: Configura tu Formspree ID en `index.html:417`

## 🤝 Contributing

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 License

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👤 Author

**Leandro Javier Pacsi Mamani**

- GitHub: [@LeandroPacsiM](https://github.com/LeandroPacsiM)
- Email: [tu.email@example.com](mailto:tu.email@example.com)
- LinkedIn: [Tu perfil](https://linkedin.com/in/tu-perfil)

---

<div align="center">

**Hecho con 💚 y código estilo Matrix**

[⬆️ Volver al inicio](#portafolio-matrix)

</div>
