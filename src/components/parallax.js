import {React, useEffect, useRef} from "react";
import {useTransform, useScroll, motion} from "framer-motion";
import Lenis from '@studio-freight/lenis'

const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
];

function Parallax() {
    const container= useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    useEffect(()=>{
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    },[])

    const y =useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2.4])
    const y2 =useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3.3])
    const y3 =useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 1.25])
    const y4 =useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3])
    // import Slider from '../components/slider';
  return (
    <>
        <div ref={container} className="gallery overflow-hidden w-full md:h-[175vh] h-[125vh] md:translate-x-0 flex flex-row gap-[2vh] md:p-[2vh] box-border">
            <Column images={[images[0], images[1], images[2]]} y={y}/>
            <Column images={[images[3], images[4], images[5]]} y={y2}/>
            <Column images={[images[6], images[7], images[8]]} y={y3}/>
            <Column images={[images[9], images[10], images[11]]} y={y4}/>
          </div>
    </>
  );
}

const Column = ({ images, y=0 }) => {
  return (
    <motion.div style={{y}} className="column relative md:w-1/4 w-1/6 h-full flex flex-col md:gap-4 gap-2 md:min-w-[250px] min-w-[49vw]">
      {images.map((s, index) => {
        return (
          <div key={index} className="imageContainer h-full max-w-full relative">
            <img className="object-cover border-2 drop-shadow-sm border-[#f0efff] rounded-xl" loading="lazy" decoding="async" src={`/images/${s}`} alt="screens"/>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Parallax;
