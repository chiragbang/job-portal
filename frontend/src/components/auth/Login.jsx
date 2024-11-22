"use client"
import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import Link from 'next/link'

const Login = () => {
    const [input, setInput] = useState({
        fullname: "",
        email:"",
        phoneNumber:"",
        password: "",
        role: "",
        file: ""
    })

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]:e.target.value})
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input)
    }

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
                <form onSubmit={submitHandler} className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 border border-gray-300 rounded-lg p-6 my-10 shadow-lg bg-white">
                    <h1 className="font-bold text-2xl mb-6 text-center">Login</h1>
                    
                    
                    
                    <div className="my-4">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>
                    
                   
                    <div className="my-4">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="*******"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>
                    
                   
                    
                    <div className="my-4">
                        <RadioGroup className="flex items-center gap-6 my-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                     type="radio"
                                     name="role"
                                     value="student"
                                     checked={input.role === 'student'}
                                     onChange={changeEventHandler}
                                     className="cursor-pointer"
                                />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                   type="radio"
                                   name="role"
                                   value="recruiter"
                                   checked={input.role === 'recruiter'}
                                   onChange={changeEventHandler}
                                   className="cursor-pointer"
                                />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    

                    <Button 
                        variant="outline" 
                        type="submit" 
                        className="w-full my-4 bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 hover:text-white"
                    >
                        Login
                    </Button>
                    
                    <div className="text-center text-sm mt-4">
                        <span>Don't have an account? </span>
                        <Link href="/signup"
                             className="text-blue-600 hover:underline">Register Now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
