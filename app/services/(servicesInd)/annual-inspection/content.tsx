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
                Annual Inspection
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At 74 Degree, we provide meticulous annual inspection services designed to maintain and enhance the safety, functionality, and value of your property. Following a structured protocol inspired by industry standards, including ASTM E2018-15, our annual inspections are conducted by certified professionals who assess all critical aspects of your buildings and facilities. These thorough evaluations are aimed at identifying potential issues before they become major problems, ensuring compliance with safety codes, and enhancing asset management strategies. Our detailed reports deliver actionable insights and recommendations, helping you plan for necessary repairs, upgrades, and compliance measures. Partner with us to protect and optimize your property investment through proactive annual inspections.
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
                <strong> Comprehensive Evaluation: </strong> We examine all key systems and structures to ensure they are in optimal condition and functioning properly.<br />
                <strong> Preventive Maintenance: </strong>   Identifying minor issues before they escalate, saving costs and extending the lifespan of your assets.<br />
                <strong> Regulatory Compliance: </strong> Ensuring your facilities meet all relevant safety and building codes to avoid penalties and ensure occupant safety.

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Types of Inspections We Offer
                </h1>
                <Options title="Structural Integrity Inspection" content="Assessing the building's structural components for signs of stress or deterioration." />
                <Options title="Mechanical System Inspection" content="Checking HVAC, elevators, and other mechanical systems for operational efficiency and safety." />
                <Options title="Electrical System Inspection" content="Ensuring all electrical installations and components are safe and functioning correctly." />
                <Options title="Fire Safety Inspection" content="Examining fire alarms, sprinkler systems, and extinguishers to ensure they are ready in case of emergency." />
                <Options title="Exterior Inspection" content="Evaluating the roof, facade, and other external elements for damage or potential risks." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Enhanced Safety", "Cost Savings", "Increased Asset Value", "Operational Reliability", "Peace of Mind"]} />


        </div>
      </div>
    </div>
  );
}
