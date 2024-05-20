import { Metadata } from "next";
import Form from "./components/form";
import CHeader from "./components/header";



export const metadata: Metadata = {
    title: 'Contact Us | 74 Degree ',
    description: 'Contact 74 Degree for any queries or feedback.',
  }

const ContactPage = () => {
    return ( 
        <div className="">
            <CHeader />
            <Form />
        </div>
     );
}
 
export default ContactPage;