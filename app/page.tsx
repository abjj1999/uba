import Card from "@/components/Card";
import Hero from "@/components/Hero";

import Testimonial from "@/components/Test";
import { Separator } from "@/components/ui/separator";
import { Metadata } from 'next'
import Form from "./contact/components/form";

export const metadata: Metadata = {
  title: 'Home | 74 Degree ',
  description: '74 Degree LLC is an engineering firm that specializes in PCA, ESA, MEP, and more. We are a team of professionals that are dedicated to providing the best service to our clients.',
}

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-around ">
      <Hero />

      <Separator />
      <Testimonial />
      <Separator />
      {/* <Trusted /> */}
      <div className="flex flex-col items-center">
      <Card title="" description="" image="/images/card.jpg" />

      </div>
      <Form />
      <Separator />

      {/* <NewLetter /> */}
      {/* contact us quick form */}

      



    </main>
  );
}
