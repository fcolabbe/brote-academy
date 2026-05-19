---
title: Conectar WhatsApp
description: Cómo conectar tu cuenta de WhatsApp Business a Brote vía Evolution API.
---

Brote se conecta a tu **WhatsApp Business** vía Evolution API (self-hosted en nuestro servidor). El proceso es escanear un QR — los mismos pasos que conectar WhatsApp Web.

## Antes de empezar

- Necesitas un **número con WhatsApp Business** activo en un celular.
- El número **NO puede estar usándose como WhatsApp Web** en otro browser al momento del escaneo (se desconecta).
- Idealmente usa un **número dedicado al negocio** (no tu personal).

## Pasos

1. En el dashboard, ve a **Configuración → WhatsApp** (o **Configuración → Integraciones** y elige WhatsApp).
2. Click en **"Conectar WhatsApp"** — aparece un QR.
3. Abre WhatsApp Business en tu celular:
   - Menú (⋮) → **Dispositivos vinculados**
   - Click en **"Vincular un dispositivo"**
   - Escanea el QR de la pantalla
4. Listo. En unos segundos verás el estado **"Conectado"** y tu nombre/foto de perfil.

## Verificación rápida

Una vez conectado:

1. Pídele a alguien que te mande un mensaje a tu WhatsApp Business.
2. Verás el mensaje **aparecer en tu Inbox de Brote** en tiempo real.
3. Si el agente IA está activado para esa conversación, va a responder automáticamente.

## Solución de problemas comunes

### El QR expira
Los QR de WhatsApp expiran cada ~30 segundos. Si no alcanzaste, recarga la página y vuelve a escanear.

### "WhatsApp se desconectó" sin razón
Si tu celular se queda sin batería o pierde internet por más de 14 días, WhatsApp cierra la sesión vinculada. Vuelve a escanear el QR.

### Mensajes no llegan a Brote
- Verifica que la sesión esté **"Conectada"** en Configuración → WhatsApp.
- Si tu número se usa también en WhatsApp Web tradicional, ese puede estar acaparando los mensajes. Cierra WhatsApp Web y recarga Brote.

## Sobre la API oficial de Meta

Actualmente Brote usa **Evolution API** (WhatsApp Business non-Cloud), que es **gratis por mensaje** pero tiene caps conservadores para evitar bans. La integración con **Meta WhatsApp Cloud API** (oficial, mensajes ilimitados con templates aprobados) está en roadmap.

Mientras tanto, las [campañas](/campanas/que-son/) usan throttling automático y caps diarios para proteger tu número.

## Siguiente paso

Con WhatsApp conectado, [embebe el widget de Webchat en tu sitio →](/canales/webchat/) o
[conecta Instagram DMs →](/canales/instagram/).
