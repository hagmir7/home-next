// Middleware.js
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextResponse } from 'next/server'


export function middleware(request) {

    // const fullPath = req.headers.host + req.url;
    // const locale =  i18nRouter(request, i18nConfig);
    // const url = request.url;
    // console.log("Middleware =>", url);
    // return NextResponse.next();
    return i18nRouter(request, i18nConfig);
}


export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
}


