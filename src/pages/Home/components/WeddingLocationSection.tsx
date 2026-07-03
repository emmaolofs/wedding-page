import { Box, Text, Title } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import { WEDDING } from '../data/wedding'
import classes from '../home.module.css'

export function WeddingLocationSection() {
  return (
    <Box className={classes.infoCardInner}>
      <IconMapPin size={32} stroke={1.4} color="var(--mantine-color-sage-5)" />

      <Title order={3} className={classes.infoCardHeading}>
        {WEDDING.venue}
      </Title>

      <Text size="sm" c="dimmed" className={classes.infoCardSubtext}>
        {WEDDING.address}
      </Text>
    </Box>
  )
}
