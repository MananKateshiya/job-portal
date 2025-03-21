import mongoose from "mongoose";

// Define the enum
enum JobType {
    PartTime = "Part-Time",
    FullTime = "Full-Time",
    EntryLevel = "Entry-Level",
    Internship = "Internship",
    Remote = "Remote",
    WorkFromHome = "Work From Home",
}

// Define the interface for TypeScript
export interface JobDetail {
    _id?: string;
    job_title: string;
    company: string;
    location: string;
    salary: string;
    job_type: JobType;
    tags: string[];
    special: boolean;
    details: {
        category_id: number;
        name: string;
        points: string[]; // Array of strings
    }[];
    selected_points: number[]; // Array of category objects
    _createdAt: Date;
    _updatedAt: Date;
}
export interface PaginatedResponse {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    },
    Jobs: JobDetail[];
}
// Define the Mongoose schema
const JobDetailSchema = new mongoose.Schema(
    {
        job_title: {
            type: String,
            required: [true, "Enter a Job Title"],
        },
        company: {
            type: String,
            required: [true, "Enter the Company Name"], // Fixed typo in "Comapny"
        },
        location: {
            type: String,
            required: [true, "Enter the Location"],
        },
        salary: {
            type: String,
            required: [true, "Enter a Salary"],
        },
        job_type: {
            type: String,
            enum: Object.values(JobType),
            required: [true, "Enter a Job Type"],
        },
        tags: [
            {
                type: String,
                required: false
            }
        ],
        special: {
            type: Boolean,
            required: [false, "is Special?"],
            default: false
        },
        details: [
            {
                category_id: {
                    type: Number,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                points: [
                    {
                        type: String,
                        required: true,
                    },
                ],
            },
        ],
    },
    {
        timestamps: true,
    }
);

// Export the model
export const JobDetailModel =
    mongoose.models.Job || mongoose.model("Job", JobDetailSchema);