// Middleware.js
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export default async function middleware(req, res) {
    const headers = { 'accept-language': req.headers['accept-language'] };
    const languages = new Negotiator({ headers }).languages();
    const locales = ['en-US', 'fr-FR', 'es-ES']; // Your supported locales
    const defaultLocale = 'en-US';

    const userLanguage = match(languages, locales, defaultLocale);

    // Store userLanguage in req.cookies or req.session...
}


