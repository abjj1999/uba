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
              Litigation
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, we specialize in providing expert litigation support services tailored to the construction and building industry. Leveraging our deep understanding of ASTM E2018-15 standards, we assist clients in navigating the complexities of construction-related legal challenges. Our team of experienced professionals offers detailed analysis and testimony to support cases involving construction defects, contract disputes, and compliance issues. We thoroughly investigate each scenario to provide clear, comprehensive evidence and expert opinions that uphold the highest standards of accuracy and reliability. Whether you are facing a dispute over construction practices, material performance, or project management, we deliver the insights and support necessary to achieve favorable legal outcomes.</p>
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
                <strong> Expert Testimony: </strong>  Our seasoned experts provide credible, authoritative testimonies based on their deep industry knowledge and adherence to ASTM standards.<br />
                <strong> Document Analysis: </strong>  We meticulously review project documentation against ASTM E2018-15 standards to uncover any deviations or non-compliance. <br />
                <strong> Dispute Resolution Support: </strong> Offering strategic advice to help resolve disputes effectively before they escalate to higher courts.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Litigation Services we specialize in
                </h1>
                <Options title="Construction Defect Litigation" content="Handling cases involving flaws in design, materials, or workmanship that violate ASTM standards."  />
                <Options title="Contract Disputes" content="Resolving disagreements over the terms of contracts, including scope of work, payment clauses, and deliverables."  />
                <Options title="Compliance Litigation" content=" Addressing issues related to non-compliance with local building codes, ASTM standards, or other regulatory requirements."  />
                <Options title="Property Damage" content="Litigation support for cases involving damage caused during construction or due to faulty construction practices."  />
                <Options title="Personal Injury Claims" content="Supporting claims related to injuries occurring on construction sites due to negligence or unsafe practices."  />
               </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Strategic Advantage","Risk Mitigation", "Enhanced Credibility","Cost Efficiency","Resolution Speed"]} />
     
    
        </div>
      </div>
    </div>
  );
}
