'use server'

import { cookies } from 'next/headers'

export async function createSession(cookieName: string, payload: string) {
    const cookieStore = cookies();
    (await cookieStore).set(cookieName, payload, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: "/",
        maxAge: 60 * 60 * 24,
    });
}

export async function getCookie(name: string, cookie: string) {
    console.log(`${name}`, (await cookies()).get(cookie));
    return (await cookies()).get(cookie);
}

export async function deleteCookie(name: string) {

    return (await cookies()).delete(name);
}