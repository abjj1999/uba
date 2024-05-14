import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              {/* <Image
                src=""
                className="h-8 me-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-2xl text-gray-100 font-semibold whitespace-nowrap dark:text-white">
                74 Degree
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-200 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:underline"
                  >
                    Link 2
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-200 dark:text-gray-400 font-medium">
                <li className="mb-4">
                 <Link href="https://www.linkedin.com/company/74-degree/">
                  <p className="hover:underline">
                    LinkedIn
                  </p>
                 </Link>
                </li>
                {/* <li className="mb-4">
                <Link href="">
                  <p className="hover:underline">
                    Twitter
                  </p>
                 </Link>
                </li>
                <li>
                <Link href="">
                  <p className="hover:underline">
                    Facebook
                  </p>
                 </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-200 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="" className="hover:underline">
              74 Degree™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center mt-4 sm:justify-center sm:mt-0">
            

            {/* <Link
              href="#"
              className="text-gray-200 hover:text-gray-100 dark:hover:text-white"
            >
              <FaFacebookF className="w-4 h-4" />
            </Link>
            
            <Link
              href="#"
              className="text-gray-200 hover:text-gray-100 dark:hover:text-white ms-5"
            >
              <FaXTwitter className="w-4 h-4" />
            </Link> */}

            <Link
              href="https://www.linkedin.com/company/74-degree/"
              className="text-gray-200 hover:text-gray-100 dark:hover:text-white ms-5"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
