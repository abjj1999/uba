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
              Causation
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, our causation analysis services provide critical insights into the underlying causes of defects, failures, and disputes in construction and engineering projects. Using methodologies aligned with ASTM E2018-15 standards, our expert team conducts thorough investigations to determine the reasons behind structural failures, material deficiencies, or non-compliance issues. We employ a systematic approach to collect, analyze, and interpret data, ensuring every analysis is comprehensive and conclusive. Our findings help clients understand the complex interactions and factors leading to problems, facilitating informed decision-making and effective resolution strategies. Trust our causation analysis to deliver clarity and precision, helping you mitigate risks and ensure project success.
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
                <strong> Detailed Investigations: </strong> We conduct exhaustive studies to trace back and identify the exact sources of issues.<br />
                <strong> Standards Compliance: </strong>  Our analysis strictly adheres to industry standards, including ASTM E2018-15, for consistent and reliable results.<br />
                <strong> Expert Interpretation: </strong> Our specialists interpret complex data to provide clear, actionable insights.

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Litigation Services we specialize in
                </h1>
                <Options title="Structural Failures" content="Analyzing reasons behind collapses or structural damages."  />
                <Options title="Material Failures" content=" Determining why materials fail to perform as expected, including premature degradation."  />
                <Options title="Design Flaws" content="Identifying oversights or errors in design that lead to functional inadequacies."  />
                <Options title="Construction Defects" content="Investigating deviations from specifications or poor workmanship."  />
                <Options title="Environmental Impact Failures" content="Examining how environmental factors contribute to project issues."  />
               </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Enhanced Safety","Risk Mitigation", "Improved Project Outcomes","Cost Efficiency","Stakeholder Confidence"]} />
     
    
        </div>
      </div>
    </div>
  );
}
