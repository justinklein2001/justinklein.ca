"use client";

import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AiOutlineProject } from "react-icons/ai";
import { ExperienceData as data } from "../data/ExperienceData";
import { ProjectsData } from "../data/ProjectsData";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ProjectTimeline } from "./ProjectTimeline";

const PROJECTS_VALUE = "projects";

const projectsTab = {
  label: "Projects",
  value: PROJECTS_VALUE,
  icon: AiOutlineProject,
};
const [firstTab, ...restTabs] = data.map(({ label, value, icon }) => ({
  label,
  value,
  icon,
}));
const tabMeta = [firstTab, projectsTab, ...restTabs];

export function ExperienceTabs() {
  const [active, setActive] = useState<string>("experience");
  // material-tailwind's Tabs isn't truly controlled — `value` only seeds the
  // internal reducer on mount, so updating it later is ignored. To honor
  // programmatic navigation (NavBar links / deep-link hash) we remount the Tabs
  // by bumping this key, which re-seeds its initial active tab to `active`.
  // Normal in-header tab clicks don't bump it, so the library animates them
  // natively without a remount.
  const [navKey, setNavKey] = useState(0);

  useEffect(() => {
    const applyTab = (value: string) => {
      if (value === PROJECTS_VALUE || value === "experience") {
        setActive(value);
        setNavKey((k) => k + 1);
      }
    };
    // Deep links / direct loads: honor the URL hash (#experience / #projects).
    const syncFromHash = () =>
      applyTab(window.location.hash.replace("#", ""));
    // In-page NavBar clicks ask us to open a specific tab (fires every click,
    // even when the hash is unchanged, so re-clicking still works).
    const onSelectTab = (e: Event) =>
      applyTab((e as CustomEvent<string>).detail);

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("portfolio:select-tab", onSelectTab);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("portfolio:select-tab", onSelectTab);
    };
  }, []);

  return (
    <div className="w-full">
      {/* !overflow-visible defeats the overflow-hidden baked into the Tabs /
          TabsBody theme so the phase rail can sit in the left page margin. */}
      <Tabs key={navKey} value={active} className="w-full !overflow-visible">
        <TabsHeader
          className="bg-gray-100/70 border border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 p-1 h-14"
          indicatorProps={{
            className: "bg-transparent shadow-none",
          }}
        >
          {tabMeta.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActive(value)}
              className="py-3 font-medium transition-all duration-300 rounded-md bg-transparent text-gray-500 dark:text-gray-400"
              activeClassName="!bg-gray-900 !text-white dark:!bg-gray-700"
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
          className="mt-6 font-sans !overflow-visible"
        >
          {data.map(({ value, events }) => (
            <TabPanel key={value} value={value} className="px-0">
              <ExperienceTimeline events={events} />
            </TabPanel>
          ))}

          <TabPanel value={PROJECTS_VALUE} className="px-0">
            <ProjectTimeline projects={ProjectsData} />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
