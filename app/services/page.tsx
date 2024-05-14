import Reachout from "@/components/Reachout";
import Header from "./components/Header";
import ServicesList from "./components/servicesList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Services | 74 Degree ',
    description: 'What we offer at 74 degree LLC',
  }

const ServicesPage = () => {
    return ( 
        <div>
            <Header />
            <ServicesList />
            <Reachout />
        </div>
     );
}
 
export default ServicesPage;