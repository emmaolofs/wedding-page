import { Button } from '@mantine/core'
import { IconCalendarPlus } from '@tabler/icons-react'
import { useLanguage } from '../../../i18n/LanguageContext'
import classes from './AddToCalendarButton.module.css'

const calendarHref = `${import.meta.env.BASE_URL}emma-philip-brollop.ics`

export function AddToCalendarButton() {
  const { t } = useLanguage()

  return (
    <Button
      className={classes.button}
      component="a"
      href={calendarHref}
      download="emma-philip-brollop.ics"
      variant="outline"
      radius="xl"
      size="md"
      leftSection={<IconCalendarPlus size={18} stroke={1.5} />}
    >
      {t('addToCalendar')}
    </Button>
  )
}
