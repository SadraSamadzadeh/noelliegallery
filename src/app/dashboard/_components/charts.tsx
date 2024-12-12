"use client"
import React from 'react'
import { Bar, BarChart,  CartesianGrid, XAxis  } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"
export default function Chart() {
    const chartData = [
        { month: "January", albums: 2, images: 3 },
        { month: "February", albums: 5, images: 1 },
        { month: "March", albums: 1, images: 4 },
        { month: "April", albums: 3, images: 5 },
        { month: "May", albums: 2, images: 3 }, 
      ]
      const chartConfig = {
        albums: {
          label: "Albums",
          color: "#2563eb",
        },
        images: {
          label: "Images",
          color: "#60a5fa",
        },
      } satisfies ChartConfig
  return (
    <div id="#chart-container" className='w-full h-full'>
             <ChartContainer config={chartConfig} className="h-full w-full">
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
                    <Bar dataKey="albums" fill="var(--color-albums)" radius={4} />
                    <Bar dataKey="images" fill="var(--color-images)" radius={4} />
                </BarChart>
    </ChartContainer>   
    </div>
   
  )
}
