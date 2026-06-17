# 💍 Bruiloft-uitnodiging — Anna &amp; Tom

Een moderne, elegante bruiloftswebsite gebouwd met **Next.js 15**, **TypeScript**,
**Tailwind CSS v4** en **Framer Motion**. Volledig responsive en klaar om te
deployen op **Vercel**.

## ✨ Functies

- Sfeervolle hero met parallax-effect en dwarrelende bloemblaadjes
- Live aftelklok naar de grote dag
- "Ons verhaal" als animerende tijdlijn
- Programma van de dag, locatie met route, en een fotogalerij
- Werkend **RSVP-formulier** met API-route
- Vloeiende scroll-animaties en een verfijnd design

## 🚀 Lokaal draaien

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

## ✏️ Gegevens aanpassen

Alle teksten en gegevens staan op één plek: **`lib/config.ts`**.
Pas daar de namen, datum, locatie, het verhaal, het programma en de RSVP-deadline aan.

De aftelklok gebruikt het veld `date` (ISO-formaat, bv. `"2026-09-12T14:30:00"`).

## 🖼️ Eigen foto's toevoegen

Zet je foto's in de map `public/` en vervang de gekleurde placeholder-tegels in
`components/Gallery.tsx` door `next/image`:

```tsx
import Image from "next/image";
<Image src="/onze-foto.jpg" alt="" fill className="object-cover" />
```

## 📩 RSVP koppelen aan e-mail/database

`app/api/rsvp/route.ts` logt inzendingen nu alleen in de console. In dat bestand
staat uitgelegd hoe je het koppelt aan bijvoorbeeld [Resend](https://resend.com)
(e-mail) of een database.

## ▲ Deployen op Vercel

1. Maak een gratis account op [vercel.com](https://vercel.com).
2. Push deze map naar een GitHub-repository.
3. Klik in Vercel op **Add New → Project**, kies de repo en klik **Deploy**.

Of via de CLI:

```bash
npm i -g vercel
vercel
```

Vercel detecteert Next.js automatisch — geen configuratie nodig.
