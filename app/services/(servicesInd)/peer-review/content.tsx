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
              Peer Review
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree,  our peer review services are an essential part of maintaining high standards and ensuring the accuracy of engineering and construction projects. Adhering to ASTM E2018-15 guidelines, we provide comprehensive reviews conducted by seasoned experts who evaluate the adequacy, accuracy, and compliance of project designs and documents. Our peer review process fosters collaboration and leverages collective expertise to identify potential issues early, ensuring that every project aspect is scrutinized for quality and efficacy. By integrating our peer reviews into your project lifecycle, you can mitigate risks, enhance safety, and improve overall project outcomes, leading to a smoother construction process and a more reliable final product.</p>
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
                <strong> Risk Reduction: </strong>  Early detection and correction of design errors or omissions before construction begins.<br />
                <strong> Quality Assurance: </strong>  Ensures high standards of engineering practice and compliance with all relevant codes and regulations.<br />
                <strong> Efficiency Improvement:</strong> Streamlines the project process by reducing the likelihood of costly delays and redesigns.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Peer Review we specialize in
                </h1>
                <Options title="Design Document Review" content="Examination of architectural and engineering drawings, specifications, and calculations." />
                <Options title="Code Compliance Review" content="Ensuring all designs meet local, state, and federal regulations and codes." />
                <Options title="Constructability Review" content="Evaluation of the project's design from a construction perspective, focusing on practical implementation." />
                <Options title="Value Engineering Review" content=" Assessing the project for opportunities to improve value without compromising quality or performance." />
                <Options title="Environmental Impact Review" content=" Analyzing potential environmental impacts and ensuring compliance with environmental standards." />
               </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Enhanced Safety", "Cost Savings", "Increased Credibility", "Improved Design Quality", "Higher Quality Outcomes", "Compliance Assurance"]} />
     
    
        </div>
      </div>
    </div>
  );
}
