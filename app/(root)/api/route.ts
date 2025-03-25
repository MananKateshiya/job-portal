
import connectMongoDB from "@/lib/mongodb";
import { JobDetailModel } from "@/models/JobDetailModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectMongoDB();
        const searchParams = request.nextUrl.searchParams;
        const _id = searchParams.get('id');
        const totalCount = await JobDetailModel.countDocuments();
        const limit = parseInt(searchParams.get('limit') || '5');
        const page = parseInt(searchParams.get('page') || '1');
        const totalPages = Math.ceil(totalCount / limit);
        const skip = (page - 1) * limit;
        const hasNext = (totalPages > page)
        const hasPrev = (page > 1)

        if (!_id || _id === undefined) {
            const Jobs = await JobDetailModel.find({})
                .sort({ _createdAt: -1 })
                .skip(skip)
                .limit(limit);

            if (!Jobs) {
                return NextResponse.json({
                    error: "No Job Found"
                }, { status: 404 })
            }
            return NextResponse.json(
                {
                    Jobs,
                    pagination: {
                        total: totalCount,
                        page,
                        limit,
                        totalPages,
                        hasNext,
                        hasPrev
                    }
                },
                { status: 200 }
            )
        } else {
            const Job = await JobDetailModel.findById(_id)

            if (!Job) {
                return NextResponse.json({
                    error: "No Job Found"
                }, { status: 404 })
            }
            return NextResponse.json(
                {
                    Job,
                },
                { status: 200 }
            )
        }




    } catch (error: any) {
        console.error("Error in GET /api/jobs:", error);
        return NextResponse.json(
            { error: `Error Fetchign Jobs: ${error.message}` },
            { status: 500 }
        )
    }
}

