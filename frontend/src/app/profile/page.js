import Navbar from '@/components/shared/Navbar'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src='/companyLogo.png' alt='profile' />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p className='font-sm text-md text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <Button variant="ghost" className="text-right bg-white">
            <Pen />
          </Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>chiragbang@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>9467757042</span>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default page