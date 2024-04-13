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
              Energy Modeling
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 Degree, we leverage cutting-edge energy modeling techniques to optimize the energy efficiency and performance of your projects. Our services, structured according to ASTM E2018-15 standards, involve detailed simulations that predict the energy use and environmental impact of buildings at various stages of their design and operation. By integrating these models early in the design process, we enable architects and developers to make informed decisions that enhance building sustainability and occupant comfort. Our energy models provide precise data, helping to refine building systems and envelope designs to achieve optimal energy performance and compliance with environmental standards. </p>
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
                <strong> Accurate Performance Prediction: </strong>  Our models accurately predict the energy consumption and HVAC loads, assisting in designing more efficient systems.<br />
                <strong> Iterative Optimization: </strong>  We use modeling to iteratively test and improve building designs to maximize energy efficiency.<br />
                <strong> Regulatory Compliance:</strong>  Ensuring that designs meet or exceed local energy codes and environmental regulations through detailed analysis.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <Separator />
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Type of Energy Modeling we specialize in
                </h1>
                <Options title="Whole Building Simulation" content="Comprehensive modeling that considers all aspects of building performance."/>
                <Options title="HVAC System Modeling" content="Focused simulations on heating, ventilation, and air conditioning systems to optimize their efficiency."/>
                <Options title="Daylighting Modeling" content="Analyzing natural light within spaces to reduce reliance on artificial lighting."/>
                <Options title="Renewable Energy Simulation" content="Evaluating the effectiveness and impact of incorporating renewable energy sources like solar and wind."/>
                <Options title="Thermal Comfort Modeling" content="Ensuring that the building's climate controls meet the comfort requirements of occupants throughout different seasons."/>
                             
               </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">


        <div className="mt-10">

          <Carousell names={["Enhanced Energy Efficiency", "Cost Savings", "Improved Building Performance", "Sustainability", "Higher Quality Outcomes", "Marketability"]} />
     
    
        </div>
      </div>
    </div>
  );
}
