/**
 * ============================================================
 *  TWEETALIGE INHOUD — Arabisch (ar) & Nederlands (nl)
 *  Pas hier alle teksten aan. Niet-tekstuele constanten
 *  (datum, kaart-URL, e-mail) staan in lib/config.ts.
 * ============================================================
 */

export type Lang = "ar" | "nl";

export const translations = {
  ar: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    kicker: "دعوة زفاف",
    nameA: "أحمد",
    nameB: "مريم",
    and: "و",
    dateLabel: "الإثنين ١٣ يوليو ٢٠٢٦ — الساعة ٦ مساءً",
    location: "فلاردينجن، هولندا",
    blessing: "ما شاء الله تبارك الله",

    ayah: {
      label: "قال الله تعالى",
      text: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      ref: "سورة الروم - ٢١",
    },

    countdown: {
      kicker: "لم يتبقَّ الكثير",
      title: "العدّ التنازلي ليومنا الكبير",
      done: "اليوم هو اليوم — قلنا نعم! 💍",
      days: "يوم",
      hours: "ساعة",
      mins: "دقيقة",
      secs: "ثانية",
    },

    venue: {
      kicker: "مكان الاحتفال",
      title: "الموقع",
      name: "Romance Weddings&Events",
      address: "Kon. Wilhelminahaven Zuidwestzijde 13, 3134 KG Vlaardingen",
      desc: "يسعدنا الاحتفال بزفافنا معكم في هذا المكان المميّز على ضفاف المرفأ في فلاردينجن.",
      route: "عرض الطريق",
    },

    notes: {
      kicker: "نرجو الانتباه",
      title: "ملاحظات",
      children: "الأطفال كالزهور لا يتحملون السهرة",
      photo: "يمنع التصوير داخل قاعة النساء",
    },

    rsvp: {
      kicker: "أخبرونا",
      title: "تأكيد الحضور",
      introBefore: "يسعدنا حضوركم! الرجاء تأكيد الحضور قبل",
      deadline: "٥ يوليو ٢٠٢٦",
      name: "الاسم",
      namePh: "اسمك الكريم",
      email: "البريد الإلكتروني",
      attendingQ: "هل ستحضرون؟",
      yes: "نعم، سأحضر 🎉",
      no: "للأسف لا أستطيع",
      guests: "عدد الأشخاص",
      diet: "ملاحظات غذائية",
      dietPh: "مثال: نباتي",
      message: "رسالة (اختياري)",
      messagePh: "كلمة جميلة للعروسين...",
      submit: "إرسال التأكيد",
      sending: "جارٍ الإرسال...",
      successTitle: "شكرًا لكم!",
      successText: "تم استلام ردّكم. نتطلّع لرؤيتكم في يومنا الكبير.",
      errorBefore: "حدث خطأ ما. حاولوا مرة أخرى أو راسلونا على",
    },

    footer: {
      dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      madeWith: "صُنع بكل حب",
    },

    envelope: {
      hint: "اضغط لفتح الدعوة",
      aria: "افتح الدعوة",
    },
  },

  nl: {
    bismillah: "In de naam van Allah, de Erbarmer, de Meest Barmhartige",
    kicker: "Trouwuitnodiging",
    nameA: "Ahmad",
    nameB: "Mariam",
    and: "&",
    dateLabel: "Maandag 13 juli 2026 — om 18:00 uur",
    location: "Vlaardingen, Nederland",
    blessing: "Masha’Allah, Tabarak’Allah",

    ayah: {
      label: "Allah de Verhevene zegt",
      text: "En tot Zijn tekenen behoort dat Hij uit jullie eigen midden echtgenoten voor jullie schiep, opdat jullie rust bij hen vinden; en Hij bracht tussen jullie liefde en barmhartigheid. Voorwaar, daarin zijn tekenen voor een volk dat nadenkt.",
      ref: "Soera Ar-Rum 30:21",
    },

    countdown: {
      kicker: "Het duurt niet lang meer",
      title: "Aftellen naar onze grote dag",
      done: "Vandaag is het zover — wij zeggen ja! 💍",
      days: "Dagen",
      hours: "Uren",
      mins: "Minuten",
      secs: "Seconden",
    },

    venue: {
      kicker: "Waar we vieren",
      title: "Locatie",
      name: "Romance Weddings&Events",
      address: "Kon. Wilhelminahaven Zuidwestzijde 13, 3134 KG Vlaardingen",
      desc: "We vieren ons huwelijk graag samen met jullie op deze sfeervolle locatie aan de haven in Vlaardingen.",
      route: "Route bekijken",
    },

    notes: {
      kicker: "Even dit nog",
      title: "Goed om te weten",
      children: "Kinderen zijn als bloemen — ze kunnen niet tegen de late uurtjes.",
      photo: "Fotograferen in de dameszaal is niet toegestaan.",
    },

    rsvp: {
      kicker: "Laat het ons weten",
      title: "Aanwezigheid",
      introBefore: "We hopen je erbij te hebben! Laat het ons weten vóór",
      deadline: "5 juli 2026",
      name: "Naam",
      namePh: "Je naam",
      email: "E-mail",
      attendingQ: "Kom je?",
      yes: "Ja, ik ben erbij 🎉",
      no: "Helaas niet",
      guests: "Aantal personen",
      diet: "Dieetwensen",
      dietPh: "Bijv. vegetarisch",
      message: "Bericht (optioneel)",
      messagePh: "Een lief woordje voor het bruidspaar...",
      submit: "Versturen",
      sending: "Versturen...",
      successTitle: "Dankjewel!",
      successText: "Je reactie is ontvangen. We kijken ernaar uit je te zien.",
      errorBefore: "Er ging iets mis. Probeer opnieuw of mail ons op",
    },

    footer: {
      dua: "Moge Allah jullie beiden zegenen, Zijn zegeningen over jullie uitstorten en jullie in goedheid verenigen.",
      madeWith: "Met liefde gemaakt",
    },

    envelope: {
      hint: "Tik om de uitnodiging te openen",
      aria: "Open de uitnodiging",
    },
  },
};

export type Dict = (typeof translations)["ar"];
