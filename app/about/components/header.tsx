import { Button } from "@/components/ui/button";
import { Arrow } from "@radix-ui/react-menubar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-5 pt-10">
                <div className="w-full lg:w-5/12 flex flex-col justify-center mb-6 ">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-100 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-300 ">
                    Welcome to 74 Degree, your trusted engineering partner based in the vibrant heart of Houston, Texas. Founded in 2022, we are a dynamic engineering firm dedicated to providing a wide array of specialized services. Our expertise spans across Property Condition Assessments (PCA), Mechanical, Electrical, and Plumbing (MEP) systems, Environmental Site Assessments (ESA), and many other critical engineering disciplines.
                    </p>
                    <br />
                    <p className="font-normal text-base leading-6 text-gray-300">
                    With decades of combined experience, 74 DEGREE has established a solid reputation for excellence in the engineering industry. Our team comprises seasoned professionals who bring a wealth of knowledge and expertise to every project. Over the years, we have completed numerous projects across various sectors, from residential and commercial developments to industrial and infrastructure projects. Our extensive experience enables us to tackle complex challenges with confidence and precision, ensuring that our clients receive the highest quality service and innovative solutions. We pride ourselves on our ability to deliver results that not only meet but exceed expectations, driven by our commitment to continuous learning and improvement in the ever-evolving engineering landscape.                    </p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <Image width="2000" height="1000" className="w-full h-full" src="/images/houston.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center mt-6">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-100 pb-4">Our Mission</h1>
                    <p className="font-normal text-base leading-6 text-gray-300 ">
                    At 74 Degree, our mission is to empower the architecture and construction industries with innovative engineering solutions that enhance building safety, efficiency, and sustainability. We are dedicated to upholding the highest standards of service, utilizing cutting-edge technologies, and delivering precise, reliable results. As we serve our community in Houston and beyond, we commit to advancing the field of engineering with integrity, expertise, and a relentless pursuit of excellence.
                    </p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                <div className="my-6">
                <div className="flex justify-center items-center">
                    <Link href="/about/blog">
                        <Button className="text-white font-medium text-md" variant="ghost">
                            Blog 
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                    <Link href="/about/features">
                        <Button className="text-white font-medium text-md" variant="ghost">
                            Features
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                    <Link href="/about/testimonials">
                        <Button className="text-white font-medium text-md" variant="ghost">
                            Testimonials 
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default About1;
