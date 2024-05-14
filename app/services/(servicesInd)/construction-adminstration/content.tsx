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
              Construction Administration 
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, our construction administration services are tailored to ensure every project runs smoothly, adhering to the highest industry standards. With a focus on effective management and oversight, our team facilitates the communication, documentation, and coordination required to bring construction projects to successful completion. We oversee all phases of construction, from pre-construction planning to final inspections, ensuring that each stage adheres to the specified guidelines and quality standards. Our proactive approach minimizes risks, manages contractors, and maintains strict adherence to schedules and budgets, empowering your projects with precision and expertise.</p>
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
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-3xl ">
                  Type of Construction Administration services we specialize in
                </h1>
                <Options title="Contract Administration" content="Managing the contract process from bidding to project close-out to ensure compliance and performance." />
                <Options title="Site Management" content="Overseeing the physical construction activities to ensure they follow the project plans and safety regulations." />
                <Options title="Document Management" content="Maintaining and controlling project documentation, including contracts, drawings, and communication records." />
                <Options title="Change Management" content="Handling changes in project scope, ensuring all adjustments are documented and approved by relevant stakeholders." />
                <Options title="Quality Control Administration" content="Implementing quality control measures to ensure the project meets all agreed-upon standards and functionalities." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Improved Efficiency", "Enhanced Communication", 'Risk Management','Project Consistency','Regulatory Adherence']} />
     
    
        </div>
      </div>
    </div>
  );
}
