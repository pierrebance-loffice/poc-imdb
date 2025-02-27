import { Inter } from 'next/font/google'

const { API_ENDPOINT, API_LANG, API_KEY, API_TOKEN, NEXT_PUBLIC_API_KEY } =
  process.env
export const env = {
  API_ENDPOINT,
  API_LANG,
  API_KEY,
  API_TOKEN,
  NEXT_PUBLIC_API_KEY,
}

export const inter = Inter({ subsets: ['latin'] })
