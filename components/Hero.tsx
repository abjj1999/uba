import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Hotel, PhoneCall, PhoneForwarded } from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-slate-800">
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Shaping Tomorrow with 

            <br />
            Sustainable Building & Environmental Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
                      Building a Greener Future with Expertise in Sustainable Construction, Energy Efficiency, and Environmental Innovation. Join us in our journey towards a more sustainable world.

          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="#"
              className=" text-sm font-semibold text-black "
            >
              <Button className="text-black" variant="outline">Get started</Button>
              
            </Link>
            <Link
              href="#"
              className=" text-sm font-semibold text-black "
            >
              <Button className="text-white gap-2" variant="ghost">
                Learn more <ArrowRight className="w-4 h-4" />
              </Button>
              
            </Link>
            
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="/images/hero_pic.jpg"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  </div>

  );
};

export default Hero;

