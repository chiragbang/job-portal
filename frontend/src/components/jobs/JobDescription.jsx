import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const JobDescription = () => {
    const isApplied = false;
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">12 Positions</Badge>
                        <Badge className={'text-[#F83002] font-bold rounded-full'} variant="ghost">Part Time</Badge>
                        <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">24 LPA</Badge>
                    </div>
                </div>
                <Button
                    className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-all ${isApplied
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg active:bg-gray-900 focus:ring-2 focus:ring-gray-700 focus:ring-offset-2'
                        }`}
                    disabled={isApplied}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='py-4 border-b-2 border-b-gray-300 font-bold'>Job Description</h1>
            <div className='my-4'>
                <h1 className="font-bold my-2 text-lg text-gray-900">
                    Role: <span className="pl-4 font-normal text-gray-700">Frontend Developer</span>
                </h1>
                <h1 className="font-bold my-2 text-lg text-gray-900">
                    Location: <span className="pl-4 font-normal text-gray-700">Remote</span>
                </h1>
                <h1 className="font-bold my-2 text-lg text-gray-900">
                    Description: <span className="pl-4 font-normal text-gray-700">Develop and maintain web applications</span>
                </h1>
                <h1 className="font-bold my-2 text-lg text-gray-900">
                    Experience: <span className="pl-4 font-normal text-gray-700">3+ Years</span>
                </h1>
                <h1 className="font-bold my-2 text-lg text-gray-900">
                    Salary: <span className="pl-4 font-normal text-gray-700">$70,000 - $90,000/year</span>
                </h1>
                <h1 className="font-bold my-2 text-lg text-gray-900">
                    Total Applicants: <span className="pl-4 font-normal text-gray-700">125</span>
                </h1>
                <h1 className="font-bold my-2 text-lg text-gray-900">
                    Posted Date: <span className="pl-4 font-normal text-gray-700">November 20, 2024</span>
                </h1>

            </div>
        </div>
    )
}

export default JobDescription