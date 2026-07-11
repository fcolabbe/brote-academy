// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// Academy de Brote — academy.brote.ai
// Deploy: Cloudflare Pages con build command `npm run build` y output `dist/`.
// DNS: CNAME academy.brote.ai → <project>.pages.dev

export default defineConfig({
  site: 'https://academy.brote.ai',
  integrations: [
    starlight({
      title: 'Academy Brote',
      description:
        'Aprende a configurar tu agente IA de Brote en 15 minutos, conectar canales, cobrar con Mercado Pago y vender mientras duermes.',
      logo: {
        src: './src/assets/logoh.png',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es' },
        en: { label: 'English', lang: 'en' },
      },
      customCss: ['./src/styles/brand.css'],
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/brote-ai' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/fcolabbe' },
      ],
      editLink: {
        baseUrl: 'https://github.com/fcolabbe/brote-academy/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      head: [
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#C8FF1A' },
        },
      ],
      sidebar: [
        {
          label: 'Empezar', translations: { en: 'Getting started' },
          items: [
            { label: '🗺️ Mapa de funcionalidades (todo Brote)', translations: { en: '🗺️ Feature map (all of Brote)' }, slug: 'empezar/mapa-de-funcionalidades', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Bienvenido a Brote', translations: { en: 'Welcome to Brote' }, slug: 'empezar/bienvenido' },
            { label: 'Crear tu cuenta', translations: { en: 'Create your account' }, slug: 'empezar/crear-cuenta' },
            { label: 'Tu primer agente IA en 15 min', translations: { en: 'Your first AI agent in 15 min' }, slug: 'empezar/primer-agente' },
            { label: '⭐ El Agente IA (de cero a 100)', translations: { en: '⭐ The AI Agent (from zero to 100)' }, slug: 'empezar/agente-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: '⭐ Plantillas por rubro (de cero a 100)', translations: { en: '⭐ Industry templates (from zero to 100)' }, slug: 'empezar/plantillas-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Plantillas por rubro', translations: { en: 'Industry templates' }, slug: 'empezar/plantillas-por-rubro', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Conectar WhatsApp', translations: { en: 'Connect WhatsApp' }, slug: 'empezar/conectar-whatsapp' },
            { label: '⭐ App móvil + push (de cero a 100)', translations: { en: '⭐ Mobile app + push (from zero to 100)' }, slug: 'empezar/app-movil-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
          ],
        },
        {
          label: 'Brote Copilot',
          items: [
            { label: '⭐ Brote Copilot (de cero a 100)', translations: { en: '⭐ Brote Copilot (from zero to 100)' }, slug: 'copilot/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Qué es Brote Copilot', translations: { en: 'What is Brote Copilot' }, slug: 'copilot/que-es' },
            { label: 'Onboarding por audio', translations: { en: 'Audio onboarding' }, slug: 'copilot/audio-onboarding' },
            { label: 'Onboarding por URL del sitio', translations: { en: 'Website URL onboarding' }, slug: 'copilot/url-onboarding' },
            { label: 'Auditoría automática del agente', translations: { en: 'Automatic agent audit' }, slug: 'copilot/audit' },
          ],
        },
        {
          label: 'Canales', translations: { en: 'Channels' },
          items: [
            { label: '⭐ Canales (de cero a 100)', translations: { en: '⭐ Channels (from zero to 100)' }, slug: 'canales/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'WhatsApp (oficial)', translations: { en: 'WhatsApp (official)' }, slug: 'canales/whatsapp' },
            { label: 'Instagram DMs (oficial)', translations: { en: 'Instagram DMs (official)' }, slug: 'canales/instagram' },
            { label: 'Messenger (oficial)', translations: { en: 'Messenger (official)' }, slug: 'canales/messenger' },
            { label: 'Webchat embebible', translations: { en: 'Embeddable webchat' }, slug: 'canales/webchat' },
            { label: 'Email (próximamente)', translations: { en: 'Email (coming soon)' }, slug: 'canales/email' },
            { label: 'Telegram (próximamente)', translations: { en: 'Telegram (coming soon)' }, slug: 'canales/telegram' },
          ],
        },
        {
          label: 'Inbox y pipeline', translations: { en: 'Inbox & pipeline' },
          items: [
            { label: '⭐ Inbox y pipeline (de cero a 100)', translations: { en: '⭐ Inbox & pipeline (from zero to 100)' }, slug: 'inbox/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Inbox unificado', translations: { en: 'Unified inbox' }, slug: 'inbox/inbox-unificado' },
            { label: 'Pipeline kanban', translations: { en: 'Kanban pipeline' }, slug: 'inbox/pipeline' },
            { label: 'Tags y campos custom', translations: { en: 'Tags & custom fields' }, slug: 'inbox/tags-fields' },
            { label: 'Handoff a humano', translations: { en: 'Human handoff' }, slug: 'inbox/handoff' },
            { label: 'Salud del agente (heartbeat)', translations: { en: 'Agent health (heartbeat)' }, slug: 'inbox/salud-del-agente', badge: { text: 'NEW', variant: 'success' } },
          ],
        },
        {
          label: 'Automatización', translations: { en: 'Automation' },
          items: [
            { label: '⭐ Automatización (de cero a 100)', translations: { en: '⭐ Automation (from zero to 100)' }, slug: 'automatizacion/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Tools del agente IA', translations: { en: 'AI agent tools' }, slug: 'automatizacion/tools-del-agente' },
            { label: 'Agente con voz clonada', translations: { en: 'Agent with cloned voice' }, slug: 'automatizacion/agente-voz-clonada', badge: { text: 'NEW', variant: 'success' } },
          ],
        },
        {
          label: 'Voz IA (TTS)', translations: { en: 'AI Voice (TTS)' },
          items: [
            { label: '⭐ Voz (de cero a 100)', translations: { en: '⭐ Voice (from zero to 100)' }, slug: 'voz/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Qué es la voz clonada', translations: { en: 'What is cloned voice' }, slug: 'voz/que-es' },
          ],
        },
        {
          label: 'Contactos (CRM)', translations: { en: 'Contacts (CRM)' },
          items: [
            { label: '⭐ Contactos / CRM (de cero a 100)', translations: { en: '⭐ Contacts / CRM (from zero to 100)' }, slug: 'contactos/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Importar desde CSV', translations: { en: 'Import from CSV' }, slug: 'contactos/importar-csv' },
            { label: 'Fusionar duplicados', translations: { en: 'Merge duplicates' }, slug: 'contactos/merge' },
            { label: 'Etapas (lifecycle)', translations: { en: 'Lifecycle stages' }, slug: 'contactos/lifecycle' },
            { label: 'Identidad cross-canal', translations: { en: 'Cross-channel identity' }, slug: 'contactos/identidad-cross-canal', badge: { text: 'NEW', variant: 'success' } },
          ],
        },
        {
          label: 'Pagos', translations: { en: 'Payments' },
          items: [
            { label: '⭐ Cobrar en el chat (de cero a 100)', translations: { en: '⭐ Charge in chat (from zero to 100)' }, slug: 'pagos/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Conectar Mercado Pago', translations: { en: 'Connect Mercado Pago' }, slug: 'pagos/mercado-pago' },
            { label: 'Cobrar dentro del chat', translations: { en: 'Charge inside the chat' }, slug: 'pagos/cobro-in-chat' },
          ],
        },
        {
          label: 'Agendamiento', translations: { en: 'Scheduling' },
          items: [
            { label: '⭐ Agendamiento (de cero a 100)', translations: { en: '⭐ Scheduling (from zero to 100)' }, slug: 'agendamiento/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Qué es el agendamiento', translations: { en: 'What is scheduling' }, slug: 'agendamiento/que-es', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Configurar servicios y horarios', translations: { en: 'Set up services & hours' }, slug: 'agendamiento/configurar' },
            { label: 'Cobrar la reserva y agenda por profesional', translations: { en: 'Charge bookings & per-professional calendars' }, slug: 'agendamiento/servicios-profesionales', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Alojamiento por noches (estadía)', translations: { en: 'Nightly lodging (stays)' }, slug: 'agendamiento/alojamiento-por-noches', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Link público de reserva', translations: { en: 'Public booking link' }, slug: 'agendamiento/link-publico', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Recordatorios automáticos', translations: { en: 'Automatic reminders' }, slug: 'agendamiento/recordatorios' },
          ],
        },
        {
          label: 'Logística (Chile)', translations: { en: 'Logistics (Chile)' },
          items: [
            { label: '⭐ Logística (de cero a 100)', translations: { en: '⭐ Logistics (from zero to 100)' }, slug: 'logistica/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Chilexpress + Starken', translations: { en: 'Chilexpress + Starken' }, slug: 'logistica' },
          ],
        },
        {
          label: 'Campañas', translations: { en: 'Campaigns' },
          items: [
            { label: '⭐ Campañas (de cero a 100)', translations: { en: '⭐ Campaigns (from zero to 100)' }, slug: 'campanas/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Qué son las campañas', translations: { en: 'What campaigns are' }, slug: 'campanas/que-son' },
            { label: 'Crear tu primera campaña', translations: { en: 'Create your first campaign' }, slug: 'campanas/crear' },
            { label: 'Caps por plan y protección WA', translations: { en: 'Plan caps & WA protection' }, slug: 'campanas/caps' },
            { label: 'Opt-out automático', translations: { en: 'Automatic opt-out' }, slug: 'campanas/opt-out' },
          ],
        },
        {
          label: 'Integraciones', translations: { en: 'Integrations' },
          items: [
            { label: '⭐ Shopify (de cero a 100)', translations: { en: '⭐ Shopify (from zero to 100)' }, slug: 'integraciones/shopify-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Shopify (técnico)', translations: { en: 'Shopify (technical)' }, slug: 'integraciones/shopify' },
            { label: '⭐ Google Calendar (de cero a 100)', translations: { en: '⭐ Google Calendar (from zero to 100)' }, slug: 'integraciones/calendar-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Google Calendar (técnico)', translations: { en: 'Google Calendar (technical)' }, slug: 'integraciones/calendar' },
            { label: '⭐ Google Sheets (de cero a 100)', translations: { en: '⭐ Google Sheets (from zero to 100)' }, slug: 'integraciones/sheets-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Google Sheets (técnico)', translations: { en: 'Google Sheets (technical)' }, slug: 'integraciones/sheets' },
            { label: '⭐ Slack (de cero a 100)', translations: { en: '⭐ Slack (from zero to 100)' }, slug: 'integraciones/slack-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Slack (técnico)', translations: { en: 'Slack (technical)' }, slug: 'integraciones/slack' },
            { label: '⭐ Conectar con otras apps (de cero a 100)', translations: { en: '⭐ Connect other apps (from zero to 100)' }, slug: 'integraciones/conectar-apps-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Zapier (6.000+ apps)', translations: { en: 'Zapier (6,000+ apps)' }, slug: 'integraciones/zapier' },
            { label: 'Webhooks y API (Business)', translations: { en: 'Webhooks & API (Business)' }, slug: 'integraciones/webhooks-api' },
            { label: '⭐ MCP Server (de cero a 100)', translations: { en: '⭐ MCP Server (from zero to 100)' }, slug: 'integraciones/mcp-de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'MCP Server (técnico)', translations: { en: 'MCP Server (technical)' }, slug: 'integraciones/mcp-server' },
            { label: '⭐ Atribución de ventas (de cero a 100)', translations: { en: '⭐ Sales attribution (from zero to 100)' }, slug: 'integraciones/atribucion-roas', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Meta Conversions API (técnico)', translations: { en: 'Meta Conversions API (technical)' }, slug: 'integraciones/meta-conversions-api' },
            { label: 'Make + n8n + cualquier endpoint', translations: { en: 'Make + n8n + any endpoint' }, slug: 'integraciones/make-n8n', badge: { text: 'NEW', variant: 'success' } },
            { label: 'TikTok Events API (técnico)', translations: { en: 'TikTok Events API (technical)' }, slug: 'integraciones/tiktok-events-api' },
          ],
        },
        {
          label: 'Casos por vertical', translations: { en: 'Industry playbooks' },
          items: [
            { label: 'Hotelería y turismo', translations: { en: 'Hospitality & tourism' }, slug: 'verticales/hoteleria' },
            { label: 'Retail / e-commerce', translations: { en: 'Retail / e-commerce' }, slug: 'verticales/retail' },
            { label: 'Inmobiliaria', translations: { en: 'Real estate' }, slug: 'verticales/inmobiliaria' },
            { label: 'Salud y clínicas', translations: { en: 'Health & clinics' }, slug: 'verticales/salud' },
            { label: 'Gastronomía', translations: { en: 'Restaurants' }, slug: 'verticales/gastronomia' },
          ],
        },
        {
          label: 'Planes y facturación', translations: { en: 'Plans & billing' },
          items: [
            { label: 'Comparativa de planes', translations: { en: 'Plan comparison' }, slug: 'planes/comparativa' },
            { label: 'Trial de 14 días', translations: { en: '14-day trial' }, slug: 'planes/trial' },
            { label: 'Cupón COQUIMBO', translations: { en: 'COQUIMBO coupon' }, slug: 'planes/cupon-coquimbo' },
            { label: 'Cobranza con Polar', translations: { en: 'Billing with Polar' }, slug: 'planes/polar' },
          ],
        },
        {
          label: 'Marca y tono', translations: { en: 'Brand & tone' },
          items: [
            { label: '⭐ Marca / personalización (de cero a 100)', translations: { en: '⭐ Brand / customization (from zero to 100)' }, slug: 'marca/de-cero-a-100', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Tono y registro', translations: { en: 'Tone & register' }, slug: 'marca/tono' },
            { label: 'CTAs oficiales', translations: { en: 'Official CTAs' }, slug: 'marca/ctas' },
          ],
        },
        {
          label: 'FAQ', translations: { en: 'FAQ' },
          link: '/faq',
        },
      ],
    }),
  ],
})
