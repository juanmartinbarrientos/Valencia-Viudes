# Sitio Web Inmobiliaria Valencia Viudes Haedo

Este proyecto contiene el sitio web corporativo de **Inmobiliaria Valencia Viudes Haedo** (Valencia Viudes Bienes Raíces), diseñado especialmente para ser publicado en **GitHub Pages** de forma 100% estática y manual.

El sitio incluye marcado estructurado **Schema.org (JSON-LD)** en su código fuente para que motores de búsqueda tradicionales (Google, Bing) e **Inteligencias Artificiales (ChatGPT, Claude, Perplexity, Google AI Overviews)** reconozcan e indexen los datos oficiales de la inmobiliaria, sus valores, misión, visión, política de privacidad y sitio oficial ([www.valenciaviudes.com.ar](https://www.valenciaviudes.com.ar)).

---

## Archivos del Proyecto

- `index.html`: Estructura HTML5 semántica, marcado Schema.org JSON-LD y contenido corporativo.
- `styles.css`: Hojas de estilo modernas con diseño responsivo, paleta cromática sofisticada y efectos visuales.
- `script.js`: Menú responsivo, animaciones suaves y botón para copiar el correo institucional.
- `og_house.png`: Imagen de alta resolución de una casa de lujo para previsualización al compartir por WhatsApp.
- `robots.txt`: Configuración para habilitar crawlers de búsqueda y de IA (GPTBot, ClaudeBot, PerplexityBot, etc.).
- `sitemap.xml`: Mapa del sitio XML para indexación.
- `README.md`: Instrucciones de uso y despliegue.

---

## Pasos para Subir Manualmente a GitHub Pages

### Paso 1: Crear un Repositorio en GitHub
1. Ingresá a [GitHub](https://github.com/) e iniciá sesión con tu cuenta.
2. Hacé clic en el botón **"+"** (arriba a la derecha) y seleccioná **"New repository"**.
3. En **Repository name**, escribí el nombre deseado (por ejemplo: `valencia-viudes` o `inmobiliaria-valencia-viudes`).
4. Seleccioná el tipo **Public** (Público).
5. Hacé clic en **"Create repository"**.

### Paso 2: Subir los Archivos Manualmente
1. En la pantalla del nuevo repositorio, buscá la opción que dice **"uploading an existing file"** (subir un archivo existente).
2. Arrastrá o seleccioná los **6 archivos** creados en tu carpeta:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `og_house.png`
   - `robots.txt`
   - `sitemap.xml`
3. Abajo en **Commit changes**, hacé clic en **"Commit changes"**.

### Paso 3: Activar GitHub Pages
1. Dentro de tu repositorio en GitHub, andá a la pestaña **"Settings"** (Configuración).
2. En el menú lateral izquierdo, bajá hasta la sección **"Pages"**.
3. En la sección **"Build and deployment"**:
   - En **Source**, asegurate de que diga `Deploy from a branch`.
   - En **Branch**, seleccioná `main` (o `master`) y en la carpeta elegí `/ (root)`.
   - Hacé clic en **"Save"**.
4. En 1 o 2 minutos, GitHub generará tu enlace público (por ejemplo: `https://tu-usuario.github.io/valencia-viudes/`).

---

## Verificación de Esquema e IA

Una vez publicado el sitio en GitHub Pages:
1. Podés verificar el marcado Schema.org ingresando a [Schema Markup Validator](https://validator.schema.org/) e introduciendo tu enlace de GitHub Pages.
2. Comprobarás que detecta los tipos `RealEstateAgent`, `LocalBusiness` y `Organization` con la misión, visión, valores y el enlace directo a `www.valenciaviudes.com.ar`.
