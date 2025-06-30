import localFont from 'next/font/local';


export const magistral = localFont({
    src: [
        {
            path: './fonts/magistral-font/magistral-300.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/magistral-font/magistral-400.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/magistral-font/magistral-500.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/magistral-font/magistral-700.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/magistral-font/magistral-800.woff2',
            weight: '800',
            style: 'normal'
        },
    ],
    variable: '--font-magistral',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'sans-serif'],
})

export const jafBerninaSansNarrow = localFont({
    src: [
        {
            path: './fonts/jaf-bernina-sans-narrow/jaf-bernina-sans-narrow-300.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/jaf-bernina-sans-narrow/jaf-bernina-sans-narrow-400.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/jaf-bernina-sans-narrow/jaf-bernina-sans-narrow-600.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/jaf-bernina-sans-narrow/jaf-bernina-sans-narrow-700.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/jaf-bernina-sans-narrow/jaf-bernina-sans-narrow-800.woff2',
            weight: '800',
            style: 'normal'
        }
    ],
    variable: '--font-jaf-bernina-sans-narrow',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'sans-serif'],
})