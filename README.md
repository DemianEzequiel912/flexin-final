# Flexin Web – Tienda de Bolsas Reutilizables (React + Vite)

**Demo online:** https://demianezequiel912.github.io/flexin-web/#/  

---

## Descripción  
Flexin Web es una aplicación de comercio electrónico simple realizada como Trabajo Práctico en React + Vite.  
La aplicación muestra un catálogo de bolsas reutilizables, con detalles por producto, navegación entre secciones y manejo de estados (*loading* y *error*) al consumir datos desde un JSON externo.

---

## Tecnologías utilizadas  
- React  
- Vite  
- React Router DOM  
- Fetch API (consumo de JSON externo)  
- JavaScript ES6+  
- Bootstrap / CSS personalizado  
- GitHub Pages (deploy)  

---

## Rutas de la aplicación  

| Ruta                  | Descripción                          |
|-----------------------|--------------------------------------|
| `/`                   | Página de inicio                      |
| `/tienda`             | Catálogo de productos (fetch JSON)    |
| `/producto/:id`       | Página de detalle del producto        |
| `/nosotros`           | Información de la empresa             |
| `/contacto`           | Formulario de contacto                |
| `*`                   | Ruta 404 – Página “No encontrado”     |

---

## Capturas del Proyecto

### Inicio por partes
<img width="1900" height="875" alt="Captura de pantalla 2025-11-16 213138" src="https://github.com/user-attachments/assets/18084a49-1085-4495-8474-7a3b3cc389e0" />
<img width="1905" height="870" alt="Captura de pantalla 2025-11-16 213147" src="https://github.com/user-attachments/assets/9265e56b-57d8-4b31-8828-6543889c31a8" />
<img width="1900" height="876" alt="Captura de pantalla 2025-11-16 213153" src="https://github.com/user-attachments/assets/f2985ee5-40fc-47d7-9bea-5a3bea67509e" />
<img width="1901" height="874" alt="Captura de pantalla 2025-11-16 213203" src="https://github.com/user-attachments/assets/c6ac9986-1a9f-463b-9657-60e40da2a1d3" />

### Tienda/Productos
<img width="1917" height="872" alt="Captura de pantalla 2025-11-16 213208" src="https://github.com/user-attachments/assets/7f8c5c84-93f9-46d9-be27-ceb4c1e956c1" />

### Detalles de los Productos
<img width="1897" height="868" alt="Captura de pantalla 2025-11-16 213404" src="https://github.com/user-attachments/assets/f7f51610-cbca-4138-97e7-da6347618891" />

### Nosotros
<img width="1919" height="879" alt="Captura de pantalla 2025-11-16 213214" src="https://github.com/user-attachments/assets/1b0776cd-f1ad-45a6-964c-4052696e94eb" />

### Contacto
<img width="1901" height="877" alt="Captura de pantalla 2025-11-16 213225" src="https://github.com/user-attachments/assets/98d32770-6ee8-425a-b040-cc519e2e222a" />
<img width="1903" height="872" alt="Captura de pantalla 2025-11-16 213232" src="https://github.com/user-attachments/assets/db824fd5-2a18-409d-a580-11913c23665c" />

### Página 404
<img width="1917" height="875" alt="Captura de pantalla 2025-11-16 213623" src="https://github.com/user-attachments/assets/55e06432-8ecd-4c3d-995d-5bb3f1f107d7" />

---
## Principales funcionalidades  
- Carga de datos mediante un JSON externo (`public/productos.json`).  
- Manejo de estados: **loading** y **error** durante la carga.  
- Componentes reutilizables (tarjetas, listas, navbar/footer).  
- Página de detalle por ID utilizando `useParams`.  
- Navegación con React Router, incluyendo página 404.  
- Compatibilidad con GitHub Pages mediante `HashRouter` y `import.meta.env.BASE_URL`.  
- Deploy directo utilizando GitHub Pages.

---

## Cómo ejecutar el proyecto localmente  

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
```

---

## Autores  
- **Demian Sebrero**  
- **Jorge Mindolacio**
- **Ivan Vida**
- **Agustin de Boeuf**  

---

## Notas finales  
Este proyecto fue desarrollado para practicar los conceptos fundamentales de React:  
- ruteo,  
- consumo de datos dinámicos,  
- manejo de estado,  
- componentes modulares,  
- y despliegue.  

El proyecto puede ampliarse con funcionalidades como carrito de compras, filtros, autenticación y más.
