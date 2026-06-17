import { NextResponse } from "next/server";

/**
 * RSVP endpoint.
 *
 * Op dit moment logt dit de inzending in de serverconsole en stuurt een
 * succesantwoord terug. Zo wire je het aan een echte mailbox/database:
 *
 *  1) E-mail via Resend (https://resend.com):
 *     - `npm i resend`
 *     - zet RESEND_API_KEY in je Vercel Environment Variables
 *     - verstuur hieronder een mail naar het bruidspaar.
 *
 *  2) Opslaan in een database (Vercel Postgres, Supabase, Notion, Google Sheets...).
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Naam en e-mail zijn verplicht." },
        { status: 400 },
      );
    }

    // TODO: vervang dit door e-mail of databaseopslag.
    console.log("📩 Nieuwe RSVP ontvangen:", {
      name,
      email,
      attending: data.attending,
      guests: data.guests,
      diet: data.diet,
      message: data.message,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ongeldige aanvraag." },
      { status: 400 },
    );
  }
}
