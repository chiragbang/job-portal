import { Job } from "../models/job.model.js";


// --------------------------------------------------------------------------------------------------------------------------------------------------------------- Post a Job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experienceLevel, position, companyId } = req.body;
        const userId = req.id;
        if (!title || !description || !requirements || !salary || !location || !jobType || !experienceLevel || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel,
            position,
            company: companyId,
            created_by: userId
        })
        return res.status(201).json({
            message: "Job Posted Successfully.",
            job,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------- Get all  Job

export const getAllJobs = async (req, res) => {
    try {
        // Finding Jobs by Keywords (Filteration logic)
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        

        // Below .populate is used. Populate is used for getting the information of Company as well. Suppose if we want to get the user information also in the same we have to use `created_by`
        const jobs = await Job.find(query)
        .populate([
            { path: "company" },
            { path: "created_by" }  // Add the second path here
        ])
        .sort({ createdAt: -1 });

        if (!jobs) {
            return res.status(404)({
                message: "Jobs not found",
                success: false
            })
        }

        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}


// ------------------------------------------------------------------------------------------get Jobs by Id (for Students)
export const getJobsById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({
                message: "Job not Found",
                success: false,
            })
        }
        return res.status(200).json({
            job,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

// ------------------------------------------------------------------------------------------get Jobs for Admin
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId })
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not Found",
                success: false,
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}
