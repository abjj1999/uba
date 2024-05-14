/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
"use client";
import { Button } from '@/components/ui/button'
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
// import { Switch } from '@headlessui/react'

const schema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().email().min(0).max(50),
  number: z.string().min(10).max(15),
  site_address: z.string().min(10).max(100),
  parcelId: z.string().min(5).max(15),
  units_num: z.string().min(1).max(100),
  site_contact: z.string().min(10).max(500),
  site_access: z.string().min(10).max(500),
  site_type: z.string().min(5).max(50),
  message: z.string().min(10).max(500),
})

type TSchema = z.infer<typeof schema>

export default function Form() {

  const { toast } = useToast()
  const form: any = useRef();

  const { register, handleSubmit, formState: { errors } } = useForm<TSchema>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: TSchema) => {
    console.log(data);
    
    toast({
      title: 'Email sent',
      description: 'We will get back to you soon'
    })
  }

  const sendEmail = (e: any) => {
    e.preventDefault();


    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "", process.env.NEXT_PUBLIC_SERVICE_TEMPLATE_ID2 ?? "", form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? "",
      })
      
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          toast({
            title: 'Email sent',
            description: 'We will get back to you soon'
          })

        },
        (error) => {
          console.log('FAILED...', error);
        },
      );


  };

  return (
    <div className="isolate bg-white px-6 py-12  lg:px-8">


      <form  ref={form} onSubmit={sendEmail} className="mx-auto  max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="first-name" >
              First name
            </Label>
            <div className="mt-2.5">
              <Input
                {...register("first_name")}
                type="text"
                id="first-name"
                placeholder='John'
                className={cn({"focus-visible:ring-red-500": errors.first_name,})} 
              />
              {errors?.first_name && <p className="text-red-500 text-sm mt-1">First name is required</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="last-name" >
              Last name
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                {...register("last_name")}
                id="last-name"
                placeholder='Doe'
                
                autoComplete="family-name"
                className={cn({"focus-visible:ring-red-500": errors.last_name,})} 

              />
              {errors?.last_name && <p className="text-red-500 text-sm mt-1">Last name is required</p>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="email" >
              Email
            </Label>
            <div className="mt-2.5">
              <Input
                type="email"
                {...register("email")}
                id="email"
                placeholder='example@gmail.com'
                className={cn({"focus-visible:ring-red-500": errors.email,})} 
              />
              {errors?.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="phone-number" >
              Phone number
            </Label>
            <div className="relative mt-2.5">

              <Input
                type="tel"
                {...register("number")}
                id="phone-number"
                placeholder='(123) 456-7890'
                className={cn({ "focus-visible:ring-red-500": errors.number,})} 
              />
              {errors?.number && <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="site_address" >
              Site Address
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                {...register("site_address")}
                id="site_address"
                placeholder='1234 Main St, City, State 12345'  
                className={cn({"focus-visible:ring-red-500": errors.site_address})} 
              />
              {errors?.site_address && <p className="text-red-500 text-sm mt-1">Site address is required</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="pacelId" >
              Parcel ID
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                {...register("parcelId")}
                id="parcelId"
                placeholder='12345'  
                className={cn({"focus-visible:ring-red-500": errors.parcelId,})} 
              />
              {errors?.parcelId && <p className="text-red-500 text-sm mt-1">{errors.parcelId.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="units_num" >
              Number of units
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                {...register("units_num")}
                id="units_num"
                placeholder='10'
                className={cn({"focus-visible:ring-red-500": errors.units_num,})} 
              />
              {errors?.units_num && <p className="text-red-500 text-sm mt-1">Number of units is required</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="type_site" >
              Type of sale
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                {...register("site_type")}
                id="type_site"
                placeholder='Sale/Purchase/Refinance'
                className={cn({"focus-visible:ring-red-500": errors.site_type, })} 
              />

            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="site_contact" >
              Site contact information
            </Label>
            <div className="mt-2.5">
              <Textarea
                {...register("site_contact")}
                id="site_contact"
                placeholder='Site contact information'
                rows={4}
                className={cn({"focus-visible:ring-red-500": errors.site_contact,})} 

              />
              {errors?.site_contact && <p className="text-red-500 text-sm mt-1">Site contact information is required</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="site_access" >
              Site access information
            </Label>
            <div className="mt-2.5">
              <Textarea
                {...register("site_access")}
                id="site_access"
                placeholder='Site access information'
                rows={4}
                className={cn({"focus-visible:ring-red-500": errors.site_access,})} 

              />
              {errors?.site_access && <p className="text-red-500 text-sm mt-1">Site access information is required</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message" >
              Message (optional)
            </Label>
            <div className="mt-2.5">
              <Textarea
                {...register("message")}
                id="message"
                placeholder='Other information you would like to share'
                rows={4}
                

              />

            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            variant="default"
            type="submit"
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            
          >
            Lets talk
          </Button>
        </div>
      </form>
    </div>
  )
}
