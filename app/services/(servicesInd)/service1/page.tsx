import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";

const Service1 = () => {
    return ( 
        <div className="m-1">
            <SHeader header="Service 1" desc="loram" sub="loram" />
            <Content />
            <Reachout />
        </div>
     );
}
 
export default Service1;