import Link from 'next/link'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'

const Navbar = () => {
    const user = false;
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>

                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
                </div>
                <ul className='flex font-medium items-center gap-5'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Jobs</Link></li>
                    <li><Link href="/">Browse</Link></li>
                </ul>
                {
                    !user ? (
                        <div>
                            <p>Login Signup Buttons</p>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className='flex gap-4 items-center '>

                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium'>Chirag Bang</h4>
                                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className='flex flex-col items-start text-gray-600 py-2'>
                                    <div className='flex w-fit items-center gap-1 cursor-pointer'>
                                        <User2 />
                                        <Button variant="link">View Profile</Button>
                                    </div>
                                    <div className='flex w-fit items-center gap-1 cursor-pointer'>
                                        <LogOut />   <Button variant="link">Logout</Button>

                                    </div>

                                </div>
                            </PopoverContent>
                        </Popover>
                    )
                }

            </div>

        </div>
    )
}

export default Navbar