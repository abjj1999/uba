import { Building2, Cloud, LockIcon, Server } from "lucide-react";
import Options from "../components/options";
import { Carousell } from "../components/carousel";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600"></p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Roof Assessment
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, we specialize in professional roof assessments designed to ensure the longevity and safety of your building's roofing system. Our assessments are conducted in compliance with ASTM E2018-15 standards, providing you with a thorough examination of your roof's current condition. We utilize advanced techniques and tools to identify any defects, potential risks, and necessary repairs. Our detailed reports help you understand the maintenance and repairs needed to protect your investment, ensuring your roof remains in optimal condition for years to come.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/images/service1.jpg"
            alt=""
            width="2000"
            height="1000"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-800 lg:max-w-lg ">
              <p className="">
                <strong> Comprehensive Inspection: </strong>  We conduct an in-depth visual and physical inspection to identify any signs of wear, damage, or potential failure points on your roof. <br />
                <strong> Documentation Review: </strong>  Our experts review all relevant roofing documentation, including installation and maintenance records, to provide a historical perspective on the roof&rsquo;s condition.<br />
                <strong> Detailed Reporting:</strong> You receive a detailed assessment report outlining the condition of the roof, necessary repairs, estimated costs, and maintenance recommendations to enhance its lifespan.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Roof Assessment we specialize in
                </h1>
                <Options title="Visual Inspection" content="A preliminary examination to identify visible signs of wear, damage, or potential issues." />
                <Options title= "Infrared Thermography" content="Advanced technique to detect moisture and insulation issues." />
                <Options title= "Structural Assessment" content="Detailed analysis of the roof structure to ensure stability and safety." />
                <Options title= "Core Sampling" content="Extracting sections of the roof to analyze the underlying materials and layers for more comprehensive understanding." />
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Cost Efficiency", "Safty","Longevity", "Increase Property Value"]} />
     
    
        </div>
      </div>
    </div>
  );
}
