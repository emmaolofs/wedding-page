export type CountdownParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function getCountdown(target: Date): CountdownParts {
  const diff = Math.max(0, target.getTime() - Date.now())

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function formatWeddingDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatWeddingTime(date: Date, locale: string): string {
  return date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatWeekendRange(start: Date, end: Date, locale: string): string {
  const monthYear = start.toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  })

  return `${start.getDate()}–${end.getDate()} ${monthYear}`
}
