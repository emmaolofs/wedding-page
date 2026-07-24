export type CalendarEvent = {
  title: string
  description?: string
  location?: string
  start: Date
  end: Date
}

/** UTC form ending in Z — works reliably in iOS Calendar and Google Calendar. */
function formatIcsUtc(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

function buildIcs(event: CalendarEvent): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Emma & Philip//Wedding//SV',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.start.getTime()}@emma-philip-wedding`,
    `DTSTAMP:${formatIcsUtc(new Date())}`,
    `DTSTART:${formatIcsUtc(event.start)}`,
    `DTEND:${formatIcsUtc(event.end)}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
  ]

  if (event.description) {
    lines.push(`DESCRIPTION:${escapeIcsText(event.description)}`)
  }

  if (event.location) {
    lines.push(`LOCATION:${escapeIcsText(event.location)}`)
  }

  lines.push('END:VEVENT', 'END:VCALENDAR')

  return `${lines.join('\r\n')}\r\n`
}

function isAppleMobile(): boolean {
  if (typeof navigator === 'undefined') return false
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  )
}

export function downloadCalendarEvent(
  event: CalendarEvent,
  filename = 'emma-philip-brollop.ics',
) {
  const ics = buildIcs(event)

  // iOS Safari ignores the download attribute for blob URLs.
  // Opening a data URL lets Calendar handle the .ics file.
  if (isAppleMobile()) {
    const dataUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
    window.location.href = dataUrl
    return
  }

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
