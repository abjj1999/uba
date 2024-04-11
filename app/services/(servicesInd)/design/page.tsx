import Reachout from "@/components/Reachout";
import SHeader from "../components/serviceHeaders";
import Content from "./content";
import { Carousell } from "./carousel";

const Service2 = () => {
    return ( 
        <div className="py-4">
            <SHeader header="Design" sub="Ensuring Strength, Safety, and Sophistication in Structures: 74's Building Assessments & Engineering." />

            <Content />
            {/* <BlogPostCarousel /> */}
           
            <Reachout />
        </div>
     );
}
 
export default Service2;