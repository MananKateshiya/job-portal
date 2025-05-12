import { NextRequest, NextResponse } from "next/server";
import { decryptToken } from "./lib/auth";
import { cookies } from "next/headers";
import { getCurrentUser } from "./lib/session";


const PUBLIC_ROUTES = [
  '/login',
  '/register',

];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;

  // const session = await getCurrentUser();
  if (PUBLIC_ROUTES.includes(path)) {
    if (session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const user = await decryptToken(session);

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
