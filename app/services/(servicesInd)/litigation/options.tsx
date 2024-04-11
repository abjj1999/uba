"use client"

import * as React from "react"
// import { CaretSortIcon } from "@radix-ui/react-icons"
import { Plus, SortAsc } from "lucide-react";

interface OptionsProps {
    title: string,
    content: string
}

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

 const Options:React.FC<OptionsProps>= ({title, content}) =>{
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[450px] space-y-2 "
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className=" font-semibold text-black text-lg">
            {title}
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <Plus className="h-6 w-6 border border-gray-800  rounded-full text-red-500" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-semibold text-md shadow-sm">
            {content}
        </div>
        
      </CollapsibleContent>
    </Collapsible>
  )
}

export default Options