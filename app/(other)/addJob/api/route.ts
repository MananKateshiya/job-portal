import connectMongoDB from "@/lib/mongodb";
import { JobDetail, JobDetailModel } from "@/models/JobDetailModel";
import { main } from "@/scripts/dev/updateData";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB();

        const body: JobDetail = await request.json();

        if (!body.company || !body.job_title || !body.location || !body.salary || !body.job_type || !body.tags || !body.details === undefined) {
            return NextResponse.json(
                { error: 'Fill out all the details' },
                { status: 400 }
            )
        }
        const job = await JobDetailModel.create(body);

        return NextResponse.json(
            { job },
            { status: 201 }
        )
    } catch (error: any) {
        console.error('Error creating a job listing:', error);

        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err: any) => err.message);
            return NextResponse.json(
                { error: 'Validation Error', details: validationErrors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Failed to create a job listing" },
            { status: 500 }
        )
    }
}

export async function GET(request: NextRequest) {
    const res = await main();
    if (!res.message) {
        return NextResponse.json({ error: "Failed", success: false })
    }

    return NextResponse.json({ message: res.message });
}