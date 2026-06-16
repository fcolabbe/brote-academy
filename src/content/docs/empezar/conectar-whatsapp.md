---
title: Conectar WhatsApp
description: Cómo conectar WhatsApp a Brote por la Cloud API oficial de Meta (sin escanear QR). Evolution API como alternativa.
---

Brote conecta tu **WhatsApp Business** de dos formas. La **recomendada** es la **Cloud API oficial de Meta** (sin escanear QR, conexión estable y oficial). También existe **Evolution API** como alternativa no-oficial (escaneo de QR, estilo WhatsApp Web).

![Configuración de canal WhatsApp en Brote](/screenshots/whatsapp-config.png)

## Opción recomendada: Cloud API oficial de Meta

Es el camino oficial: conectas tu número directo con Meta, sin escanear ningún QR. Tu sesión no se cae si el celular se queda sin batería ni se pelea con WhatsApp Web.

### Antes de empezar

- Necesitas un **número** que vayas a usar para el negocio. No tiene que estar instalado en un celular.
- Si el número ya está usándose en la **app de WhatsApp** (normal o Business), tendrás que migrarlo al canal oficial durante la conexión.
- Idealmente usa un **número dedicado al negocio**, no tu personal.

### Pasos

1. En el dashboard, ve a **Configuración → WhatsApp**.
2. Elige **"Conectar por la Cloud API oficial de Meta"**.
3. Se abre la conexión guiada con Meta: inicias sesión con tu cuenta de Facebook/Meta, eliges (o creas) tu cuenta de WhatsApp Business y seleccionas el número.
4. Confirmas el número con el código que te llega por SMS o llamada.
5. Listo. En unos segundos verás el estado **"Conectado"** y tu número oficial activo.

## Alternativa: Evolution API (no-oficial, con QR)

Evolution API conecta tu WhatsApp escaneando un QR, igual que vincular WhatsApp Web. Es una alternativa no-oficial; lo **recomendado es la Cloud API oficial** de arriba.

### Antes de empezar

- Necesitas un **número con WhatsApp Business** activo en un celular.
- El número **NO puede estar usándose como WhatsApp Web** en otro browser al momento del escaneo (se desconecta).
- Idealmente usa un **número dedicado al negocio** (no tu personal).

### Pasos

1. En el dashboard, ve a **Configuración → WhatsApp** y elige la opción **Evolution API**.
2. Click en **"Conectar WhatsApp"** — aparece un QR.
3. Abre WhatsApp Business en tu celular:
   - Menú (⋮) → **Dispositivos vinculados**
   - Click en **"Vincular un dispositivo"**
   - Escanea el QR de la pantalla
4. Listo. En unos segundos verás el estado **"Conectado"** y tu nombre/foto de perfil.

## Verificación rápida

Una vez conectado (por cualquiera de las dos vías):

1. Pídele a alguien que te mande un mensaje a tu WhatsApp Business.
2. Verás el mensaje **aparecer en tu Inbox de Brote** en tiempo real.
3. Si el agente IA está activado para esa conversación, va a responder automáticamente.

## Solución de problemas comunes

### El QR expira (solo Evolution API)
Los QR de WhatsApp expiran cada ~30 segundos. Si no alcanzaste, recarga la página y vuelve a escanear.

### "WhatsApp se desconectó" sin razón (solo Evolution API)
Si tu celular se queda sin batería o pierde internet por más de 14 días, WhatsApp cierra la sesión vinculada. Vuelve a escanear el QR. Con la **Cloud API oficial** esto no pasa, porque la conexión no depende de tu celular.

### Mensajes no llegan a Brote
- Verifica que la sesión esté **"Conectada"** en Configuración → WhatsApp.
- Si usas Evolution API y tu número se usa también en WhatsApp Web tradicional, ese puede estar acaparando los mensajes. Cierra WhatsApp Web y recarga Brote.

## Siguiente paso

Con WhatsApp conectado, [embebe el widget de Webchat en tu sitio →](/canales/webchat/) o
[conecta Instagram DMs →](/canales/instagram/).
