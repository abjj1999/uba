import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="relative my-6 grid h-[40rem] w-full lg:max-w-[65rem] sm:max-w-[35rem] flex-col items-center justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/images/card.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
        Empowering Progress through Expertise in Construction, Energy Efficiency, and Eco-Friendly Practices
        </h2>
        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            Mohanad Al Hilfi - CEO
        </h5>
        <Link href="/about">
        <Button variant="outline" className="text-black">
            {/* that will go to about */}
            Read More  
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
