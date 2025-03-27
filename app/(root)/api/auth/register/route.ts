import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import { UserModel } from "@/models/UsersModel";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
    await connectMongoDB();
    try {
        const { name, email, password } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({ name, email, password: hashedPassword });
        user.save();

        return NextResponse.json({ message: 'User registered' }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 400 });
    }
}