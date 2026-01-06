import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { ExperienceData as data } from "../data/ExperienceData";

export function ExperienceTabs() {


  return (
    <div className="w-full">
      <Tabs value="experience" className="w-full">
        <TabsHeader
          className="bg-gray-900/50 border border-gray-800 p-1 h-14"
          indicatorProps={{
            className: "bg-transparent shadow-none",
          }}
        >
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              className="py-3 font-medium transition-all duration-300 rounded-md bg-transparent text-gray-400"
              activeClassName="!bg-gray-700 !text-white" 
            >
              <div className="flex items-center justify-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody
          animate={{
            initial: { opacity: 0, scale: 0.9 },
            mount: { opacity: 1, scale: 1 },
            unmount: { opacity: 0, scale: 0.9 },
          }}
          className="mt-6 font-sans"
        >
          {data.map(({ value, events }) => (
            <TabPanel key={value} value={value} className="px-0">
              {/* Custom Tailwind Timeline Container */}
              <div className="relative pl-10">
                {/* 1. Vertical Line */}
                <div className="absolute left-9.5 top-0 bottom-0 w-0.5 bg-gray-700 z-10" />
                
                {events.map((event, index) => (
                  <div key={index} className="mb-8 relative pl-6">
                    {/* 2. Timeline Dot/Image (Avatar) */}
                    <div 
                      className={`absolute top-0 -left-7 z-20 w-14 h-14 rounded-full flex items-center justify-center border-2 border-gray-800 ${event.iconBg} overflow-hidden`}
                    >
                      <img 
                        src={event.iconLogo}
                        alt={`${event.subtitle} Logo`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Content Card */}
                    <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg shadow-xl ml-4">
                        {/* Date (Top Right) */}
                        <Typography variant="small" className="font-mono md:text-sm text-xs text-gray-400 float-right mt-1 whitespace-nowrap">
                            {event.date}
                        </Typography>

                        {/* Title and Subtitle (Left) */}
                        <Typography variant="h6" className="text-gray-100 font-bold">
                            {event.title}
                        </Typography>
                        
                        <Typography variant="small" className="font-normal text-white-50 mb-3">
                            {event.subtitle}
                            {/* Location Pipeline */}
                            {event.location && (
                                <span className="text-gray-400 ml-2">| {event.location}</span>
                            )}
                        </Typography>
                        {event.stack && (
                            <div className="mt-1">
                                <Typography variant="lead" className="font-mono md:text-sm text-xs text-gray-100">
                                    <b>Stack:</b> {event.stack.join(", ")}
                                </Typography>
                            </div>
                        )}
                        {/* Bullet Points */}
                        <ul className="list-disc space-y-1 ml-5 mt-2">
                            {event.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex}>
                                    <Typography variant="small" className="text-gray-300 md:text-sm text-xs leading-relaxed">
                                        {bullet}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}