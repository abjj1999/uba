import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";

const Service1 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Litigation" 
            sub="Navigate Complex Legal Waters with Expert Litigation Support for Construction and Building Disputes" />
            <Content />
            {/* <BlogPostCarousel /> */}
            
           
            <Reachout />
        </div>
     );
}
 
export default Service1;