import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
import { User } from "../models/user.model.js";


// --------------------------------------------------------------------------------------------------------------------------------------------- Apply For a Job
export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        // const {id:jobId} = req.params;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job Id is required",
                success: false
            })
        }

        // Check if The User has already applied or not for the particular job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job.",
                success: false
            })
        }

        // Check if the job exist or not
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }

        // Createa new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        })

        job.applications.push(newApplication._id)
        await job.save();

        return res.status(201).json({
            message: "Job Applied Successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}


// --------------------------------------------------------------------------------------------------------------------------------------------- Get All Applied Jobs by Students
export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } },
            }
        })

        if (!application) {
            return res.status(404).json({
                message: "No Applications",
                success: false
            })
        }

        return res.status(200).json({
            application,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}


// -------------------------------------------------------------------------------------------------------------------------------------------------Admin's Job Applicants
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        })
        if (!job) {
            return res.status(404).json({
                message: 'Job not found',
                success: false
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

// -------------------------------------------------------------------------------------------------------------------------------------------------Update Status
export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: "Status is required",
                success: false
            })
        }

        // Find the application by application id
        const application = await Application.findOne({ _id: applicationId })
        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            })
        }

        // update status
        application.status = status.toLowercase();
        await application.save();
        return res.status(200).json({
            message: "Status updated successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}
