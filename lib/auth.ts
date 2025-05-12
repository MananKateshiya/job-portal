import {  jwtVerify, SignJWT } from 'jose';

const encodedKey = new TextEncoder().encode(process.env.JWT_SECRET);

export async function generateToken( payload: {userId:string, userRole: string}) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(encodedKey)
}

export async function decryptToken(session: string) {
    try {
        const {payload} = await jwtVerify(session, encodedKey, { algorithms: ["HS256"] });
        return payload;
        
    } catch (error: any) {
        console.log(error.message)
        return null;
    }
}
    
    // export async function verifyToken(req: NextRequest) {
    //     const token = req.headers.get('Authorization')?.replace("Bearer ", "");
    
    //     if (!token) throw new Error("Access Token Required");
    
    //     try {
    //         const decode = jwt.verify(token, `${process.env.JWT_SECRET}`) as { userId: string };
    //         return decode.userId;
    //     } catch (error) {
    //         console.error("Decryption Error: ", error)
    //     }
    // }