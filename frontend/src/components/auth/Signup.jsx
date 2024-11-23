"use client"
import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import Link from 'next/link'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import store from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })

    const { loading } = useSelector(store => store.auth)
    const dispatch = useDispatch();

    const router = useRouter();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file)
        }
        try {
            dispatch(setLoading(true))
            const response = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (response.data.success) {
                router.push("/login");
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
                <form onSubmit={submitHandler} className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 border border-gray-300 rounded-lg p-6 my-10 shadow-lg bg-white">
                    <h1 className="font-bold text-2xl mb-6 text-center">Sign Up</h1>

                    <div className="my-4">
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                        />
                    </div>

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
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            placeholder="9898989898"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={input.phoneNumber}
                            name="phoneNumber"
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

                    <div className="my-4">
                        <Label>Profile Picture</Label>
                        <div className="flex items-center gap-3">
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    {
                        loading ? <Button className="w-full my-4 bg-black text-white"><Loader2 className='mr-2 h-4 w-4 animate-spin' />Setting up things...</Button> : <Button
                            variant="outline"
                            type="submit"
                            className="w-full my-4 bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 hover:text-white"
                        >
                            Register
                        </Button>
                    }

                    <div className="text-center text-sm mt-4">
                        <span>Already have an account? </span>
                        <Link href="/login"
                            className="text-blue-600 hover:underline">Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
