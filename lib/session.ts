import { cookies } from "next/headers";

export async function createSession(payload: string) {
  const cookieStore = await cookies();
  
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  
  cookieStore.set("sessionData", payload, {
    httpOnly: true,
    secure: false, // Only secure in production
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}