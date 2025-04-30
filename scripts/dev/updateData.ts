import connectMongoDB from "@/lib/mongodb";
import { JobDetailModel } from "@/models/JobDetailModel";

enum JobLocation {
    OnSite = 'on-site',
    Remote = 'remote'
}
export function getRandomData() {
    return Math.random() < 0.5 ? JobLocation.OnSite : JobLocation.Remote;
}

export async function main() {
    try {
        const conn = await connectMongoDB();
        const jobs = await JobDetailModel.find();

        // await JobDetailModel.deleteMany({});
        // await JobDetailModel.insertMany(data)

        const updatePromise = jobs.map((job) => {
            const location = getRandomData();
            return JobDetailModel.findByIdAndUpdate(job._id, { job_location: location })
        })
        await Promise.all(updatePromise)
        console.log("Data Alteration Done");

        await conn.disconnect();
        return { message: "DATA ALTERATION DONE" }
    } catch (error: any) {
        throw new error instanceof Error ? error : 'Failed to update data'
    }
}

