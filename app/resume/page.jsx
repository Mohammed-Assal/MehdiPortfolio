"use client";

const about = {
  title: " ABout me",
  description:
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, quas omnis rem consequuntur voluptatibus, ipsam quos libero iste temporibus fuga fugit et commodi id. Modi illo placeat vero a suscipit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "mehdi fahiliii",
    },
    {
      fieldName: "phone",
      fieldValue: "0384384848",
    },
    {
      fieldName: "email",
      fieldValue: " shsh@ahah.com",
    },
    {
      fieldName: "freelance",
      fieldValue: " available",
    },
    {
      fieldName: "loghat",
      fieldValue: " fronci",
    },
  ],
};
const education = {
  icon: "/pngegg.png",
  title: "My education",
  description:
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, quas omnis rem consequuntur voluptatibus, ipsam quos libero iste temporibus fuga fugit et commodi id. Modi illo placeat vero a suscipit.",
  item: [
    {
      institution: "online cours",
      degree: "full stack web dev",
      duration: "2023",
    },
    {
      institution: "online cours",
      degree: "full stack web dev",
      duration: "2023",
    },
    {
      institution: "online cours",
      degree: "full stack web dev",
      duration: "2023",
    },
  ],
};
const skills = {
  icon: "/pngegg.png",
  title: "My skills",
  description:
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, quas omnis rem consequuntur voluptatibus, ipsam quos libero iste temporibus fuga fugit et commodi id. Modi illo placeat vero a suscipit.",
  skillList: [
    {
      icon: "/",
      name: "full stack web dev",
    },
    {
      name: "full stack web dev",
    },
    {
      name: "full stack web dev",
    },
    {
      name: "full stack web dev",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import { Item } from "@radix-ui/react-select";
const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.item.map((item, index) => {
                      return (
                        <>
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                              {item.degree}
                            </h3>
                            <div className="flex gap-3 items-center">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lx:mx-0 flex-col gap-[30px]">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4  xl:gap-[30px] ">
                  {skills.skillList.map((item, index) => {
                    return (
                      <>
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li className="flex items-center gap-3 justify-center xl:justify-start" key={index}>
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
