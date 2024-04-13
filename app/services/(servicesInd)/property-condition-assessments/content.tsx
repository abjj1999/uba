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
                PCA
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At 74 Degrees, we specialize in providing comprehensive Property Condition Assessments (PCA) in accordance with the ASTM E2018-15 standard. Our assessments involve reviewing documentation, conducting detailed property surveys, interviewing stakeholders, and compiling findings into actionable reports.
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
                <strong> Documentation Review: </strong>  Evaluation of all pertinent property documents. <br />
                <strong> Walk-Through Survey: </strong>  Inspection of the property to identify any observable deficiencies. <br />
                <strong> Interviews: </strong> Discussions with property managers, owners, and tenants to gather additional insights. <br />
                <strong> Detailed Reporting:</strong> Delivery of a thorough Property Condition Report (PCR) that outlines deficiencies, suggests remedies, and estimates costs.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of PCA we specialize in
                </h1>
                <Options title="Baseline PCA" content="Follows ASTM E2018 guidelines to provide an overview of the building&rsquo;s condition, covering structural elements and major systems like HVAC and plumbing." />
                <Options title="Equity PCA" content="Offers a detailed analysis for high-value transactions or institutional investors, focusing on future liabilities and extensive property features." />
                <Options title="Triple Net Lease PCA" content="Specialized for properties under triple net leases, assessing long-term liabilities and maintenance responsibilities of the tenant." />
                <Options title="Limited Scope PCA" content="Focuses on specific aspects of the property, such as the roof or HVAC system, according to the client&rsquo;s needs." />
                <Options title="Repositioning PCA" content="Evaluates conditions and proposed changes for properties undergoing renovations, aiding in budgeting and planning" />
                <Options title="Pre-Lease or End-of-Lease PCA" content="Assesses the property&rsquo;s condition at the start or end of a lease to determine necessary repairs to meet lease terms." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Risk Identification","Informed Decision Making","Financial Planning","Negotiation Leverage","Asset Management","Due Diligence",
     
    ]}/>
        </div>
      </div>
    </div>
  );
}
