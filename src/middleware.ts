import createMiddleware from "next-intl/middleware"

export default createMiddleware({
    locales: ['ru', 'en'],
    defaultLocale: 'en'
})

export const config = {
    matcher: ['/', '/(ru|en)/:path*']
}