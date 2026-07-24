export type Language = "sv" | "en";

export const translations = {
  sv: {
    pageTitle: "Emma & Philip — Save the Date",
    saveTheDate: "Save the date",
    weddingWeekend: "Bröllopshelg",
    ceremony: "Vigsel",
    atTime: "kl.",
    countdown: "Nedräkning",
    days: "Dagar",
    hours: "Timmar",
    minutes: "Minuter",
    seconds: "Sekunder",
    detailsMessage:
      "Vi ser fram emot att fira tillsammans med er. Formell inbjudan och mer information kommer längre fram.",
    comingSoonTitle: "Mer info kommer",
    addToCalendar: "Lägg till i kalender",
    calendarTitle: "Bröllop — {{partnerOne}} & {{partnerTwo}}",
    calendarDescription: "Bröllopshelg 6–8 augusti 2027. Vigsel den 7 augusti.",
    imageAlt: "{{partnerOne}} och {{partnerTwo}}",
  },
  en: {
    pageTitle: "Emma & Philip — Save the Date",
    saveTheDate: "Save the date",
    weddingWeekend: "Wedding weekend",
    ceremony: "Ceremony",
    atTime: "at",
    countdown: "Countdown",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    detailsMessage:
      "We can't wait to celebrate with you. Formal invitations and more details will follow.",
    comingSoonTitle: "More info coming",
    addToCalendar: "Add to calendar",
    calendarTitle: "Wedding — {{partnerOne}} & {{partnerTwo}}",
    calendarDescription:
      "Wedding weekend 6–8 August 2027. Ceremony on 7 August.",
    imageAlt: "{{partnerOne}} and {{partnerTwo}}",
  },
} as const;

export type TranslationKey = keyof typeof translations.sv;

export const localeMap: Record<Language, string> = {
  sv: "sv-SE",
  en: "en-GB",
};
