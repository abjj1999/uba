import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";

const Service1 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Budget Review" 
            sub="Secure Your Project's Financial Success with Our Thorough Budget Review Services" />
            <Content />
            {/* <BlogPostCarousel /> */}
            
           
            <Reachout />
        </div>
     );
}
 
export default Service1;