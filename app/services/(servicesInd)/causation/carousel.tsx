import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const subServices = [
    {
      name: "Property Condition Assessment",
      desc: "",
    },
    {
      name: "Facility Condition Assessment",
      desc: "",
    },
    {
      name: "Structural Assessment",
      desc: "",
    },
    {
      name: "Seismic Assessment",
      desc: "",
    },
    {
      name: `MEP Solutions`,
      desc: "",
    }
  
  
  ]
export function Carousell() {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent className="-ml-1">
        {subServices.map(({name, desc}, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-gray-50 ">
                <CardContent className="flex aspect-video  items-center justify-center p-6">
                  <span className="text-2xl font-semibold text-center">{name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
