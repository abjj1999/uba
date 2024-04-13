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
              Building Envelope Assessment
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, our Building Envelope Assessments are meticulously designed to identify and address any deficiencies in the exterior shell of your buildings, enhancing their overall performance and sustainability. Following the guidelines of ASTM E2018-15, our assessments scrutinize the integrity and functionality of the building envelope, including walls, roofs, foundations, and all interfacing components. This process ensures that your building&apos;s envelope is optimized to control the flow of air, moisture, and thermal energy. By conducting thorough evaluations, we help you prevent potential damage, improve energy efficiency, and ensure a comfortable indoor environment for all occupants. Trust our expert team to deliver detailed insights and solutions that bolster the longevity and resilience of your structures.</p>
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
                <strong> Detailed Inspection: </strong>  We conduct in-depth inspections to identify any current or potential issues with the building envelope.<br />
                <strong> Holistic Approach: </strong>  Our assessments consider all aspects of the envelope, including structural integrity, moisture control, and thermal performance.<br />
                <strong> Customized Recommendations: </strong> Based on our findings, we provide tailored recommendations for repairs, upgrades, or replacements.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Building Envelope Assessments we specialize in
                </h1>
                <Options title="Visual Assessment" content="Basic evaluation focusing on visible signs of damage or wear." />
                <Options title="Infrared Thermography" content="Using infrared technology to detect thermal anomalies that indicate insulation issues or moisture penetration." />
                <Options title="Water Penetration Testing" content="Specific tests to determine the envelope's resistance to water ingress." />
                <Options title="Air Leakage Testing" content="Measures the rate of air infiltration through the envelope which impacts energy efficiency and comfort." />
                <Options title="Structural Integrity Assessment" content="Detailed examination of the structural components of the envelope to assess their condition and performance." />
               </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Enhanced Energy Efficiency", "Cost Savings", "Improved Indoor Comfort", "Increased Longevity", "Compliance with Standards"]} />
     
    
        </div>
      </div>
    </div>
  );
}
