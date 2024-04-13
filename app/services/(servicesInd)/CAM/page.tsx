import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";

const Service1 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Construction Adminstration"
             sub="Ensure Project Success: Comprehensive Construction Administration Services for Optimal Outcomes" />
            <Content />
            {/* <BlogPostCarousel /> */}
            
           
            <Reachout />
        </div>
     );
}
 
export default Service1;