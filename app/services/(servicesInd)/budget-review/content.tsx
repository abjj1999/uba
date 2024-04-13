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
                Budget Review
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At 74 Degree, our budget review services are integral to ensuring financial accuracy and accountability in construction and development projects. Adhering to industry best practices, including those outlined by ASTM E2018-15, our team of financial experts meticulously examines your project budgets to identify any discrepancies, potential overruns, and areas for cost optimization. We analyze every component of the budget—from initial estimates to final allocations—to ensure financial resources are used efficiently and effectively. Our comprehensive approach not only safeguards your investments but also enhances project feasibility and profitability. Rely on us to provide detailed insights that help maintain your budget on track and aligned with your project goals.
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
                <strong> Accuracy Verification: </strong> Rigorous examination of budget entries to ensure accuracy and prevent costly errors.<br />
                <strong> Cost Optimization: </strong>  Identification of potential savings without compromising project quality or scope.<br />
                <strong> Financial Planning Support: </strong> Strategic advice on financial management to enhance overall project planning and execution.

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Budget Services we specialize in
                </h1>
                <Options title="Pre-Construction Budget Review" content="Analyzing the budget before project commencement to ensure it covers all necessary aspects."/>
                <Options title="Phase-by-Phase Review" content="Evaluating the budget at various stages of the project to ensure financial health throughout."/>
                <Options title="Change Order Review" content="Scrutinizing any changes to the budget due to modifications in project scope or unforeseen challenges."/>
                <Options title="Post-Completion Review" content="Assessing budget performance after project completion to identify learning points for future projects."/>
                <Options title="Compliance Review" content="Ensuring that the budget adheres to all regulatory and contractual obligations."/>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Cost Control", "Enhanced Decision Making", "Transparency", "Risk Reduction", "Project Efficiency"]} />


        </div>
      </div>
    </div>
  );
}
