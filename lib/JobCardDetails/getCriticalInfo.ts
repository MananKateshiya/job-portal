import { JobDetail, PaginatedResponse } from "@/models/JobDetailModel";

const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

interface JobSearchParams {
    page?: number;
    limit?: number;
    title?: string;
    location?: string;
    job_type?: string;
    job_location?: string;
    salaryMin?: string | number;
    salaryMax?: string | number;
}
export async function getCriticalInfo(params: JobSearchParams = {}): Promise<PaginatedResponse> {

    const {
        page = 1,
        limit = 5,
        title,
        location,
        job_type,
        job_location,
        salaryMin,
        salaryMax
    } = params;

    const queryParams = new URLSearchParams();
    queryParams.set('page', page.toString());
    queryParams.set('limit', limit.toString());

    if (title) queryParams.set('title', title);
    if (location) queryParams.set('location', location);
    if (job_type) queryParams.set('job_type', job_type);
    if (job_location) queryParams.set('job_location', job_location);
    if (salaryMin) queryParams.set('slaryMin', salaryMin.toString());
    if (salaryMax) queryParams.set('salaryMax', salaryMax.toString());

    const res = await fetch(`${API_URL}/?${queryParams.toString()}`);
    const jobs = await res.json();


    return jobs;
}

export async function getDetails(id: string): Promise<JobDetail> {
    const res = await fetch(`${API_URL}/?id=${id}`);
    const jobDetail = await res.json();
    if (!res.ok) {
        // throw new Error("No Job found")
        return jobDetail.error;
    }
    return jobDetail.Job;
}