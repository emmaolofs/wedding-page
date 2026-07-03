import { Button } from '@mantine/core'
import { IconCalendarPlus } from '@tabler/icons-react'
import { useLanguage } from '../../../i18n/LanguageContext'
import { downloadCalendarEvent } from '../../../lib/calendar'
import { WEDDING } from '../data/wedding'
import classes from './AddToCalendarButton.module.css'

export function AddToCalendarButton() {
  const { t } = useLanguage()

  const handleClick = () => {
    downloadCalendarEvent({
      title: t('calendarTitle', {
        partnerOne: WEDDING.partnerOne,
        partnerTwo: WEDDING.partnerTwo,
      }),
      description: t('calendarDescription'),
      location: `${WEDDING.venue}, ${WEDDING.city}`,
      start: WEDDING.ceremonyDate,
      end: WEDDING.ceremonyEnd,
    })
  }

  return (
    <Button
      className={classes.button}
      variant="outline"
      radius="xl"
      size="md"
      leftSection={<IconCalendarPlus size={18} stroke={1.5} />}
      onClick={handleClick}
    >
      {t('addToCalendar')}
    </Button>
  )
}
