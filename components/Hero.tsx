import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      <div className="absolute top-0 left-0 w-full h-auto">
        <svg
          id="visual"
          viewBox="0 0 960 540"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="h-[750px] md:h-[1000px] lg:h-auto"
        >
          <path
            d="M0 161L42 161L42 150L83 150L83 150L125 150L125 129L167 129L167 160L209 160L209 154L250 154L250 133L292 133L292 167L334 167L334 150L376 150L376 153L417 153L417 156L459 156L459 138L501 138L501 145L543 145L543 148L584 148L584 149L626 149L626 149L668 149L668 136L710 136L710 161L751 161L751 153L793 153L793 143L835 143L835 160L877 160L877 149L918 149L918 160L960 160L960 164L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#8f0000"
          ></path>
          <path
            d="M0 107L42 107L42 108L83 108L83 115L125 115L125 144L167 144L167 121L209 121L209 117L250 117L250 118L292 118L292 143L334 143L334 101L376 101L376 104L417 104L417 100L459 100L459 107L501 107L501 122L543 122L543 132L584 132L584 123L626 123L626 133L668 133L668 141L710 141L710 114L751 114L751 110L793 110L793 113L835 113L835 100L877 100L877 112L918 112L918 137L960 137L960 144L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#ae3201"
          ></path>
          <path
            d="M0 87L42 87L42 80L83 80L83 93L125 93L125 75L167 75L167 102L209 102L209 93L250 93L250 105L292 105L292 108L334 108L334 96L376 96L376 75L417 75L417 95L459 95L459 96L501 96L501 112L543 112L543 96L584 96L584 77L626 77L626 79L668 79L668 107L710 107L710 89L751 89L751 87L793 87L793 74L835 74L835 85L877 85L877 92L918 92L918 100L960 100L960 100L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#cb5500"
          ></path>
          <path
            d="M0 60L42 60L42 50L83 50L83 81L125 81L125 62L167 62L167 56L209 56L209 73L250 73L250 52L292 52L292 54L334 54L334 70L376 70L376 51L417 51L417 74L459 74L459 72L501 72L501 49L543 49L543 58L584 58L584 55L626 55L626 54L668 54L668 79L710 79L710 64L751 64L751 73L793 73L793 53L835 53L835 57L877 57L877 63L918 63L918 49L960 49L960 54L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#e67800"
          ></path>
        </svg>
      </div>

      {/* Sparks GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/src/assets/sparks.gif')",
        }}
      ></div>

      <div className="relative flex flex-col items-center justify-center w-full h-full z-10">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white md:hidden text-4xl text-center md:text-4xl lg:text-5xl p font-bold mb-2 mx-1"
        >
          FlexForge Digital Craftmanship
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-white hidden md:flex text-6xl text-center font-bold mb-8 mx-1"
        >
          FlexForge Digital
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-white hidden md:flex text-6xl text-center font-bold mb-8 mx-1"
        >
          Craftmanship
        </motion.h1>

        {/* Forge GIF */}
        <motion.img
          src="/src/assets/forge.gif"
          alt="Forge Animation"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 70,
          }}
          className="w-72 h-72 md:w-72 md:h-72 lg:w-96 lg:h-96"
        />

        {/* Animated Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="text-white text-center leading-[18px] md:leading-normal tracking-[-0.07rem] max-w-md sm:max-w-lg md:max-w-xl text-base sm:text-base md:text-xl 
          mb-3 mx-1"
        >
          Forging custom web components, websites, redesigns, and SEO
          optimization to elevate your digital presence.
        </motion.p>

        {/* Explore Button */}
        <motion.button
          className="MCbutton tracking-widest"
          initial={{ opacity: 0, y: 50 }} // Starts off-screen below
          animate={{ opacity: 1, y: 0 }} // Animates into view
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1.35, // Adjust delay to sync with other animations
          }}
        >
          EXPLORE
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
