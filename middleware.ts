
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    // console.log(path);
    // const isValid = await verifyToken(request);

    // if (path == '/login') {
    //     return NextResponse.next();
    // } else {

    //     if (!isValid) {
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }
    // }
}

export const config = {
    matcher: [

        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}