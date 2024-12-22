import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pd-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl  text-white/70">Technicien en réseaux et systémes</span> */}
            <div className="text-center mb-11">
            <h1 className="h1 mb-5 text-center" >
              Salut Je suis <br /> <span className="text-accent">EL Mehdi <br /> EL Fhaili</span>
            </h1>
           
            <span className="text-xl  text-white/70">Technicien en réseaux et systémes</span>
            
            </div>
            
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                className="uppercase flex items-center gap-2"
                size="lg"
                variant="outline"
              >
                <span>donwload cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default home;
