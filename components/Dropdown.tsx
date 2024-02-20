// "use client";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
    header: string;
    items: string[];
}

const Dropdown:React.FC<DropdownProps> = ({
    header,
    items
}) => {

    return (
        <HoverCard>
  <HoverCardTrigger className="flex items-center">{header} <ChevronDown size={24} />  </HoverCardTrigger>
  <HoverCardContent>
    {
        items.map((item, index) => (
            <div key={index}>
            <Link href="#" key={index} className="block py-2 px-4 text-gray-500 hover:text-blue-700 text-xl font-serif font-medium  lg:mx-2">{item}</Link>
            <Separator />
            
            </div>
        ))
    }
  </HoverCardContent>
</HoverCard>

    )
}


export default Dropdown;