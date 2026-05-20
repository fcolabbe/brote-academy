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
            { label: 'WhatsApp (Evolution)', slug: 'canales/whatsapp' },
            { label: 'Webchat embebible', slug: 'canales/webchat' },
            { label: 'Instagram DMs', slug: 'canales/instagram' },
            { label: 'Messenger', slug: 'canales/messenger' },
            { label: 'Email (Gmail / Outlook)', slug: 'canales/email' },
            { label: 'LinkedIn (Pro/Business)', slug: 'canales/linkedin' },
            { label: 'Telegram (Pro/Business)', slug: 'canales/telegram' },
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
          label: 'Pagos',
          items: [
            { label: 'Conectar Mercado Pago', slug: 'pagos/mercado-pago' },
            { label: 'Cobrar dentro del chat', slug: 'pagos/cobro-in-chat' },
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
