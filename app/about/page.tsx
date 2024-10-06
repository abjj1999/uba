import Reachout from "@/components/Reachout";
import About1 from "./components/header";
import Team from "./components/team";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import Form from "../contact/components/form";
export const metadata: Metadata = {
    title: 'About | 74 Degree ',
    description: 'About 74 Degree',
  }

const AboutPage = () => {
    return ( 
        <div className="">
            <About1 />
            {/* <Team /> */}
            <Form />            
            <Reachout />
        </div>
     );
}
 
export default AboutPage;