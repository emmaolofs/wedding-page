import { Box, Text, Title } from '@mantine/core'
import { useLanguage } from '../../../i18n/LanguageContext'
import { useCountdown } from '../../../hooks/useCountdown'
import { WEDDING } from '../data/wedding'
import classes from '../home.module.css'

type CountdownUnitProps = {
  label: string
  value: number
}

function CountdownUnit({ label, value }: CountdownUnitProps) {
  return (
    <Box className={classes.countdownUnit}>
      <Text className={classes.countdownValue}>{String(value).padStart(2, '0')}</Text>
      <Text className={classes.countdownLabel}>{label}</Text>
    </Box>
  )
}

export function CountdownSection() {
  const { t } = useLanguage()
  const { days, hours, minutes, seconds } = useCountdown(WEDDING.ceremonyDate)

  return (
    <Box className={classes.infoCardInner}>
      <Title order={2} className={classes.infoCardHeading}>
        {t('countdown')}
      </Title>

      <Box className={classes.countdownGrid}>
        <CountdownUnit label={t('days')} value={days} />
        <CountdownUnit label={t('hours')} value={hours} />
        <CountdownUnit label={t('minutes')} value={minutes} />
        <CountdownUnit label={t('seconds')} value={seconds} />
      </Box>
    </Box>
  )
}
