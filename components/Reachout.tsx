import { ChevronRight, Mail, Phone } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";

const Reachout = () => {
  return (
    <section className="bg-gary-800 dark:bg-gray-900">
      <div className="py-8 px-4  max-w-screen-xl lg:py-16 lg:px-6">
        <div className="text-center text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-300 dark:text-white">
            Reach out to us
          </h2>
          <p className="mb-4 font-medium text-gray-400 text-center">
            We are here to help you with your business needs. Our team is ready
            to answer your questions and provide the assistance you need. Get in
            touch with us today.
          </p>
            <Link href="tel:+13466312041" className="flex font-medium gap-4 text-gray-300 mb-4 items-center justify-center">
            <Phone /> +1 (346) 631-2041 
            </Link>
         
          <p className="mb-4 font-medium flex gap-4 text-gray-300 items-center justify-center">
            <Mail />
            <a
              href="mailto:"
              className="text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              info@74degree.com
            </a>
          </p>
          {/* <Separator /> */}
          <p className="my-4 font-semibold text-gray-300">
             Fill out our contact form and we will get back to you as soon as
            possible.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            <Button className="bg-gary-700 text-white" variant="outline">
              Contact Us
              <ChevronRight />
            </Button>
          </Link>
          <Link
            href="/request-quote"
            className="inline-flex mx-5 items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            <Button className=" text-gray-100" variant="destructive">
              Request a Quote
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reachout;
