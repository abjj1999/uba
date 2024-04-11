import { Building2, Cloud, LockIcon, Server } from "lucide-react";
import Options from "./options";
import { Carousell } from "./carousel";
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
              Energy Modeling
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At 74 Degrees, we specialize in providing comprehensive Building
                Assessment and Engineering services, designed to meet the
                diverse needs of our clients in the construction and real estate
                sectors. Our service is tailored to ensure that every building,
                whether new or existing, meets the highest standards of safety,
                functionality, and sustainability.
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
             <strong> New Building Projects: </strong> Ensuring new constructions are designed and built to the highest standards. <br />
             <strong> Renovation and Retrofitting: </strong> Assessing and upgrading existing buildings for safety, efficiency, and compliance. <br />
             <strong> Real Estate Transactions: </strong> Providing detailed assessments for buyers, sellers, and investors in real estate.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl my-6 font-bold tracking-tight text-gray-900 sm:text-4xl">
                
              </h1>
      <Carousell />
      </div>
    </div>
  );
}
