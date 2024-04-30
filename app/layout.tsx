import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Head from 'next/head'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Журнал учёта ТО',
  description: 'Лучшее решение по ведению бортвого журнала автомобиля!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru' className={GeistSans.className}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='bg-background text-foreground'>
        <main className='min-h-screen flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
