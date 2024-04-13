import { Atom, BrickWall, Building, Building2, Hammer, HandCoins, HardHat, LandPlot, Leaf, Power, RotateCw, Scale, ShieldQuestion, Slice, Sprout, Users, Zap } from "lucide-react";
import { DrawerDemo } from "./servicesDrawer";
import Link from "next/link";
const services = [
    {
      name: 'Property Condition Assessments',
      role: 'PCA',
      Icon:  <Building2  size={24} />,
      link: "/services/pca",
      desc: ""
    },
    {
      name: 'Environmental Site Assessments',
      role: 'ESA',
      Icon:  <Leaf  size={24} />,
      link: "/services/ESA",
      desc: "Environmental Site Assessments (ESAs) are crucial evaluations conducted to identify potential or existing environmental contamination liabilities associated with a property. Typically executed in phases, ESAs start with a Phase I assessment, which includes a review of historical and current uses of the site to detect any signs of contamination. If necessary, a Phase II assessment follows, involving direct testing of soil, groundwater, and building materials to confirm contaminants. These assessments help stakeholders manage risks, ensure compliance with environmental regulations, and protect against liability. ESAs are vital for informed decision-making in real estate transactions, safeguarding investments, and preserving public health and environmental quality."
    },
    {
      name: 'Mechanical, Electrical, Plumbing',
      role: 'MEP',
      Icon:  <HardHat  size={24} />,
      link: "/services/MEP",
      desc: "MEP stands for Mechanical, Electrical, and Plumbing, essential systems in building design that ensure comfort and functionality. Mechanical aspects include HVAC systems that regulate air quality and temperature. Electrical systems cover lighting, power supply, and distribution, essential for building operations. Plumbing involves water and waste management, crucial for hygiene and accessibility. Together, these systems optimize building performance, enhance energy efficiency, and ensure compliance with safety and building regulations, making them critical for modern construction and sustainable architecture."
    },
    {
      name: 'Energy Auditing',
      role: 'EA',
      Icon:  <Power  size={24} />,
      link: "/services/energy-auditing",
      desc: "Energy auditing is a crucial process that evaluates a building's energy use to identify ways to improve efficiency and reduce costs. Through detailed inspections and analysis, energy auditors assess heating, cooling, lighting, and other systems to pinpoint inefficiencies and recommend solutions. The benefits of energy auditing include significant cost savings, enhanced building performance, reduced environmental impact, and improved occupant comfort. By implementing suggested measures, buildings can achieve lower energy consumption, aligning with sustainability goals and regulatory compliance."
    },
    {
      name: 'Roof Assessments',
      role: 'RA',
      Icon:  <Building  size={24} />,
      link: "/services/roof-assessment",
      desc:"Roof assessment is a critical process that evaluates the condition of a building's roof to ensure its integrity and functionality. This assessment identifies potential or existing issues such as leaks, damage, and structural weaknesses. Experts conduct visual inspections, use infrared thermography, and perform other tests to assess materials and installation quality. The outcome helps in planning maintenance, extending roof lifespan, and preventing costly future repairs. Effective roof assessments are essential for safeguarding property and optimizing building performance."
    },
    {
      name: 'Structural Assessments',
      role: 'SA',
      Icon:  <Building2  size={24} />,
      link: "/services/structural-assessment",
      desc:"Structural assessment involves a detailed evaluation of a building's foundation, beams, columns, and other load-bearing components to ensure stability and safety. This process identifies potential weaknesses, degradation, or compliance issues with construction standards. Regular assessments help prevent structural failures, enhance building longevity, and ensure occupant safety. By pinpointing necessary repairs and maintenance, structural assessments play a crucial role in risk management, cost control, and maintaining the structural integrity of both new and existing structures."
    },
    {
      name: 'Design',
      role: 'DES',
      Icon:  <Slice  size={24} />,
      link: "/services/design",
      desc:"Design encompasses the art and science of shaping environments to create functional and aesthetically pleasing spaces. It involves a meticulous process that integrates architecture, interior design, landscape architecture, and urban planning to meet user needs effectively. Effective design enhances usability, accessibility, and sustainability, considering factors like ergonomics, environmental impact, and cultural context. In construction and architecture, design not only defines the visual and tactile aspects of a space but also significantly impacts its practicality and long-term viability."
    },
    {
      name: 'Construction Documents Review',
      role: 'CDR',
      Icon:  <BrickWall  size={24} />,
      link: "/services/CDR",
      desc:"Construction Document Review is a critical process in the construction industry, ensuring that all plans, specifications, and contractual documents are accurate, complete, and executable. This review helps identify discrepancies, conflicts, or missing information that could lead to costly delays or construction errors. By meticulously examining these documents, stakeholders can align on expectations, reduce the risk of legal disputes, and ensure compliance with building codes and regulations. Ultimately, this process safeguards the project's integrity and facilitates a smoother construction phase."
    },
    {
      name: 'Construction Administration',
      role: 'CA',
      Icon:  <Hammer  size={24} />,
      link: "/services/CAM",
      desc:"Construction Administration involves overseeing the daily operations of a construction project to ensure it adheres to the plan, budget, and timeline. This process includes managing contracts, coordinating between stakeholders, handling documentation, and ensuring compliance with building codes and regulations. Effective construction administration helps mitigate risks, solve problems on site, and maintain quality control, leading to the successful completion of projects. It is crucial for streamlining project delivery and ensuring that all aspects of the project meet the required standards and client expectations."
    },
    {
      name: 'Energy Modeling',
      role: 'EM',
      Icon:  <Zap  size={24} />,
      link: "/services/energy-modeling",
      desc:"Energy modeling is a powerful tool used in building design to simulate a building's energy consumption. By creating detailed models of energy use, architects and engineers can predict and optimize the performance of HVAC systems, lighting, and other energy-related features. This process helps in reducing energy costs and environmental impact, enhancing building sustainability. Energy modeling is essential for achieving compliance with green building standards and for making informed decisions on energy efficiency measures and technologies."
    },
    {
      name: 'Peer Review',
      role: 'PR',
      Icon:  <Users  size={24} />,
      link: "/services/peer-review",
      desc:"Peer review is a critical process in academic and professional fields, ensuring the integrity and quality of work before publication or implementation. It involves experts evaluating the work of their peers to verify accuracy, relevance, and originality. This scrutiny helps prevent the dissemination of flawed research, enhances the credibility of findings, and promotes continuous improvement in various disciplines. In construction, peer review assesses project designs, compliance with standards, and overall project feasibility, safeguarding against potential failures and ensuring project success."
    },
    {
      name: 'Building Envelope Assessment',
      role: 'BEA',
      Icon:  <Users  size={24} />,
      link: "/services/BEA",
      desc:"Building Envelope Assessment is a crucial evaluation of a building's exterior elements—walls, roofs, windows, and foundations—to ensure they effectively protect against environmental factors. This assessment identifies weaknesses in the structure that may lead to energy loss, moisture intrusion, and reduced indoor comfort. By diagnosing issues such as insulation failures and air leaks, the assessment helps in enhancing building sustainability, improving energy efficiency, and ensuring long-term durability. It's essential for maintaining optimal building performance and occupant comfort."
    },
    {
      name: 'Litigation',
      role: 'LIT',
      Icon:  <Scale  size={24} />,
      link: "/services/litigation",
      desc:"Litigation according to ASTM E2018 involves legal processes tied to property condition assessments, particularly when discrepancies arise after a transaction. This standard guides how assessments should be performed, ensuring thorough documentation and inspection of a property's physical condition. When parties dispute over undisclosed or overlooked defects, ASTM E2018 standards help define the due diligence required by the assessor. Adhering to these standards can mitigate risks, provide clarity in legal disputes, and establish a framework for resolving conflicts related to property conditions."
    },
    {
      name: 'Causation',
      role: 'CAU',
      Icon:  <ShieldQuestion  size={24} />,
      link: "/services/causation",
      desc:"Causation analysis according to ASTM E2018-15 involves a thorough investigation to identify the underlying reasons for deficiencies or failures in property conditions. This standard guides evaluators in systematically examining building components to trace back the root causes of observed issues. The process is crucial for property condition assessments, helping to pinpoint specific causes of defects, ensuring that remedial actions are accurately targeted, and preventing future occurrences. Causation analysis is vital for maintaining property integrity and value, providing a clear basis for repair strategies and legal documentation."
    },
    {
      name: 'Budget Review',
      role: 'BR',
      Icon:  <HandCoins  size={24} />,
      link: "/services/budget-review",
      desc:"A Budget Review according to ASTM E2018 standards involves a meticulous evaluation of a project’s budget to ensure accuracy, compliance, and efficiency in financial planning. This review scrutinizes estimated costs, funding allocations, and expenditure tracking against ASTM guidelines, aiming to identify discrepancies and opportunities for cost optimization. It helps stakeholders make informed decisions, prevent cost overruns, and enhance project outcomes. The process supports strategic planning and risk management, aligning project execution with financial forecasts and ensuring adherence to industry standards."
    },
    {
      name: 'Annual Inspection',
      role: 'AI',
      Icon:  <RotateCw  size={24} />,
      link: "/services/annual-inspection",
      desc:"Annual inspections, as outlined in ASTM E2018, are crucial for maintaining building integrity and safety. These inspections involve a systematic review of a property’s structural, mechanical, and electrical systems to identify any deteriorations or defects that may compromise building performance or safety. Conducted by qualified professionals, these inspections help ensure compliance with building codes and industry standards, facilitating proactive maintenance strategies to mitigate risks, prevent costly repairs, and extend the lifespan of property assets, thus protecting investment and ensuring operational continuity."
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
            {services.map(({name, Icon, role, link, desc}) => (
              <li className="border rounded-lg p-2" key={name}>

                <div className="flex items-center justify-between gap-x-6">
                  <Link href={link} className="flex items-center gap-x-5">
                  {Icon}
                  <div>
                    <h3 className="text-sm font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
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
  