import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { weddingTheme } from './theme/weddingTheme'
import Home from './pages/Home/home'

function App() {
  return (
    <MantineProvider theme={weddingTheme} defaultColorScheme="light">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LanguageProvider>
    </MantineProvider>
  )
}

export default App
