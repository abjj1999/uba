import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";

const Service1 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Structural Integrity Reserve Study" 
            sub="Plan for the Future with Our Structural Integrity Reserve Studies for Long-Term Building Sustainability" />
            <Content />
            {/* <BlogPostCarousel /> */}
            
           
            <Reachout />
        </div>
     );
}
 
export default Service1;