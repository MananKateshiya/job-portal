import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export async function generateToken(userId: string) {
    return jwt.sign({ userId: userId }, `${process.env.JWT_SECRET}`, { expiresIn: '1h' })
}

export async function verifyToken(req: NextRequest) {
    const token = req.headers.get('Authorization')?.replace("Bearer ", "");

    if (!token) throw new Error("Access Token Required");

    try {
        const decode = jwt.verify(token, `${process.env.JWT_SECRET}`) as { userId: string };
        return decode.userId;
    } catch (error) {
        console.error("Decryption Error: ", error)
    }
}

export async function decryptToken(session: string) {
    try {

        return await jwt.verify(session, process.env.JWT_SECRET as string, { algorithms: ['HS256'] })

    } catch (error) {
        console.error("Decryption Error: ", error)
        throw new Error('Cookie not found')
    }
}