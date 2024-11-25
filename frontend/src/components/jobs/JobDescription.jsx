import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const JobDescription = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-xl'>Job Title</h1>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold rounded-full'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">24 LPA</Badge>
            </div>
            <Button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-all">
  Apply Now
</Button>

        </div>
    )
}

export default JobDescription