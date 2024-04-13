import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";
import { Carousell } from "../components/carousel";

const Service2 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Mechanical, Electrical, and Plumbing" sub="Enhancing Comfort and Efficiency: Discover Our Comprehensive MEP Services for Modern Buildings" />

            <Content />
            {/* <BlogPostCarousel /> */}
           
            <Reachout />
        </div>
     );
}
 
export default Service2;