/** Zet Westerse cijfers (0-9) om naar Arabisch-Indische cijfers (٠-٩). */
const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function toArabic(input: string | number): string {
  return String(input).replace(/[0-9]/g, (d) => arabicDigits[Number(d)]);
}
