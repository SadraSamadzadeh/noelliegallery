"use client"
import React from 'react' 
import { Bar, BarChart,  CartesianGrid, XAxis  } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"
export default function MainBody() {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
      ]
      const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
      } satisfies ChartConfig
      
  return (
    <div className='w-full border rounded-xl border-gray-400  bg-gray-800 p-10 flex'>
        <div id="#left-container" className='flex flex-col items-center justify-between w-1/2 gap-10'>
            <div className='flex items-center justify-between gap-4 w-full'>
                <div className='bg-gray-600 rounded-lg w-32 h-10'>

                </div>
                <div className='bg-gray-600 rounded-lg w-32 h-10'>

                </div>
                <div className='bg-gray-600 rounded-lg w-32 h-10'>

                </div>
            </div>
            <div id="#chart-container" className='w-full'>
                {/* <div id="#chart" className="h-[250px] bg-gray-600 rounded-lg"></div> */}
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
                </ChartContainer>
            </div>
            <div id="#lower-sub-container" className='w-full'>
                <div className='bg-gray-600 rounded-lg h-[100px]'></div>
            </div>
        </div>
        <div id="#right-container" className='flex flex-col items-center justify-between w-1/2'> 
            <div>
                    
            </div>
            <div>
                    
            </div>
        </div>
    </div>
  )
}
