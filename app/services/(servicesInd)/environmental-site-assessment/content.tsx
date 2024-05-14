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
                ESA
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At 74 Degree, our Environmental Site Assessments (ESAs) are critical tools for any real estate transaction, ensuring that environmental risks are identified, quantified, and managed effectively. Aligned with ASTM E2018-15 standards, our ESAs are designed to protect our clients from potential liability by thoroughly assessing a property’s environmental condition. We conduct detailed investigations to identify any contamination or compliance issues that could affect the property&apos;s value or usability. From initial records review to site inspection and reporting, we provide a holistic analysis that supports informed decision-making. Rely on our expert team to guide you through the complexities of environmental risks, helping you to navigate potential challenges with confidence and strategic insight.
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
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Environmental Site Assessments we specialize in
                </h1>
                <Options title="Phase I ESA" content="Reviews past and present activities to identify potential or existing environmental contamination liabilities." />
                <Options title="Phase II ESA" content="Involves detailed testing of soil, groundwater, and building materials to confirm the presence of hazardous substances." />
                <Options title="Contamination Assessment" content="Contamination Assessment refers to the evaluation of potential environmental contamination at a property. This assessment is conducted to identify any existing or potential contamination issues that could affect the property&apos;s condition or value." />
                <Options title="Vapor intrusion Survey" content="A Vapor Intrusion Survey under ASTM E2018-15 evaluates the risk of hazardous vapors entering a building from subsurface contamination, ensuring indoor air quality and occupant safety." />
                <Options title="Tank closure Assessment" content="A Tank Closure Assessment under ASTM E2018-15 evaluates the proper decommissioning of storage tanks, ensuring no environmental contamination remains. This assessment includes site inspections, soil and groundwater testing, and verifying regulatory compliance for safe closure​" />
                <Options title="Remedial Action Plans" content="" />
                <Options title="Sampling and monitoring" content="" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Liability Protection", "Informed Purchasing Decisions", "Compliance Assurance", "Public Safety and Health", "Property Value Preservation"]} />


        </div>
      </div>
    </div>
  );
}
