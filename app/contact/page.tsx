import { Metadata } from "next";
import Form from "./components/form";
import CHeader from "./components/header";
import Addresses from "@/components/address";



export const metadata: Metadata = {
    title: 'Contact Us | 74 Degree ',
    description: 'Contact 74 Degree for any queries or feedback.',
  }

const ContactPage = () => {
    return ( 
        <div className="">
            <CHeader />
            <Form />
            <Addresses />
        </div>
     );
}
 
export default ContactPage;