import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "@/models/UsersModel";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/auth";
import connectMongoDB from "@/lib/mongodb";
import { UserType } from "@/lib/types";

export async function POST(request: NextRequest) {
    await connectMongoDB();

    const { email, password } = await request.json();
    const user = await UserModel.findOne({ email });

    if (!user) return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
    );

    const decode = await bcrypt.compare(password, user.password);
    if (!decode) return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 400 }
    );

    const token = await generateToken(user._id.toString(), UserType.Candidate); //generating jwt

    var response = NextResponse.json({ token, success: true, }, { status: 200 });
    response.cookies.set("session", token);
    console.log(response);
    return response
}