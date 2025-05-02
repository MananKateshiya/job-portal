
import connectMongoDB from "@/lib/mongodb";
import { JobDetailModel } from "@/models/JobDetailModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectMongoDB();
        const searchParams = request.nextUrl.searchParams;
        const _id = searchParams.get('id');

        const title = searchParams.get('title');
        const location = searchParams.get('location');
        const job_location = searchParams.get('job_location');
        const job_type = searchParams.get('job_type');
        const job_level = searchParams.get('job_level');
        const salaryMin = parseInt(searchParams.get('salaryMin') || "0");
        const salaryMax = parseInt(searchParams.get('salaryMax') || "25000");


        //pagination params
        const totalCount = await JobDetailModel.countDocuments();
        const limit = parseInt(searchParams.get('limit') || '5');
        const page = parseInt(searchParams.get('page') || '1');
        const totalPages = Math.ceil(totalCount / limit);
        const skip = (page - 1) * limit;
        const hasNext = (totalPages > page)
        const hasPrev = (page > 1)

        //query building for filters

        const query: any = {};

        if (title && title.trim() !== "") {
            query.job_title = { $regex: title, $options: 'i' }
        }
        if (location && location.trim() !== "") {
            query.location = { $regex: location, $options: "i" };
        }
        if (job_location && job_location.trim() !== "") {
            query.job_location = { $regex: job_location, $options: 'i' }
        }
        if (job_type && job_type.trim() !== "") {
            query.job_type = job_type;
        }
        if (job_level && job_level.trim() !== "") {
            query.job_level = job_level;
        }
        if (salaryMin || salaryMax) {
            query.salary = {};
            if (salaryMin) query.salary.$gte = Number(salaryMin);
            if (salaryMax) query.salary.$lte = Number(salaryMax);
        }


        if (_id) {
            const Job = await JobDetailModel.findById(_id)

            if (!Job) {
                return NextResponse.json({
                    Job,
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


        const Jobs = await JobDetailModel.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        if (!Jobs || Jobs.length === 0) {
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

    } catch (error: any) {
        console.error("Error in GET /api/jobs:", error);
        return NextResponse.json(
            { error: `Error Fetchign Jobs: ${error.message}` },
            { status: 500 }
        )
    }
}

