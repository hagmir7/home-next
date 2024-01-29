import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "FreeWsad - The Best Website For Education",
  description: "You can enjoy the Topics and Books you love and download the original content, and share it all with your friends in FreeWsad.",
  image: '/thumbnail.png',
  siteName: 'FreeWsad',
  keywords: ['books', 'download books', 'pdf books', 'free books', 'download free pdf books', 'free pdf books', 'programming books', 'online books'],
  alternates: {
    canonical: "/" 
  },
  openGraph: {
    title: "FreeWsad - The Best Website For Education",
    images: ['/thumbnail.png'],
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
      </head>
      <AuthProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  )
}
