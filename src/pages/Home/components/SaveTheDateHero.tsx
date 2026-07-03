import {
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconHeart } from '@tabler/icons-react'
import { useLanguage } from '../../../i18n/LanguageContext'
import engagementImg from '../../../assets/engagement.jpeg'
import {
  formatWeekendRange,
  formatWeddingDate,
  formatWeddingTime,
} from '../../../lib/dateUtils'
import { WEDDING } from '../data/wedding'
import { AddToCalendarButton } from './AddToCalendarButton'
import classes from '../home.module.css'

export function SaveTheDateHero() {
  const { locale, t } = useLanguage()

  return (
    <Box className={classes.hero} component="section">
      <Container size="lg" className={classes.heroContent}>
        <Grid gap={{ base: 44, md: 64, lg: 80 }} align="center">
          <Grid.Col
            span={{ base: 12, md: 6 }}
            order={{ base: 2, md: 1 }}
            className={classes.heroTextCol}
          >
            <Stack gap="xl" className={`${classes.textBlock} ${classes.stackAlign}`}>
              <Stack gap={0} className={classes.heroIntro}>
                <Text className={classes.heroEyebrow}>{t('saveTheDate')}</Text>

                <Group gap="sm" wrap="wrap" className={classes.groupNames}>
                  <Title
                    order={1}
                    fw={500}
                    c="moss.8"
                    style={{
                      fontSize: 'clamp(2.8rem, 8vw, 5rem)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {WEDDING.partnerOne}
                  </Title>

                  <IconHeart size={28} stroke={1.2} color="#000" />

                  <Title
                    order={1}
                    fw={500}
                    c="moss.8"
                    style={{
                      fontSize: 'clamp(2.8rem, 8vw, 5rem)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {WEDDING.partnerTwo}
                  </Title>
                </Group>
              </Stack>

              <Box className={classes.heroDateCard}>
                <Stack gap={8} className={classes.stackAlign}>
                  <Text
                    tt="capitalize"
                    className={`${classes.heroDatePrimary} ${classes.textAlign}`}
                  >
                    {formatWeekendRange(WEDDING.weekendStart, WEDDING.weekendEnd, locale)}
                  </Text>
                  <Text className={`${classes.heroDateDetail} ${classes.textAlign}`}>
                    {t('weddingWeekend')}
                  </Text>
                </Stack>

                <Divider color="var(--mantine-color-linen-3)" my="md" />

                <Stack gap={8} className={classes.stackAlign}>
                  <Text tt="capitalize" className={`${classes.heroDateDetail} ${classes.textAlign}`}>
                    {t('ceremony')} {formatWeddingDate(WEDDING.ceremonyDate, locale)}
                  </Text>
                  <Text className={`${classes.heroDateDetailMuted} ${classes.textAlign}`}>
                    {t('atTime')} {formatWeddingTime(WEDDING.ceremonyDate, locale)}
                  </Text>
                </Stack>
              </Box>

              <Box className={classes.heroCalendarAction}>
                <AddToCalendarButton />
              </Box>
            </Stack>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, md: 6 }}
            order={{ base: 1, md: 2 }}
            className={classes.heroImageCol}
          >
            <Box className={`${classes.imageBlock} ${classes.imageFrame}`}>
              <Box
                component="img"
                src={engagementImg}
                alt={t('imageAlt', {
                  partnerOne: WEDDING.partnerOne,
                  partnerTwo: WEDDING.partnerTwo,
                })}
                className={classes.image}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
