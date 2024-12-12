"use client"
import React from 'react'
import { Bar, BarChart,  CartesianGrid, XAxis  } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"
export default function Chart() {
    const chartData = [
        { month: "January", desktop: 2, mobile: 3 },
        { month: "February", desktop: 5, mobile: 1 },
        { month: "March", desktop: 1, mobile: 4 },
        { month: "April", desktop: 3, mobile: 5 },
        { month: "May", desktop: 2, mobile: 3 },
        { month: "June", desktop: 4, mobile: 1 },
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
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
    </ChartContainer>   
    </div>
   
  )
}
