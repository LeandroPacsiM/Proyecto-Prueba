# Contexto del Proyecto

**Estado:** Portafolio web personal - completo y listo para desarrollo

## Repositorio

- **Propietario:** Leandro Javier Pacsi Mamani
- **Remoto:** https://github.com/LeandroPacsiM/Portafolio-Matrix

## Ramas Git

- `main` - rama de producción (actual)
- `develop` - rama de desarrollo
- `feature/leandro-pacsi` - rama de funcionalidades

## Estructura del Proyecto

```
Portafolio-Matrix/
├── AGENTS.md              # Este archivo - instrucciones para agentes
├── .opencode/
│   └── skills/            # Habilidades reutilizables del agente
│       ├── project-init/
│       ├── web-component/
│       ├── portfolio-section/
│       ├── matrix-theme/
│       ├── matrix-effects/
│       ├── terminal-ui/
│       ├── page-transition/
│       ├── responsive-layout/
│       ├── animation-utils/
│       ├── project-showcase/
│       └── contact-form/
├── css/
│   └── styles.css         # Estilos completos del portafolio
├── js/
│   ├── main.js            # JavaScript principal
│   ├── terminal.js        # Componente terminal interactivo
│   └── matrix-rain.js     # Efecto lluvia digital
└── index.html             # Punto de entrada principal (647 líneas)
```

## Habilidades Disponibles

Este proyecto tiene habilidades personalizadas para estandarizar tareas comunes:

### Habilidades Principales
| Habilidad | Propósito |
|-----------|-----------|
| `project-init` | Inicializar estructura de proyecto web desde cero |
| `web-component` | Crear componentes UI reutilizables con accesibilidad |
| `portfolio-section` | Construir secciones del portafolio (hero, about, projects, skills, contact) |

### Habilidades de Estética Matrix
| Habilidad | Propósito |
|-----------|-----------|
| `matrix-theme` | Aplicar paleta de colores Matrix (verde/negro) y estilo cyberpunk |
| `matrix-effects` | Implementar lluvia digital, glitch y animaciones de escritura |
| `terminal-ui` | Crear componentes UI inspirados en terminal/línea de comandos |
| `page-transition` | Añadir transiciones suaves con efectos de descodificación de código |

### Habilidades Utilitarias
| Habilidad | Propósito |
|-----------|-----------|
| `responsive-layout` | Construir layouts responsivos mobile-first |
| `animation-utils` | Animaciones CSS/JS reutilizables optimizadas para 60fps |
| `project-showcase` | Mostrar proyectos con filtros y efectos hover estilo Matrix |
| `contact-form` | Crear formularios de contacto con validación y estilo Matrix |

## Cómo Trabajar en Este Proyecto

### Iniciar nuevas funcionalidades
1. Preguntar sobre los requisitos primero
2. Usar la habilidad apropiada para la tarea
3. Seguir enfoque mobile-first, accesibilidad-first

### Convenciones de código
- **HTML:** HTML5 semántico, jerarquía de headings adecuada, ARIA cuando sea necesario
- **CSS:** Mobile-first, CSS custom properties, nomenclatura BEM
- **JS:** Sintaxis ES6+, const/let sobre var, event delegation

### Lista de calidad
- [ ] Responsivo en mobile/tablet/desktop
- [ ] Accesible (navegación por teclado, amigo para lectores de pantalla)
- [ ] Carga rápida (imágenes optimizadas, dependencias mínimas)
- [ ] Código limpio y comentado

## Notas

- Este es un proyecto de portafolio personal
- Preferir JS vanilla a menos que la complejidad requiera un framework
- Mantener el diseño simple y profesional
- Después de completar una tarea de construcción, recomendar un mensaje de commit al usuario (no hacer commit automáticamente - preguntar primero)