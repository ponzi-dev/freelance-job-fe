import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { hasLocale } from 'next-intl';
import { routing } from '@/locale/routing';
import { getMessages } from 'next-intl/server';
import ReactQueryProvider from '@/lib/ReactQueryProvider';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages({ locale })

    return (
        <html lang={locale}>
            <body>
                <ReactQueryProvider>
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
