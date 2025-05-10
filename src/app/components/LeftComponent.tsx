"use client"
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const LeftComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-black'>
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <Card className='w-100 md:w-96 bg-gray-400 shadow-md'>
                    <CardHeader>
                        <CardTitle className='text-center text-2xl font-bold'>
                            Welcome
                        </CardTitle>
                        <CardDescription className='text-center text-gray-700'>
                            Please sign in or create an account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="Name">Name</Label>
                            <Input type="text" id="name" placeholder="Name" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="Phone">Phone</Label>
                            <Input type="number" id="phone" placeholder="Phone Number" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" placeholder="Password" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input type="password" id="confirm-password" placeholder="Confirm Password" />
                        </div>
                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Button className='text-white px-4 py-2 rounded'>
                            Sign In 
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default LeftComponent
