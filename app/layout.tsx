import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://la-casino-guide.example'),
  title: 'La Casino — официальный сайт, зеркало и гид игрока',
  description: 'La Casino: официальный сайт, рабочее зеркало, игры онлайн и понятный гид по безопасному входу и ответственному игровому досугу.',
  keywords: ['la casino', 'la casino зеркало', 'la casino официальный сайт', 'ла казино', 'ля казино онлайн'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'La Casino — официальный сайт и рабочее зеркало',
    description: 'Проверенный гид по La Casino: игры, мобильный вход, зеркала и безопасность.',
    type: 'website',
    locale: 'ru_RU',
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#101512',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="La Casino Guide" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
