"use client";
import { FaArrowRight } from "react-icons/fa";
const about = {
  title: " Profile",
  description:
    " Salut, je suis technicien spécialisé en infrastructures digitales option systèmes et réseaux. Âgé de 20 ans, j'ai obtenu ma formation à l'Institut Spécialisé de Technologie Appliquée El Kelaa des Sraghna. Passionné par les technologies modernes, je me consacre à la gestion des systèmes et réseaux, ainsi qu'à la mise en œuvre et maintenance d'infrastructures digitales.",
  info: [
    {
      fieldName: "Nom",
      fieldValue: "EL Mehdi EL Fhaili",
    },
    {
      fieldName: "phone",
      fieldValue: "+212 617735607",
    },
    {
      fieldName: "email",
      fieldValue: "elmehdielfhaili@gmail.com",
    },
    {
      fieldName: "",
      fieldValue: "",
    },
    {
      fieldName: "les longues",
      fieldValue: "arabe , français",
    },
  ],
};
const education = {
  icon: "/pngegg.png",
  title: "Mon education",
  description:
    " Voici un aperçu de mon parcours éducatif et des diplômes obtenus qui ont enrichi mes compétences et connaissances.",
  item: [
    {
      institution: "infrastructure digital option Systèmes et Réseaux.",
      degree: "INSTUT SPECIALISE DE TECHNOLOGIE APPLIQUEE EL KELAA",
      duration: "2022-2024",
    },
    {
      institution: "Baccalauréat sciences physique et chimie.",
      degree: "LYCEE QUALIFIANT MOULAY ISMAIL",
      duration: "2021-2022",
    },
  ],
};
const cirtifica = {
  icon: "/pngegg.png",
  title: "Mes Certificats",
  description: "Pour vérifier les certificats, cliquez sur le flèche :",
  item: [
    {
      institution: "En ligne à Networking Academy vérifier par Cisco",
      degree: "Inroduction to Cybersecurity",
      duration: "2024",
      link: "https://www.credly.com/badges/bc9d68db-7fa5-4010-9d99-4cdc462de1b7/public_url",
    },
    {
      institution: "En ligne à Networking Academy vérifier par Cisco",
      degree: "Notions de base sur le matériel informatique",
      duration: "2024",
      link: "https://www.credly.com/badges/c3148112-682f-4e49-a424-9f25818b499f/public_url",
    },
    {
      institution: "En ligne à Networking Academy vérifier par Cisco",
      degree: "Notions de base de python 1",
      duration: "2024",
      link: "https://www.credly.com/badges/3093ebb3-d6b3-4d41-910c-d2e88fcf0a4d/public_url",
    },
  ],
};
const skills = {
  icon: "/pngegg.png",
  title: "Mes Compétences ",
  description:
    "Voici un aperçu des compétences que j'ai développées et perfectionnées tout au long de mon parcours.",
  skillList: [
    {
      icon: "/Linux.png",
      name: "Administration Linux Server",
    },
    {
      icon: "/Wind0ws-server.png",
      name: "Administration Windows Server",
    },
    {
      icon: "/cisco.png",
      name: "Administration Réseaux",
    },
    {
      icon: "/shift.png",
      name: "Time shift Sauvegarde et restauration",
    },
    {
      icon: "/vmware.png",
      name: "Virtualisation",
    },
    {
      icon: "/zabbix.png",
      name: `Zabbix  Systéme de surveillance`,
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
            <TabsTrigger value="education">Mon education</TabsTrigger>
            <TabsTrigger value="skills">Mes Compétences </TabsTrigger>
            <TabsTrigger value="Cirtifica">Mes Certificats</TabsTrigger>

            <TabsTrigger value="about">Profile</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="">{education.description}</p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.item.map((item, index) => {
                      return (
                        <>
                          <li
                            key={index}
                            className="bg-[#232329] h-[284px] py-6 px-10 rounded-xl flex flex-col   lg:items-start gap-1 "
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px]  lg:text-left ">
                              {item.degree}
                            </h3>
                            <div className="flex gap-6 justify-between ">
                              <span className="w-[14px] h-[10px] rounded-[50%] mt-2 bg-accent "></span>
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
            <TabsContent value="Cirtifica" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{cirtifica.title}</h3>

                <p className="">{cirtifica.description}</p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {cirtifica.item.map((item, index) => {
                      return (
                        <>
                          <li
                            key={index}
                            onClick={() =>
                              window.open(
                                item.link,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                            className="bg-[#232329] hover:cursor-pointer h-[é84px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                          >
                            <div className="flex justify-between items-center w-[100%]">
                              <span className="text-accent">
                                {item.duration}
                              </span>

                              <FaArrowRight
                                className="text-accent "
                                onClick={() =>
                                  window.open(
                                    item.link,
                                    "_blank",
                                    "noopener,noreferrer"
                                  )
                                }
                              />
                            </div>

                            <h3 className="text-[15px] max-w-[260px] min-h-[60px] text-center lg:text-left ">
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
                  <h3 className="text-4xl mb-9 font-bold">{skills.title}</h3>
                  {/* <p className=" text-white/60 mx-auto lx:mx-0 flex-col gap-[30px]">
                    {skills.description}
                  </p> */}
                </div>

                <ul className="grid grid-cols-3 sm:grid-cols-5 gap-6 md:grid-cols-6  xl:gap-[30px] ">
                  {skills.skillList.map((item, index) => {
                    return (
                      <>
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[80px]   flex justify-center items-center group ">
                                <img
                                  className="w-[100px] "
                                  src={item.icon}
                                  alt="kkkk"
                                />
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
                <div>
                  {/*  Administration Réseau  */}
                  <div className="mb-2 max-w-[700px]  mx-auto ">
                    <h2 className="text-[14px] font-semibold mb-2">
                      Administration Réseau :
                    </h2>
                    <ul className=" text-[12px] text-white/60  list-disc pl-5 space-y-1">
                      <li>Configuration CISCO.</li>
                      <li>Router configuration CISCO. </li>
                    </ul>
                  </div>

                  {/*  Administration du Serveur  */}
                  <div className="mb-2 max-w-[700px]  mx-auto">
                    <h2 className=" text-[14px] font-semibold mb-2">
                      Administration Serveur :
                    </h2>
                    <ul className="text-[12px] text-white/60 list-disc pl-5 space-y-1">
                      <li>Windows : Windows Server 2016/2019.</li>
                      <li>Linux : Red Hat, Fedora, CentOS.</li>
                    </ul>
                  </div>

                  {/* Virtualisation  */}
                  <div className="mb-2 max-w-[700px]  mx-auto">
                    <h2 className="text-[14px] font-semibold mb-2">
                      Virtualisation :
                    </h2>
                    <ul className="text-[12px] text-white/60 list-disc pl-5 space-y-1">
                      <li>Hyperviseur de type 1 : Esxi | Proxmox.</li>
                      <li>
                        Hyperviseur de type 2 : VMWare | VirtualBox | KVM.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-justify text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center gap-3 justify-center xl:justify-start"
                        key={index}
                      >
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
