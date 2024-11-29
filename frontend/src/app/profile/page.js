"use client"
import AppliedJobTable from '@/components/profile/AppliedJobTable'
import UpdateProfileDialog from '@/components/profile/UpdateProfileDialog'
import Navbar from '@/components/shared/Navbar'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import store from '@/redux/store'
import { Contact, Mail, Pen } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// const skills = [
//   "JavaScript",
//   "React",
//   "Node.js",
//   "MongoDB",
//   "HTML",
//   "CSS",
//   "Express.js",
//   "Git",
//   "TypeScript",
//   "Redux"
// ];

const isHaveResume = true;

const page = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector(store => store.auth);

  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src='/companyLogo.png' alt='profile' />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>{user?.fullname}</h1>
              <p className='font-sm text-md text-gray-500'>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} variant="ghost" className="text-right bg-white">
            <Pen />
          </Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>{user?.profile?.bio}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className='my-5'>
          {/* <h1>Skills</h1> */}
          <Label className="text-md font-bold">Skills</Label>
          <div className='flex items-center gap-2 flex-wrap'>
            {
              user?.profile?.skills.length > 0 ? (
                user?.profile?.skills.map((item, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-3 py-1 text-sm font-medium text-gray-800 bg-gray-200 border-gray-300 rounded-full hover:bg-gray-300 transition-colors m-1"
                  >
                    {item}
                  </Badge>
                ))
              ) : (
                <span className="text-gray-500 italic">No skills added yet.</span>
              )
            }
          </div>
        </div>

        {/* Resume */}
        <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
  <Label className="text-md font-bold">Resume</Label>
  {isHaveResume && user?.profile?.resume ? (
    <Link
      className="text-blue-500 w-full hover:underline cursor-pointer"
      target="_blank"
      href={user?.profile?.resume}
    >
      {user?.profile?.resumeOriginalName || "Download Resume"}
    </Link>
  ) : (
    <span className="text-gray-500">No Resume Available</span>
  )}
</div>
        {/* Applied Jobs */}

      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
        <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default page