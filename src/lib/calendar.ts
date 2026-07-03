export type CalendarEvent = {
  title: string
  description?: string
  location?: string
  start: Date
  end: Date
}

function formatIcsDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function buildIcs(event: CalendarEvent): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Emma & Philip//Wedding//SV',
    'BEGIN:VEVENT',
    `UID:${event.start.getTime()}@emma-philip-wedding`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(event.start)}`,
    `DTEND:${formatIcsDate(event.end)}`,
    `SUMMARY:${event.title}`,
  ]

  if (event.description) {
    lines.push(`DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`)
  }

  if (event.location) {
    lines.push(`LOCATION:${event.location}`)
  }

  lines.push('END:VEVENT', 'END:VCALENDAR')

  return lines.join('\r\n')
}

export function downloadCalendarEvent(event: CalendarEvent, filename = 'emma-philip-brollop.ics') {
  const blob = new Blob([buildIcs(event)], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
