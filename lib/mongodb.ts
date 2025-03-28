import mongoose from "mongoose";


<<<<<<< HEAD
const MONGODB_URI = process.env.MONGODB_URI;
=======
const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://manankateshiya:${process.env.MONGO_PW}@cluster0.iti6i.mongodb.net/Job-Portal`;
>>>>>>> 46116cb360a1da6cd2c60ea60bca4c26b70cf73e

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface GlobalWithMongoose extends Global {
    mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}

// Fix for TypeScript: declare the mongoose property on global
declare const global: GlobalWithMongoose;

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongoDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(`${MONGODB_URI}`, opts).then((mongoose) => {
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectMongoDB;
