import { SegmentedControl } from '@mantine/core'
import { useLanguage } from '../i18n/LanguageContext'
import type { Language } from '../i18n/translations'
import classes from './LanguageSwitcher.module.css'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <SegmentedControl
      classNames={{
        root: classes.root,
        indicator: classes.indicator,
        label: classes.label,
      }}
      value={language}
      onChange={(value) => setLanguage(value as Language)}
      data={[
        { label: 'SV', value: 'sv' },
        { label: 'EN', value: 'en' },
      ]}
      size="sm"
      radius="xl"
      transitionDuration={250}
    />
  )
}
