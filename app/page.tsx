import Card from "@/components/Card";
import Hero from "@/components/Hero";
import NewLetter from "@/components/NewsLetter";
import Testimonial from "@/components/Test";
import Trusted from "@/components/Trusted";
// import TypingEffect from "@/components/TypingEffect";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PhoneForwarded } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-around ">
      <Hero />

      <Separator />
      <Testimonial />
      <Trusted />

      <div className="flex flex-col items-center">
      <Card title="" description="" image="/images/card.jpg" />

      </div>

      <NewLetter />

      



    </main>
  );
}
