import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'University Management',
  description: 'University Management',
}

export default function LocaleLayout({children, params: {locale}}: {
    children: React.ReactNode,
    params: {
        locale: string
    }
}) {
    return (
      <html lang={locale}>
        <body className={inter.className}>
            <Header params={{locale}}/>
            {children}
            </body>
      </html>
    );
}
