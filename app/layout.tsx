import type { Metadata } from 'next';
import './globals.css';

import { ThemeProvider } from '@/context/theme';
import Navigation from '@/components/global/Navigation';

export const metadata: Metadata = {
    title: 'Ilant Book Search',
    description: 'Next.js app for searching books',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='h-screen overflow-y-hidden'>
                <ThemeProvider>
                    <Navigation />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
