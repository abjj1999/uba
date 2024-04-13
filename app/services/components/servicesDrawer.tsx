import * as React from "react";
import { Minus, MoreVertical, Plus } from "lucide-react";
// import { Bar, BarChart, ResponsiveContainer } from "recharts"
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";


interface DrawerProps {
  desc: String;
  service: String;
  link: any;
  role: String;
}

export const  DrawerDemo: React.FC<DrawerProps> =({desc, service, link, role}) => {
//   const [goal, setGoal] = React.useState(350);

  

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">
            <MoreVertical size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle>{service}</DrawerTitle>
            <DrawerDescription>{role}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-1">
            <div className="space-x-5">
              <p className="text-lg font-medium ">
                {desc}
              </p>
            </div>
          </div>
          <DrawerFooter>
            <Link className="" href={link}>
              <Button className="w-full" variant="default">Learn More</Button>
            </Link>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
