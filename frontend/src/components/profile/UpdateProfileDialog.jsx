"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth)

    const [input, setInput] = useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile.bio,
        skills: user?.profile?.skills?.map(skill => skill),
        file: user?.profile?.resume
    })

    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true)
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }

            console.log(res)
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        finally{
            setLoading(false)
        }
        setOpen(false)
        console.log(input)
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }


    return (
        <div>
            <Dialog open={open} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <DialogContent className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-gray-800">Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="fullname" className="text-right font-medium text-gray-600">
                                    Name
                                </Label>
                                <Input
                                    id="fullname"
                                    name="fullname"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right font-medium text-gray-600">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phoneNumber" className="text-right font-medium text-gray-600">
                                    Number
                                </Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="bio" className="text-right font-medium text-gray-600">
                                    Bio
                                </Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3 border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="skills" className="text-right font-medium text-gray-600">
                                    Skills
                                </Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    value={input.skills} 
                                    onChange={changeEventHandler}
                                    className="col-span-3 border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="file" className="text-right font-medium text-gray-600">
                                    Resume
                                </Label>
                                <Input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandler}
                                    className="col-span-3 border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            {loading ? (
                                <Button className="w-full my-4 bg-black text-white">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />Updating profile
                                </Button>
                            ) : (
                                <Button
                                    variant="outline"
                                    type="submit"
                                    className="w-full my-4 bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 hover:text-white"
                                >
                                    Update
                                </Button>
                            )}
                        </DialogFooter>
                    </form>

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateProfileDialog;
