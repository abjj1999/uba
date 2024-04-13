import { Building2, Cloud, LockIcon, Server } from "lucide-react";
import Options from "../components/options";
import { Carousell } from "../components/carousel";
import Image from "next/image";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600"></p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                MEP
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Our comprehensive MEP services ensure that your building is not only functional but also optimized for comfort and efficiency. We specialize in the detailed design, strategic implementation, and ongoing maintenance of essential building systems, including Mechanical, Electrical, and Plumbing. Our expert teams collaborate to create solutions tailored to each project's unique requirements. From sophisticated heating, ventilation, and air conditioning (HVAC) systems that enhance indoor air quality and climate control to reliable and safe electrical installations covering power distribution, lighting, and emergency systems, and efficient plumbing networks that manage water supply and waste with precision—our integrated services cover every aspect necessary to ensure your building operates at its best.
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
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg ">
              <p className="">
                <strong> Mechanical: </strong> Our HVAC solutions optimize indoor air quality and temperature, providing thermal comfort tailored to your needs. <br />
                <strong> Electrical: </strong> We ensure reliable and safe electrical systems, from power supply and distribution to sophisticated lighting setups. <br />
                <strong> Plumbing: </strong> Our experts design efficient water and waste systems, covering everything from supply and distribution to sanitation.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Type of MEP services we specialize in
                </h1>
                <Options title="HVAC" content="Regulates indoor temperature, humidity, and air quality." />
                <Options title="Fire Protection Systems" content="Includes sprinklers, fire suppression systems, and fire alarms." />
                <Options title="Power Distribution" content=" Involves the distribution of electrical power throughout the building." />
                <Options title="Lighting Systems" content=" Includes indoor, outdoor, emergency, and specialty lighting." />
                <Options title="Water Supply Systems" content="Manage the distribution and regulation of water for drinking, heating, and washing." />
                <Options title="Sanitary and Waste Management" content="Includes all piping and equipment for the removal of sewage and waste water." />
                <Options title="Stormwater Drainage" content="Systems designed to route rainwater away from the building to prevent flooding." />
                <Options title="Gas Piping Systems" content="Provides natural gas distribution for heating and cooking purposes." />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-10">

        <Carousell names={["Comfort and Quality of Life","Safety","Efficiency","Increased Property Value","Long-term Savings","Operational Reliability",]} />
      </div>
    </div>
  );
}
