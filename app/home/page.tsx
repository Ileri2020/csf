"use client"
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import Social from "@/components/utility/social"
import { Gallery } from "@/components/myComponents/subs"
import { TextAnimations, FlyInText, FlipInText, ZoomInText, ScaleInText, SlideInText, SlideUpText, BounceInText, RotateInText, TypewriterText } from "@/components/myComponents/subs/textctrl";
import Logobg from '@/components/myComponents/subs/logobg';
import gallery from '@/data/gallery';
import Similar from '../../components/myComponents/subs/similar';
import Footer from '../../components/myComponents/subs/footer';


const Home = () => {
  return (
    <motion.section
      initial = {{ opacity: 0 }}
      animate = {{
        opacity : 1,
        transition : { delay: 0.5, duration: 0.6, ease: "easeIn"}
      }}
      className="w-[100vw] min-h-[100vh] overflow-clip flex flex-col"
    >
      <div className="flex-1 flex flex-col md:flex-row w-full md:w-[85%] min-h-[80vh] overflow-clip mx-auto relative max-w-6xl">
        <div className="flex w-full md:w-[540px] flex-col items-center mt-5 md:mt-28 text-centers md:translate-x-40 ">
          <div className="text-5xl font-bold text-transparent text-outline text-center md:text-start">Community Soul Fishers</div>
          <div>
            <ZoomInText />
          </div>
        </div>
        <Logobg />
      </div>
      <div className="h-[80vh] w-full flex justify-center">
        <div className="flex-1 flex flex-col justify-center items-center max-w-4xl">
          <div>
            <div>Audio</div>
            <Similar similar={gallery.stocks} />
          </div>
          <div>
            <div>Video</div>
            <Similar similar={gallery.stocks} />
          </div>
          <div>
            <div>Books</div>
            <Similar similar={gallery.stocks} />
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  )
}

export default Home
