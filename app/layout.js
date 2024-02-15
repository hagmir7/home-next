import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import { Suspense } from 'react'
import Loading from './loading';



const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: "FreeWsad - The Best Website For Education",
  description: "You can enjoy the Topics and Books you love and download the original content, and share it all with your friends in FreeWsad.",
  image: '/thumbnail.png',
  siteName: 'FreeWsad',
  keywords: ['books', 'download books', 'pdf books', 'free books', 'download free pdf books', 'free pdf books', 'programming books', 'online books'],
  alternates: {
    canonical: "https://www.freewsad.com"
  },
  openGraph: {
    title: "FreeWsad - The Best Website For Education",
    images: '/thumbnail.png',
    description: "You can enjoy the Topics and Books you love and download the original content, and share it all with your friends in FreeWsad.",
    url: '/',
    type: 'website',
    image: {
      url: '/thumbnail.png',
      alt: "FreeWsad - The Best Website For Education",
      width: 600,
      height: 800,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='ltr' className='bg-light'>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6043226569102012" crossorigin="anonymous" defer></script>
      </head>
      <AuthProvider>
        <body className={inter.className}>
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />

          {/* <!-- Whatsapp Chat --> */}
          <div className="whatsapp-chat">
            <a href="https://t.me/+gO7G7Jkt8XM5MmY0" aria-label="Join to our Telegram Chanale" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </a>
          </div>
        </body>
      </AuthProvider>
    </html>
  )
}
