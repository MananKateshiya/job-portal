import jwt from 'jsonwebtoken';

export async function generateToken(userId: string, userRole: string) {
    return jwt.sign({ userId: userId, role: userRole }, `${process.env.JWT_SECRET}`, { expiresIn: '1h' })
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

export async function decryptToken(session: string) {
   
    try {
        const decode = await jwt.verify(session, process.env.JWT_SECRET as string, { algorithms: ['HS256'] });
        return decode;

    } catch (error: any) {
        if (error.name === 'JsonWebTokenError') {
            console.log(error.message)
         
        }
    }
}