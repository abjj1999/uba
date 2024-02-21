import { Atom, Building, Building2, HardHat, LandPlot, Leaf, Sprout } from "lucide-react";
import { DrawerDemo } from "./servicesDrawer";
import Link from "next/link";
const people = [
    // More people...
    
    {
      name: 'Building Assessments & Engineering',
      role: 'BCA',
      Icon:  <Building2  size={24} />,
      link: "/services/bca",
      desc: "At 74 Degrees, we provide expert Building Assessment and Engineering services to ensure the structural integrity and efficiency of your buildings. Our skilled team conducts detailed evaluations, covering everything from foundational strength to compliance with building codes. We offer practical solutions for structural optimization and energy efficiency, catering to new constructions, renovations, or property assessments. Trust us to deliver insights and innovations that maintain safety and enhance building performance."
    },
    {
      name: 'Construction Risk Management',
      role: 'CRM',
      Icon: <HardHat size={24} />,
      link: "/services/service1",
      desc: "At 74 Degrees, our Construction Risk Management service is tailored to safeguard your projects from unforeseen challenges and liabilities. We specialize in identifying, evaluating, and mitigating risks associated with construction processes. Our approach encompasses thorough analysis of project plans, compliance with regulations, and proactive strategies to manage financial, safety, and operational risks. With our expertise, we ensure your construction projects are managed efficiently, safely, and in alignment with your objectives, minimizing potential issues and maximizing success."
    },
    {
      name: 'Energy, Sustainability & Resilience',
      role: 'ESR',
      Icon: <Atom size={24} />,
      link: "/services/service1",
      desc: "At 74 Degrees, our Energy, Sustainability & Resilience service is dedicated to helping clients achieve eco-friendly and energy-efficient building solutions. We focus on reducing environmental impact while enhancing building resilience against climate-related challenges. Our team employs innovative strategies in energy management, sustainable design, and resource optimization to ensure your projects are both environmentally responsible and economically viable. Embrace the future of building with our commitment to sustainability and resilience."

    },
    {
      name: 'Environmental Services',
      role: 'ES',
      Icon: <Leaf size={24} />,
      link: "/services/service1",
      desc: "At 74 Degrees, our Environmental Services are dedicated to promoting sustainability and ecological responsibility in every project. Our team of experts specializes in environmental assessments, impact analysis, and compliance consulting. We help clients navigate environmental regulations, ensuring their projects not only meet legal standards but also contribute positively to the environment. Whether it's conducting thorough environmental impact studies, developing waste management strategies, or providing guidance on renewable energy integration, our services are designed to support eco-friendly and sustainable practices in all aspects of your business operations."
    },
    {
      name: 'Environmental Health & Safety',
      role: 'EHS',
      Icon: <Sprout size={24} />,
      link: "/services/service1",
      desc: "74 Degrees is dedicated to promoting a safer, healthier, and more sustainable environment through our Environmental Health & Safety services. We specialize in identifying and mitigating environmental risks, ensuring compliance with health and safety regulations, and implementing eco-friendly practices. Our team provides expert guidance on workplace safety, environmental impact assessments, and sustainable operations, helping your business protect both the environment and the well-being of your workforce."
    },
    {
      name: 'Land Surveying & Zoning',
      role: 'LSZ',
      Icon: <LandPlot size={24} />,
      link: "/services/service1",
      desc: "At 74 Degrees, our Land Surveying & Zoning services are tailored to provide precise and reliable information for your land development projects. Our skilled surveyors use state-of-the-art technology to accurately map and analyze land properties, ensuring compliance with local zoning laws and regulations. Whether you're planning construction, real estate development, or land acquisition, our expertise in boundary determination, topographic surveys, and site planning helps streamline your project with clear, actionable insights. Trust us to lay the groundwork for your success."
    },
    {
      name: 'Site Civil Engineering',
      role: 'SCE',
      Icon: <Building size={24} />,
      link: "/services/service1",
      desc: "At 74 Degrees, our Site Civil Engineering service focuses on developing and optimizing land for your construction projects. Our team of experienced civil engineers provides comprehensive solutions for site planning, land development, and infrastructure design. We handle everything from topographical surveys and environmental assessments to the design of roadways, drainage systems, and utilities. Our goal is to create sustainable, efficient, and cost-effective designs that meet your project needs while adhering to regulatory standards. Partner with us for expert guidance in transforming your site into a foundation for success."
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
                  {/* <img className="h-16 w-16 rounded-full" src={imageUrl} alt="" /> */}
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
  