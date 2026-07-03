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
          label: 'Empezar',
          items: [
            { label: 'Bienvenido a Brote', slug: 'empezar/bienvenido' },
            { label: 'Crear tu cuenta', slug: 'empezar/crear-cuenta' },
            { label: 'Tu primer agente IA en 15 min', slug: 'empezar/primer-agente' },
            { label: 'Plantillas por rubro', slug: 'empezar/plantillas-por-rubro', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Conectar WhatsApp', slug: 'empezar/conectar-whatsapp' },
          ],
        },
        {
          label: 'Brote Copilot',
          items: [
            { label: 'Qué es Brote Copilot', slug: 'copilot/que-es' },
            { label: 'Onboarding por audio', slug: 'copilot/audio-onboarding' },
            { label: 'Onboarding por URL del sitio', slug: 'copilot/url-onboarding' },
            { label: 'Auditoría automática del agente', slug: 'copilot/audit' },
          ],
        },
        {
          label: 'Canales',
          items: [
            { label: 'WhatsApp (oficial)', slug: 'canales/whatsapp' },
            { label: 'Instagram DMs (oficial)', slug: 'canales/instagram' },
            { label: 'Messenger (oficial)', slug: 'canales/messenger' },
            { label: 'Webchat embebible', slug: 'canales/webchat' },
            { label: 'Email (próximamente)', slug: 'canales/email' },
            { label: 'Telegram (próximamente)', slug: 'canales/telegram' },
          ],
        },
        {
          label: 'Inbox y pipeline',
          items: [
            { label: 'Inbox unificado', slug: 'inbox/inbox-unificado' },
            { label: 'Pipeline kanban', slug: 'inbox/pipeline' },
            { label: 'Tags y campos custom', slug: 'inbox/tags-fields' },
            { label: 'Handoff a humano', slug: 'inbox/handoff' },
          ],
        },
        {
          label: 'Automatización',
          items: [
            { label: 'Tools del agente IA', slug: 'automatizacion/tools-del-agente' },
            { label: 'Agente con voz clonada', slug: 'automatizacion/agente-voz-clonada', badge: { text: 'NEW', variant: 'success' } },
          ],
        },
        {
          label: 'Voz IA (TTS)',
          items: [
            { label: 'Qué es la voz clonada', slug: 'voz/que-es' },
          ],
        },
        {
          label: 'Contactos (CRM)',
          items: [
            { label: 'Importar desde CSV', slug: 'contactos/importar-csv' },
            { label: 'Fusionar duplicados', slug: 'contactos/merge' },
            { label: 'Etapas (lifecycle)', slug: 'contactos/lifecycle' },
          ],
        },
        {
          label: 'Pagos',
          items: [
            { label: 'Conectar Mercado Pago', slug: 'pagos/mercado-pago' },
            { label: 'Cobrar dentro del chat', slug: 'pagos/cobro-in-chat' },
          ],
        },
        {
          label: 'Agendamiento',
          items: [
            { label: 'Qué es el agendamiento', slug: 'agendamiento/que-es', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Configurar servicios y horarios', slug: 'agendamiento/configurar' },
            { label: 'Cobrar la reserva y agenda por profesional', slug: 'agendamiento/servicios-profesionales', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Alojamiento por noches (estadía)', slug: 'agendamiento/alojamiento-por-noches', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Link público de reserva', slug: 'agendamiento/link-publico', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Recordatorios automáticos', slug: 'agendamiento/recordatorios' },
          ],
        },
        {
          label: 'Logística (Chile)',
          items: [
            { label: 'Chilexpress + Starken', slug: 'logistica' },
          ],
        },
        {
          label: 'Campañas',
          items: [
            { label: 'Qué son las campañas', slug: 'campanas/que-son' },
            { label: 'Crear tu primera campaña', slug: 'campanas/crear' },
            { label: 'Caps por plan y protección WA', slug: 'campanas/caps' },
            { label: 'Opt-out automático', slug: 'campanas/opt-out' },
          ],
        },
        {
          label: 'Integraciones',
          items: [
            { label: 'Shopify', slug: 'integraciones/shopify' },
            { label: 'Google Calendar', slug: 'integraciones/calendar' },
            { label: 'Google Sheets', slug: 'integraciones/sheets' },
            { label: 'Slack', slug: 'integraciones/slack' },
            { label: 'Zapier (6.000+ apps)', slug: 'integraciones/zapier' },
            { label: 'Webhooks y API (Business)', slug: 'integraciones/webhooks-api' },
            { label: 'MCP Server (Claude / ChatGPT)', slug: 'integraciones/mcp-server', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Meta Conversions API (ROAS)', slug: 'integraciones/meta-conversions-api', badge: { text: 'NEW', variant: 'success' } },
            { label: 'Make + n8n + cualquier endpoint', slug: 'integraciones/make-n8n', badge: { text: 'NEW', variant: 'success' } },
            { label: 'TikTok Events API (ROAS)', slug: 'integraciones/tiktok-events-api', badge: { text: 'NEW', variant: 'success' } },
          ],
        },
        {
          label: 'Casos por vertical',
          items: [
            { label: 'Hotelería y turismo', slug: 'verticales/hoteleria' },
            { label: 'Retail / e-commerce', slug: 'verticales/retail' },
            { label: 'Inmobiliaria', slug: 'verticales/inmobiliaria' },
            { label: 'Salud y clínicas', slug: 'verticales/salud' },
            { label: 'Gastronomía', slug: 'verticales/gastronomia' },
          ],
        },
        {
          label: 'Planes y facturación',
          items: [
            { label: 'Comparativa de planes', slug: 'planes/comparativa' },
            { label: 'Trial de 14 días', slug: 'planes/trial' },
            { label: 'Cupón COQUIMBO', slug: 'planes/cupon-coquimbo' },
            { label: 'Cobranza con Polar', slug: 'planes/polar' },
          ],
        },
        {
          label: 'Marca y tono',
          items: [
            { label: 'Tono y registro', slug: 'marca/tono' },
            { label: 'CTAs oficiales', slug: 'marca/ctas' },
          ],
        },
        {
          label: 'FAQ',
          link: '/faq',
        },
      ],
    }),
  ],
})
