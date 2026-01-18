import localFont from 'next/font/local';

export const Verdana = localFont({
    src: [
        {
            path: './fonts/verdana/Verdana-regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/verdana/Verdana-Bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-verdana',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'sans-serif'],
})

export const PlaypenSans = localFont({
    src: [
        {
            path: './fonts/playpen-sans/PlaypenSans-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/playpen-sans/PlaypenSans-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/playpen-sans/PlaypenSans-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/playpen-sans/PlaypenSans-SemiBold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/playpen-sans/PlaypenSans-Bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-playpen-sans',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'sans-serif'],
})