"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react";

const AdvancedNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow lg:rounded-full dark:bg-gray-800  ">
      <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center">
          <Link href="#">
            UBA
          </Link>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={toggleMobileMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              <Menu  className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}/>
                
              <X className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}/>
                
            </button>
          </div>
        </div>

        {/* Responsive Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          {/* Menu Items */}
          <div className="flex flex-col lg:flex-row lg:mx-10">
              <Link href="/services" className="block py-2 px-4 text-gray-800 hover:text-blue-700 text-xl font-sans font-medium  lg:mx-2">Features</Link>
              <Link href="/services" className="block py-2 px-4 text-gray-800 hover:text-blue-700 text-xl font-sans font-medium  lg:mx-2">
                <Dropdown header="Services" items={["service 1", "service 2", "service 3", "service 4"]} />
              </Link>
              <Link href="/about" className="block py-2 px-4 text-gray-800 hover:text-blue-700 text-xl font-sans font-medium  lg:mx-2">
                <Dropdown header="About" items={["service 1", "service 2", "service 3", "service 4"]} />
              </Link>
              
            </div>
          {/* ... */}

          {/* Social Media Icons */}
          <div className="flex mt-4 lg:mt-0 lg:ml-auto">
          {/* buttons */}
          <Button className="mx-2" variant="outline">Get Started</Button>
          <Link href="/contact">
            <Button className="mx-2" variant="destructive">Contact Us</Button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdvancedNavbar;
