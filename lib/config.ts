/**
 * ============================================================
 *  الإعدادات المركزية — CENTRALE CONFIGURATIE
 *  Pas hier ALLE gegevens aan. De hele site leest uit dit bestand.
 * ============================================================
 */

export const wedding = {
  // --- De namen ---
  partnerA: "أحمد",
  partnerB: "مريم",

  // --- Datum & tijd van de ceremonie (ISO 8601, lokale tijd) ---
  date: "2026-07-13T18:00:00",

  // Hoe de datum getoond wordt (Arabisch)
  dateLabel: "السبت ١٢ سبتمبر ٢٠٢٦",
  location: "قصر الأندلس، دبي",

  // --- Korte intro onder de namen ---
  intro: "بكل حبٍّ وفرح، ندعوكم لمشاركتنا أجمل لحظات حياتنا ومباركة بداية رحلتنا معًا.",

  // --- Religieuze teksten (online geverifieerd) ---
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  quran: {
    // Soera Ar-Rum (30:21) — het klassieke trouwvers
    ayah: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    ref: "سورة الروم - ٢١",
  },
  // Authentieke doea voor pasgetrouwden
  dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",

  // --- Ons verhaal (tijdlijn) ---
  story: [
    {
      year: "٢٠١٩",
      title: "اللقاء الأول",
      text: "نظرةٌ عابرة في يومٍ هادئ، فتغيّر كل شيء بعدها إلى الأجمل.",
    },
    {
      year: "٢٠٢٢",
      title: "بدأت الحكاية",
      text: "صداقةٌ نمت بهدوء حتى صارت حُبًّا لا يشبهه شيء.",
    },
    {
      year: "٢٠٢٥",
      title: "الخطبة",
      text: "تحت سماءٍ مرصّعة بالنجوم، كان السؤال، وكان الجواب: نعم.",
    },
    {
      year: "٢٠٢٦",
      title: "إلى الأبد",
      text: "واليوم نحتفل معكم، مع أحبّ الناس إلى قلوبنا — معكم أنتم.",
    },
  ],

  // --- Dagindeling ---
  schedule: [
    { time: "17:00", title: "عقد القران", text: "لحظة الميثاق تحت ضوء المساء." },
    { time: "18:30", title: "الاستقبال", text: "ترحيبٌ وضيافة في البهو الكبير." },
    { time: "20:00", title: "العشاء", text: "مأدبة عشاء على ضوء الشموع." },
    { time: "22:00", title: "السهرة", text: "فرحٌ ورقصٌ حتى مطلع الفجر." },
  ],

  // --- Locatie ---
  venue: {
    name: "قصر الأندلس",
    address: "شارع الزهور ١٢، دبي",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kon.+Wilhelminahaven+Zuidwestzijde+13,+3134+KG+Vlaardingen",
  },

  // --- RSVP ---
  rsvpDeadline: "١ أغسطس ٢٠٢٦",

  // --- Contact ---
  contactEmail: "ahmad.mariam@example.com",
} as const;

export type Wedding = typeof wedding;
