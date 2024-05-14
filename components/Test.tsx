import { HardHat, Leaf, Magnet } from "lucide-react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">74</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Welcome to our engineering and consulting firm</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At 74 degree, we are dedicated to driving innovation, problem-solving, and excellence in every project we undertake. With a passion for precision and a commitment to exceeding expectations, our team stands ready to collaborate with you to turn your ideas into reality. Whether you&apos;re seeking cutting-edge engineering solutions or expert consultancy services, you&apos;ve come to the right place. Let&apos;s embark on this journey together, shaping a future of ingenuity and success.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/images/building.jpg"
            alt=""
            width={1824}
            height={1080}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              From initial assessments through to the final stages of construction, our expert team utilizes the latest technologies and adheres to stringent standards to ensure precision and reliability. Whether it is conducting in-depth Property Condition Assessments, MEP systems assessment, or Environmental Site Assessments, our approach is always thorough, informed, and innovative.              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HardHat className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Expertise</strong> We cover a broad spectrum of engineering services including Environmental Site Assessments, property condition assessment, Energy Auditing, and Building Envelope Assessment.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Magnet className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Customized Solutions</strong> Each project is unique, and so are our solutions. We tailor our services to meet the specific needs and challenges of each client, from concept to completion.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Leaf className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Sustainability Focus</strong> With a strong emphasis on energy efficiency and sustainable practices, our designs and assessments aim to reduce environmental impact while enhancing building functionality.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Navigating the complexities of modern engineering requires a knowledgeable and proactive partner. At 74 Degree, we pride ourselves on being that partner for our clients, providing guidance, expertise, and support to ensure your projects not only meet but exceed expectations.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Commitment to Excellence</h2>
              <p className="mt-6">
                Our team of seasoned engineers and specialists is dedicated to upholding the highest standards of quality and integrity. We engage in continuous learning and improvement to stay at the forefront of the industry, ensuring our clients benefit from the most advanced and effective solutions.
                <br />
                <br />
                Partner with us today and experience engineering excellence that leads to real results and sustainable success. Let us build the future together with precision and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
