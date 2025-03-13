import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
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
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
