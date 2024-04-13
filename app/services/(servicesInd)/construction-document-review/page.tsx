import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";

const Service1 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Construction Document Review" sub="Streamline Your Projects with Precision: Expert Construction Document Review Meeting ASTM E2018-15 Standards" />
            <Content />
            {/* <BlogPostCarousel /> */}
            
           
            <Reachout />
        </div>
     );
}
 
export default Service1;