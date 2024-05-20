"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Slider = () => {
  return (
    <div className="px-4 py-12 bg-gray-100">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-black text-3xl font-semibold">
          Projects 
        </h3>
        <Question title="Residential" defaultOpen>
          <p className="text-lg">
          Our residential projects include single-family homes, multi-family units, and luxury condominiums, each designed with a focus on sustainability, comfort, and modern living. These projects showcase our ability to create spaces that enhance the quality of life for residents while incorporating energy-efficient systems and sustainable materials.
          </p>
        </Question>
        <Question title="Commercial">
          <p className="text-lg">
          The commercial sector, we have completed a variety of projects such as office buildings, retail centers, and mixed-use developments. These projects often feature innovative architectural designs and advanced building technologies that cater to the dynamic needs of businesses and consumers. Our commercial projects are designed to be functional, aesthetically pleasing, and adaptable to future growth.
          </p>
        </Question>
        <Question title="Industrial">
          <p className="text-lg">
          Our industrial projects span manufacturing plants, warehouses, and distribution centers. These large-scale facilities are engineered to optimize operational efficiency, safety, and productivity. We integrate the latest technologies in automation, energy management, and environmental controls to meet the rigorous demands of industrial operations.
          </p>
        </Question>
        <Question title="Infrastructure">
          <p className="text-lg">
          Infrastructure projects form another significant part of our portfolio, including roads, bridges, and public utilities. These projects are essential to community connectivity and development, and we approach them with a commitment to durability, safety, and minimal environmental impact.
          </p>
        </Question>
        <Question title="Others...">
          <p className="text-lg">
Additionally, we have experience in educational and healthcare facilities, such as schools, universities, hospitals, and clinics. These projects are designed to support the specific needs of learning and healthcare environments, prioritizing functionality, accessibility, and user well-being.          </p>
        </Question>

        <p className="text-lg py-4 text-center hover:from-black hover:to-gray-700">
        Regardless of the project type or scale, we maintain a consistent focus on quality, innovation, and client satisfaction. Our ability to deliver successful outcomes across a broad spectrum of building types and scales is a testament to our comprehensive expertise and dedication to engineering excellence.
        </p>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "black",
            },
            closed: {
              color: "black",
            },
          }}
          className="bg-gradient-to-r  bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "black",
            },
            closed: {
              rotate: "0deg",
              color: "#000",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default Slider;