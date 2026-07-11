---
title: Connect WhatsApp
description: How to connect WhatsApp to Brote via Meta's official Cloud API (no QR scanning). Evolution API as an alternative.
---

Brote connects your **WhatsApp Business** in two ways. The **recommended** one is **Meta's official Cloud API** (no QR scanning, stable and official connection). There's also **Evolution API** as a non-official alternative (QR scanning, WhatsApp Web style).

![WhatsApp channel configuration in Brote](/screenshots/whatsapp-config.png)

## Recommended option: Meta's official Cloud API

This is the official path: you connect your number directly with Meta, without scanning any QR. Your session doesn't drop if your phone runs out of battery, and it doesn't fight with WhatsApp Web.

### Before you start

- You need a **number** you'll use for the business. It doesn't have to be installed on a phone.
- If the number is already in use in the **WhatsApp app** (regular or Business), you'll have to migrate it to the official channel during the connection.
- Ideally use a **number dedicated to the business**, not your personal one.

### Steps

1. In the dashboard, go to **Settings → WhatsApp**.
2. Choose **"Connect via Meta's official Cloud API"**.
3. The guided Meta connection opens: you log in with your Facebook/Meta account, pick (or create) your WhatsApp Business account and select the number.
4. You confirm the number with the code you receive via SMS or call.
5. Done. In a few seconds you'll see the **"Connected"** status and your official number active.

## Alternative: Evolution API (non-official, with QR)

Evolution API connects your WhatsApp by scanning a QR, just like linking WhatsApp Web. It's a non-official alternative; the **recommended path is the official Cloud API** above.

### Before you start

- You need a **number with WhatsApp Business** active on a phone.
- The number **CANNOT be in use as WhatsApp Web** in another browser at the moment of scanning (it gets disconnected).
- Ideally use a **number dedicated to the business** (not your personal one).

### Steps

1. In the dashboard, go to **Settings → WhatsApp** and choose the **Evolution API** option.
2. Click **"Connect WhatsApp"** — a QR appears.
3. Open WhatsApp Business on your phone:
   - Menu (⋮) → **Linked devices**
   - Tap **"Link a device"**
   - Scan the QR on the screen
4. Done. In a few seconds you'll see the **"Connected"** status and your name/profile photo.

## Quick verification

Once connected (via either path):

1. Ask someone to send a message to your WhatsApp Business.
2. You'll see the message **appear in your Brote Inbox** in real time.
3. If the AI agent is enabled for that conversation, it will reply automatically.

## Common troubleshooting

### The QR expires (Evolution API only)
WhatsApp QRs expire every ~30 seconds. If you didn't make it in time, reload the page and scan again.

### "WhatsApp disconnected" for no reason (Evolution API only)
If your phone runs out of battery or loses internet for more than 14 days, WhatsApp closes the linked session. Scan the QR again. With the **official Cloud API** this doesn't happen, because the connection doesn't depend on your phone.

### Messages not reaching Brote
- Verify the session shows **"Connected"** in Settings → WhatsApp.
- If you use Evolution API and your number is also used in traditional WhatsApp Web, that session may be hogging the messages. Close WhatsApp Web and reload Brote.

## Next step

With WhatsApp connected, [embed the Webchat widget on your site →](/en/canales/webchat/) or
[connect Instagram DMs →](/en/canales/instagram/).
