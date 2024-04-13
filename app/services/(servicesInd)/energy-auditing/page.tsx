import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";

const Service2 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Energy Auditing" sub="Drive Sustainable Performance with Our Comprehensive Energy Audits Designed to Optimize Your Operations" />

            <Content />
           
            <Reachout />
        </div>
     );
}
 
export default Service2;