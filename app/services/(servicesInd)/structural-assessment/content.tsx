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
                Structural Assessment
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, our structural assessment services are dedicated to ensuring the safety, stability, and longevity of your building’s structure. Using cutting-edge technology and engineering expertise, we provide detailed evaluations of building structures to identify potential risks, design flaws, or deterioration that may impact building integrity. Our assessments are crucial for property owners looking to maintain their buildings, adhere to safety standards, and plan for future renovations or expansions. Each assessment culminates in a comprehensive report that offers actionable insights and recommendations tailored to extend the life of your property and enhance its safety and functionality.
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
                <strong> In-Depth Analysis: </strong>  We conduct thorough examinations of the structural elements, including foundations, beams, columns, and load-bearing walls.<br />
                <strong> Identification of Issues: </strong>  Our experts pinpoint areas of concern such as cracks, corrosion, water damage, and other signs of structural wear or failure.<br />
                <strong> Detailed Reporting:</strong> Clients receive an extensive report that outlines current conditions, potential risks, and recommended remedial actions.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Structural Assessment we specialize in
                </h1>
                <Options title="Visual Inspection" content="Basic yet essential, focusing on visible signs of distress or deterioration." />
                <Options title="Non-Destructive Testing (NDT)" content=" Utilizes methods like ultrasound, radiography, and thermal imaging to assess internal conditions without damaging the structure." />
                <Options title="Load Testing" content=" Applies controlled loads to a structure to measure response and ensure it can support its intended loads safely." />
                <Options title="Forensic Analysis" content="Detailed investigation following a failure or incident to determine the cause and prevent future occurrences." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Cost Efficiency", "Safty","Longevity", "Increase Property Value", "Compliance"]} />
     
    
        </div>
      </div>
    </div>
  );
}
