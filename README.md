# Flexin Web – Tienda de Bolsas Reutilizables (React + Vite)

**Demo online:** https://demianezequiel912.github.io/flexin-web/#/  

---

## Descripción  
Flexin Web es una aplicación de comercio electrónico simple realizada como Trabajo Práctico en React + Vite.  
La idea es mostrar un catálogo de bolsas reutilizables, con detalles por producto, navegación entre secciones y manejo de estados (loading, error) al consumir datos.

---

## 🔧 Tecnologías utilizadas  
- React  
- Vite  
- React Router DOM  
- Fetch API (consumo de JSON)  
- JavaScript ES6+  
- Bootstrap (o CSS personalizado)  
- GitHub Pages (deploy)  

---

## Estructura del proyecto  
flexin-web/
│
├── public/
│ ├── productos.json
│ └── bolsas/
│   ├── bolsa1.jpg
│   └── bolsa2.jpg
│   └── bolsa3.jpg
│   └── bolsa4.jpg
├── src/
│ │ └── productos.js
│ ├── pages/
│ │ └── Inicio.jsx
│ │ └── NoEncontrado.jsx
│ │ └── Nosotros.jsx
│ │ └── ProductoDetalle.jsx
│ │ └── Tienda.jsx
│ ├── components/
│ │ └── Contacto.sjx
│ │ └── Footer.jsx
│ │ └── Hero.jsx
│ │ └── Navbar.jsx
│ │ └── Productos.sjx
│ │ └── Seccion.jsx
│ ├── pages/
│ │  ├── bolsa1.jpg
│ │  └── bolsa2.jpg
│ │  └── bolsa3.jpg
│ │  └── bolsa4.jpg
│ │  └── fondoPrincipal.jpg
│ │  └── fondoPrincipal2.jpg
│ │  └── logo.jpg
│ ├── App.jsx
│ └── main.jsx
├── vite.config.js
└── README.md

##  Rutas de la aplicación  

| Ruta                  | Descripción                          |
|-----------------------|--------------------------------------|
| `/`                   | Página de inicio                      |
| `/productos`          | Catálogo de productos (fetch JSON)    |
| `/producto/:id`       | Página de detalle del producto        |
| `/nosotros`           | Información de la empresa             |
| `/contacto`           | Formulario de contacto                |
| `*`                   | Ruta 404 – Página “No encontrado”     |

---

## Principales funcionalidades  
- Carga de datos mediante un JSON externo (`public/productos.json`)  
- Manejo de estados: *loading* y *error* al cargar datos  
- Componente reutilizables (cards, listas, navbar/footer)  
- Navegación con React Router (incluye ruta 404)  
- Deploy directo en GitHub Pages  

---

##  Cómo ejecutar el proyecto localmente  

```bash
# clonar el repositorio
git clone https://github.com/demianezequiel912/flexin-web.git  

# ir al directorio
cd flexin-web  

# instalar dependencias
npm install  

# correr el servidor de desarrollo
npm run dev  

# generar build para producción
npm run build  

# ver el build localmente
npm run preview  

Este proyecto fue desarrollado con el objetivo de practicar los conceptos de React: rutas, consumo de datos dinámicos, estado, componentes modulares y despliegue.
Se puede extender con funcionalidades como carrito de compras, autenticación, filtros y más.

