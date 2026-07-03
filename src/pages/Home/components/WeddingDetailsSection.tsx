import { Box, Text, Title } from '@mantine/core'
import { IconCalendarEvent } from '@tabler/icons-react'
import { useLanguage } from '../../../i18n/LanguageContext'
import classes from '../home.module.css'

export function WeddingDetailsSection() {
  const { t } = useLanguage()

  return (
    <Box className={classes.infoCardInner}>
      <IconCalendarEvent size={32} stroke={1.4} color="var(--mantine-color-sage-5)" />

      <Title order={3} className={classes.infoCardHeading}>
        {t('comingSoonTitle')}
      </Title>

      <Text size="sm" className={classes.infoCardSubtext}>
        {t('comingSoonMessage')}
      </Text>
    </Box>
  )
}
