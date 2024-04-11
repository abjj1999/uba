import { Atom, Building, Building2, HardHat, LandPlot, Leaf, Sprout } from "lucide-react";
import { DrawerDemo } from "./servicesDrawer";
import Link from "next/link";
const people = [
    // More people...
    
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Puilding Assessments & Engineering',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/Pca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    
    
    
    
   
  ]
  
  export default function ServicesList() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Offer</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
            
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-10 xl:col-span-2">
            {people.map(({name, Icon, role, link, desc}) => (
              <li className="border rounded-lg p-2" key={name}>

                <div className="flex items-center justify-between gap-x-6">
                  <Link href={link} className="flex items-center gap-x-5">
                  {Icon}
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{role}</p>
                  </div>
                  </Link>
                    <DrawerDemo desc={desc} service={name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  