import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  localeMap,
  translations,
  type Language,
  type TranslationKey,
} from './translations'

const STORAGE_KEY = 'wedding-language'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  locale: string
  t: (key: TranslationKey, vars?: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'sv'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const locale = localeMap[language]

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string>) => {
      let text: string = translations[language][key]

      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          text = text.replace(`{{${name}}}`, value)
        }
      }

      return text
    },
    [language],
  )

  useEffect(() => {
    document.documentElement.lang = language
    document.title = translations[language].pageTitle
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, locale, t }),
    [language, setLanguage, locale, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
