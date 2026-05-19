# Brote Academy

Sitio público de documentación, guías y casos de Brote — el agente IA conversacional para PYMEs LATAM.

URL pública: **[academy.brote.ai](https://academy.brote.ai)**
Repo: https://github.com/fcolabbe/brote-academy
Producto: [brote.ai](https://brote.ai/es)

Construido con **[Astro Starlight](https://starlight.astro.build/)**, hosting gratuito en **Cloudflare Pages**, dominio en Cloudflare DNS.

---

## Estructura

```
brote-academy/
├── astro.config.mjs              # Config de Starlight (sidebar, marca, locales)
├── package.json
├── public/
│   ├── favicon.svg
│   └── screenshots/              # Capturas del producto (PNGs)
├── src/
│   ├── assets/logo.svg
│   ├── styles/brand.css          # Colores Brote (lime #C8FF1A)
│   └── content/docs/
│       ├── index.mdx             # Home
│       ├── faq.mdx
│       ├── empezar/              # Onboarding
│       ├── copilot/              # Brote Copilot
│       ├── canales/              # WhatsApp, Webchat, etc
│       ├── inbox/                # Inbox y pipeline
│       ├── pagos/                # Mercado Pago
│       ├── campanas/             # Campañas masivas
│       ├── integraciones/        # Shopify, Zapier, Slack
│       ├── verticales/           # Por industria
│       ├── planes/               # Pricing, trial, cupón
│       └── marca/                # Tono y CTAs
```

## Desarrollo local

```bash
npm install
npm run dev           # http://localhost:4321
npm run build         # genera dist/
npm run preview       # preview del build
```

## Deploy a Cloudflare Pages

### 1. Crear el proyecto en Cloudflare Pages

1. Entra a [dash.cloudflare.com → Workers & Pages → Create application → Pages](https://dash.cloudflare.com/)
2. Click **"Connect to Git"** y elige este repo (`fcolabbe/brote-academy`)
3. Configuración del build:
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
   - **Variable de entorno:** `NODE_VERSION=22`
4. Click **"Save and Deploy"**. El primer build tarda ~2 min.

### 2. Conectar el dominio `academy.brote.ai`

En el proyecto recién creado en CF Pages:

1. Pestaña **"Custom domains"** → **"Set up a custom domain"**
2. Ingresa `academy.brote.ai`
3. CF detecta automáticamente que ya tienes `brote.ai` en CF DNS y crea el registro CNAME por ti.
4. Espera ~1-2 min para que SSL Let's Encrypt se aprovisione.
5. Verifica en `https://academy.brote.ai` que carga el sitio.

### 3. Auto-deploy con cada push

Cada `git push` a `main` dispara un rebuild automático. Preview deploys también se generan en branches (URL temporal por branch).

## Editar contenido

Todas las páginas son archivos Markdown/MDX en `src/content/docs/`. La estructura del sidebar se define en `astro.config.mjs`. Para agregar una página:

1. Crea `src/content/docs/<seccion>/<slug>.mdx` con frontmatter:
   ```mdx
   ---
   title: Mi nueva página
   description: Descripción corta para SEO y card preview.
   ---

   Contenido en Markdown o MDX...
   ```
2. Agrega el slug al `sidebar` de `astro.config.mjs`.
3. Commit + push → auto-deploy.

## Marca

- **Color primario**: `#C8FF1A` (lime accent)
- **Logo**: `src/assets/logo.svg`
- **Tono**: tuteo neutro chileno (tú/tienes/configura). NUNCA voseo argentino.

Más en [src/content/docs/marca/](src/content/docs/marca/).

## TODO post-launch

- Re-tomar screenshots del dashboard interno con cuenta admin + datos sintéticos
- Agregar páginas técnicas (API reference, webhooks payload examples) para Business
- Traducción al inglés (frontmatter ya soporta i18n, falta poblar `/en/`)
- Algolia DocSearch (gratis para docs públicos) — alternativa a Pagefind si crece la base
- Newsletter via Beehiiv/ConvertKit
