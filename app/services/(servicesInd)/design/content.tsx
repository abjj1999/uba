

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
                Design
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, our design services merge creativity with compliance, adhering to ASTM E2018-15 standards to ensure excellence in every project. Our team of experienced designers and architects specializes in creating functional, aesthetically pleasing spaces that meet both the aspirations of our clients and the rigorous demands of regulatory standards. From initial concept to final execution, we focus on sustainable, innovative solutions that optimize space utilization, enhance building performance, and ensure environmental responsibility. Trust us to bring your vision to life with precision and professionalism.             </p>
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
                <strong> Regulatory Compliance: </strong>  Every design adheres strictly to ASTM E2018-15 and local building codes, ensuring projects meet all safety and sustainability requirements.<br />
                <strong> Customization: </strong>  Tailored design solutions that reflect the unique needs and style preferences of each client.<br />
                <strong> Sustainable Practices:</strong> Incorporation of eco-friendly materials and energy-efficient strategies in all designs to reduce environmental impact.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Design we specialize in
                </h1>
                <Options title="Architectural Design" content="Crafting the conceptual and aesthetic aspects of buildings and structures." />
                <Options title="Interior Design" content="Focusing on the interiors to create functional and attractive indoor environments." />
                <Options title="Landscape Design" content="Planning outdoor spaces to harmonize aesthetics with natural elements." />
                <Options title="Urban Design" content="Strategizing the layout and functionality of urban spaces to enhance community living." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Aesthetic Enhancements", "Safty","Energy Efficiency", "Increase Property Value", "Compliance"]} />
     
    
        </div>
      </div>
    </div>
  );
}
