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
              Structural Integrity Reserve Study
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At 74 Degree, we provide Structural Integrity Reserve Studies that serve as essential tools for property managers and owners to plan for future repairs and maintenance. Our studies are meticulously aligned with industry standards, including ASTM E2018-15, ensuring comprehensive assessments of your building&apos;s structural elements. We evaluate the condition of critical infrastructure components such as foundations, beams, columns, and external walls to forecast potential future repair and replacement needs. This proactive approach not only helps in maintaining structural integrity but also optimizes financial planning by predicting future expenditures. Trust our experts to deliver detailed, actionable reports that enhance your building&apos;s longevity and operational efficiency.
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
                <strong> Detailed Condition Assessment: </strong> We meticulously inspect structural elements to determine their current state and anticipated lifecycle.<br />
                <strong> Financial Forecasting: </strong>   Our studies provide detailed cost estimates for necessary future repairs or replacements.<br />
                <strong> Customized Planning: </strong> Tailored strategies to meet specific building needs and budget constraints.

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Types of Structural Elements We Assess
                </h1>
                <Options title="Full Structural Survey" content="Comprehensive analysis of all structural aspects of the building." />
                <Options title="Component-Specific Study" content="Focused studies on particular structural components like roofs or foundations." />
                <Options title="Periodic Review" content="Regular updates to the reserve study to reflect changes in building condition or usage." />
                <Options title="Emergency Preparedness Study" content="Special evaluations to prepare for potential damage from environmental or operational hazards." />
                <Options title="Compliance Upgrade Study" content="Reviews aimed at ensuring the structure meets updated building codes and standards." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Long-Term Cost Savings", "Enhanced Building Safety", "Improved Budgeting Accuracy", "Increased Property Value", "Regulatory Compliance"]} />


        </div>
      </div>
    </div>
  );
}
