import Reachout from "@/components/Reachout";
import Header from "./components/Header";
import ServicesList from "./components/servicesList";

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