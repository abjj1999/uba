"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icon";

const Navbar = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <Link href="/"  className="flex items-center mt-0 mr-auto">
      <Icons.logo className="h-8 w-8"/>
      {/* <Image src="/images/74.png" alt="74 degree LLC" fill/> */}
      
    </Link >
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      {/* <Link href="/about">
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-lg   px-4 py-2 font-semibold text-black "
      >
        <FaUserCircle />
        <span>Learn More</span>
      </Button>
      </Link> */}
      <Link href="/request-quote">
      <Button
        variant="destructive"
        className="rounded-lg   px-4 py-2 font-semibold text-gray-100 "
      >
        Request a Quote
      </Button>
      </Link>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-4 shadow-xl lg:h-72 lg:w-[300px] lg:shadow-none xl:w-[400px]">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 ">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">About us</h2>
          <p className="mb-6 max-w-xs text-sm text-neutral-400">
          74 Degree, founded in 2022 in Houston, Texas, offers specialized engineering services including PCA, MEP systems, and ESA. Our experienced team delivers innovative, high-quality solutions across various sectors, exceeding client expectations through continuous improvement and expertise.
          </p>
        </div>
        <Link
          href="/about"
          className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
        >
          Learn more <FiArrowRight />
        </Link>
      </div>
      {/* <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <Link
          href="/about/features"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Features</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </Link>
        <Link
          href="/about/testimonials"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Testimonials</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </Link>

        <Link
          href="/about/blog"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Blog</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </Link>
      </div> */}
    </div>
  );
};Link
const Service = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[300px] lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-5">
          <Link href="/services/property-condition-assessments" className="block font-semibold text-sm hover:underline">
            PCA 
          </Link>
          <Link href="/services/environmental-site-assessment" className="block font-semibold text-sm hover:underline">
            ESA 
          </Link>
          <Link href="/services/mechanical-electrical-plumbing" className="block font-semibold text-sm hover:underline">
            MEP
          </Link>
        
        
          <Link href="/services/energy-auditing" className="block font-semibold text-sm hover:underline">
            Energy Auditing
          </Link>
          <Link href="/services/roof-assessment" className="block font-semibold text-sm hover:underline">
            Roof Assessment
          </Link>
          <Link href="/services/structural-assessment" className="block font-semibold text-sm hover:underline">
            Structural Assessment
          </Link>
          <Link href="/services/design" className="block font-semibold text-sm hover:underline">
            Design 
          </Link>
          <Link href="/services/construction-document-review" className="block font-semibold text-sm hover:underline">
            Construction Document Review
          </Link>
          <Link href="/services/construction-adminstration" className="block font-semibold text-sm hover:underline">
            Construction Adminstration
          </Link>
          
          </div>
       
      </div>
      <Link href="/contact" className={buttonVariants({
        variant: "destructive",
        className: "w-full text-center",
      })}>
        
        Reach out to us
      </Link>
    </div>
  );
};



const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? "fit-content" : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <FoldContent />
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Button variant="ghost" onClick={() => setOpen(true)} className="flex items-center text-3xl">
        <FiMenu />
      </Button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <Button variant="ghost" onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </Button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

const LINKS = [
  {
    text: "About us",
    href: "/about",
    component: AboutUsContent,
  },
  {
    text: "Services",
    href: "/services",
    component: Service,
  },

  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Contact",
    href: "/contact",
  }
];
