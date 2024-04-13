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
              Construction Document Review
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, our construction document review services are designed to align with ASTM E2018-15 standards, ensuring that every aspect of your project documentation is meticulously analyzed for compliance, accuracy, and feasibility. Our team of experts delves into the details of construction plans, specifications, contracts, and related documents to safeguard your project against potential errors and omissions. By identifying discrepancies and areas of improvement early, we help streamline the construction process, reduce costly delays, and enhance project outcomes. Trust us to provide thorough, insightful reviews that pave the way for successful construction execution. </p>
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
                <strong> Compliance Verification: </strong>  We ensure all documents strictly adhere to ASTM E2018-15 standards, as well as local and international regulations.<br />
                <strong> Risk Mitigation: </strong>  Early identification of conflicts or missing information to prevent project delays and legal issues.<br />
                <strong> Quality Assurance:</strong> Our reviews confirm that all project specifications and requirements are met with precision.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Document Review we specialize in
                </h1>
                <Options title="Technical Review" content="Focuses on the engineering and technical aspects of construction plans and drawings." />
                <Options title="Contractual Review" content="Examines agreements and contracts for clarity and completeness." />
                <Options title="Code Compliance Review" content="Ensures all plans meet current building codes and safety standards." />
                <Options title="Bid Document Review" content="Analyzes bid documents to ensure they are thorough and free of ambiguities." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Cost Savings", "Enhanced Coordination", "Legal Protection", "Improved Project Timeline", "Higher Quality Outcomes"]} />
     
    
        </div>
      </div>
    </div>
  );
}
