import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import { UserModel } from "@/models/UsersModel";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
    await connectMongoDB();

    const { name, email, password } = await request.json();
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
        return NextResponse.json(
            { error: 'User already exists', success: false },
            { status: 409 }
        );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: 'User registered', success: true }, { status: 201 })

}