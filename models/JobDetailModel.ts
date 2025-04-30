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
enum JobLocation {
    OnSite = "on-site",
    Remote = "remote"
}
interface Point {
    point: string;
    isSelected: boolean;
}

interface Category {
    name: string;
    points: Point[];
}

export interface JobDetail {
    _id?: string;
    job_title: string;
    company: string;
    location: string;
    job_location: string;
    salary: string;
    job_type: JobType;
    tags: string[];
    special: boolean;
    details: Category[];
    createdAt: any;
    updatedAt: any;
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

const JobDetailSchema = new mongoose.Schema(
    {
        job_title: {
            type: String,
            required: [true, "Enter a Job Title"],
        },
        company: {
            type: String,
            required: [true, "Enter the Company Name"],
        },
        location: {
            type: String,
            required: [true, "Enter the Location"],
        },
        job_location: {
            type: String,
            enum: Object.values(JobLocation),
            required: [true, "Enter job location e.g. remote or on-site"]
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
            required: false,
            default: false
        },
        details: [
            {
                category_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    auto: true
                },
                name: {
                    type: String,
                    required: [true, "Category must have a name"],
                },
                points: [
                    {
                        point: {
                            type: String,
                            required: [true, "Point must have a value"]
                        },
                        isSelected: {
                            type: Boolean,
                            default: false
                        }
                    }
                ]
            }
        ]
    },
    {
        timestamps: true,
    }
);

// Export the model
export const JobDetailModel =
    mongoose.models.Job || mongoose.model("Job", JobDetailSchema);