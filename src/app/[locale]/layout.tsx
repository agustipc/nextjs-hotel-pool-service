import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import '../globals.css'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { ProductsProvider } from '../context/productsContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'Hotel Gracia - Pool Service',
  description: 'Bar service at the pool of Hotel Gracia'
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased max-w-2xl mx-auto`}
      >
        <ProductsProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ProductsProvider>
      </body>
    </html>
  )
}
