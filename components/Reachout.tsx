import { ChevronRight, Mail, Phone, MapPinned } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";

const Reachout = () => {
  return (
    <section className="dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl px-4 lg:px-6 mx-auto">
        <div className=" text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className=" text-center mb-6 text-4xl tracking-tight font-bold text-gray-300 dark:text-white">
            Reach out to us
          </h2>
          <p className=" text-center mb-6 font-medium text-gray-400">
            We are here to help you with your business needs. Our team is ready
            to answer your questions and provide the assistance you need. Get in
            touch with us today.
          </p>

          {/* Contact Information */}
          <div className="text-center mb-8 space-y-4">
            <Link
              href="tel:+13466312041"
              className="flex items-center justify-center gap-4 text-gray-300 font-medium"
            >
              <Phone /> +1 (346) 631-2041
            </Link>

            <p className="text-center flex items-center justify-center gap-4 text-gray-300 font-medium">
              <Mail />
              <a
                href="mailto:info@74degree.com"
                className="hover:text-primary-800 dark:hover:text-primary-700"
              >
                info@74degree.com
              </a>
            </p>
          </div>

          {/* Addresses Section */}
          <div className="max-w-screen-xl w-full mx-auto px-8 lg:flex lg:justify-between lg:space-x-12">
        {/* Office 1 */}
        <div className="text-gray-300 border-l-4 border-indigo-500 pl-6 py-4 lg:w-1/2 bg-gray-800 rounded-lg shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-semibold text-white">
            <MapPinned /> Houston Office
          </h4>
          <p className="mt-2 font-semibold">
          10333 Harwin Dr. #220 <br />
          Houston, TX 77036
          </p>
        </div>

        {/* Office 2 */}
        <div className="text-gray-300 border-l-4 border-indigo-500 pl-6 py-4 lg:w-1/2 mt-8 lg:mt-0 bg-gray-800 rounded-lg shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-semibold text-white">
            <MapPinned /> Miami Office
          </h4>
          <p className="mt-2 font-semibold">
          14508 Lincoln Blvd #121 <br />
          Miami, FL 33176
          </p>
        </div>
        {/* Office 2 */}
        <div className="text-gray-300 border-l-4 border-indigo-500 pl-6 py-4 lg:w-1/2 mt-8 lg:mt-0 bg-gray-800 rounded-lg shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-semibold text-white">
            <MapPinned /> New York Office
          </h4>
          <p className="mt-2 font-semibold">
          1178 Broadway 3rd floor #1424 <br />
          New York, NY 10001
          </p>
        </div>
      </div>

          {/* Separator */}
          <div className="my-8">
            <Separator />
          </div>

          {/* Call to Action */}
          <p className="text-center mb-6 font-semibold text-gray-300">
            Fill out our contact form and we will get back to you as soon as
            possible.
          </p>

          <div className="flex justify-center space-x-4">
            <Link href="/contact">
              <Button className="bg-gray-700 outline-none text-white" variant="default">
                Contact Us
                <ChevronRight />
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button className="text-gray-100" variant="destructive">
                Request a Quote
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reachout;



