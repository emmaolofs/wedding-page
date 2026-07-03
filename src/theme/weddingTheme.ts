import { createTheme } from '@mantine/core'

export const weddingTheme = createTheme({
  fontFamily: '"Lato", sans-serif',
  headings: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: '500',
  },
  primaryColor: 'sage',
  colors: {
    sage: [
      '#f4f7f3',
      '#e6ede3',
      '#cddbc8',
      '#afc5a8',
      '#8fad86',
      '#6f9466',
      '#587a50',
      '#45623f',
      '#364f32',
      '#2a3f27',
    ],
    moss: [
      '#f6f7f2',
      '#e9ece1',
      '#d5dbc9',
      '#b9c4a8',
      '#9aab86',
      '#7d9168',
      '#637752',
      '#4d5f40',
      '#3d4c33',
      '#303c29',
    ],
    linen: [
      '#f3f1ec',
      '#e9e7e1',
      '#dedbd4',
      '#d0ccc4',
      '#bdb8af',
      '#a6a199',
      '#8b8680',
      '#726e68',
      '#5b5853',
      '#464340',
    ],
  },
})
