import { JobDetail, PaginatedResponse } from "@/models/JobDetailModel";

const API_URL = 'http://localhost:3000/api'

export async function getCriticalInfo(page = 1, limit = 5): Promise<PaginatedResponse> {

    const res = await fetch(`${API_URL}/?page=${page}&limit=${limit}`);
    const jobs = await res.json();
    if (!res.ok) {
        throw new Error('Failed to fetch jobs')
    }
    return jobs;
}

export async function getDetails(id: string): Promise<JobDetail> {
    const res = await fetch(`${API_URL}/?id=${id}`);
    const jobDetail = await res.json();
    if (!res.ok) {
        throw new Error('Failed to fetch the jobs')
    }
    return jobDetail.Job;
}