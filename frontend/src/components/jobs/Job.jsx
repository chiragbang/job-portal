import { Bookmark, BookmarkPlus, Info } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl border border-gray-100 bg-white'>
            <div className='flex items-center justify-between'>

                <p className='text-sm text-gray-500'>2 Days Ago</p>
                {/* <Button variant="outline" className="bg-gray-400 rounded-full" size="icon" ><Bookmark/></Button> */}
                <Button
                    variant="outline"
                    className="border border-gray-300 text-gray-800 rounded-full"
                    size="icon"
                >
                    <Bookmark />
                </Button>
            </div>

            <div className='flex items-center gap-2 my-2'>

                <Button className="p-6" size="icon">
                    <Avatar>
                        <AvatarImage src="/companyLogo.png" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ducimus ratione recusandae repellendus placeat. Doloribus vitae natus tenetur nihil blanditiis?</p>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold rounded-full'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209b7] font-bold rounded-full'} variant="ghost">24 LPA</Badge>
            </div>

            <div className="flex items-center gap-4 mt-4">
      {/* Details Button */}
      <Button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-shadow shadow-md">
        <Info className="w-5 h-5" />
        Details
      </Button>
      {/* Save for Later Button */}
      <Button className="flex items-center gap-2 bg-[#7209b7] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-shadow shadow-md">
        <BookmarkPlus className="w-5 h-5" />
        Save for Later
      </Button>
    </div>
        </div>
    )
}

export default Job