'use server'

import { cookies } from 'next/headers'
import { decryptToken } from './auth';
import { NextRequest } from 'next/server';

export async function createSession(cookieName: string, payload: string) {
    const cookieStore = await cookies();
    cookieStore.set(cookieName, payload, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: "/",
        maxAge: 60 * 60 * 24,
    });
}

export async function getCurrentUser(request?: NextRequest) {

    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value || request?.cookies.get('session')?.value;

    if (session) {
        const user = await decryptToken(session);
        return user;
    }
}

export async function getCookie(name: string) {
    return (await cookies()).get(name)?.value;
}
export async function deleteCookie(name: string) {

    return (await cookies()).delete(name);
}