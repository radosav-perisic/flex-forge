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
            d="M0 215L42 215L42 195L83 195L83 226L125 226L125 236L167 236L167 188L209 188L209 253L250 253L250 250L292 250L292 218L334 218L334 197L376 197L376 201L417 201L417 220L459 220L459 178L501 178L501 212L543 212L543 249L584 249L584 250L626 250L626 180L668 180L668 230L710 230L710 233L751 233L751 174L793 174L793 211L835 211L835 263L877 263L877 266L918 266L918 218L960 218L960 238L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#d5792d"
          ></path>
          <path
            d="M0 153L42 153L42 209L83 209L83 169L125 169L125 179L167 179L167 153L209 153L209 221L250 221L250 197L292 197L292 143L334 143L334 193L376 193L376 188L417 188L417 144L459 144L459 149L501 149L501 176L543 176L543 149L584 149L584 167L626 167L626 167L668 167L668 214L710 214L710 176L751 176L751 158L793 158L793 161L835 161L835 174L877 174L877 187L918 187L918 195L960 195L960 223L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#a86127"
          ></path>
          <path
            d="M0 146L42 146L42 189L83 189L83 112L125 112L125 183L167 183L167 166L209 166L209 135L250 135L250 191L292 191L292 106L334 106L334 128L376 128L376 192L417 192L417 131L459 131L459 142L501 142L501 141L543 141L543 181L584 181L584 158L626 158L626 156L668 156L668 111L710 111L710 157L751 157L751 148L793 148L793 159L835 159L835 164L877 164L877 107L918 107L918 120L960 120L960 151L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#7e4921"
          ></path>
          <path
            d="M0 118L42 118L42 89L83 89L83 131L125 131L125 79L167 79L167 75L209 75L209 143L250 143L250 144L292 144L292 88L334 88L334 123L376 123L376 88L417 88L417 116L459 116L459 128L501 128L501 92L543 92L543 136L584 136L584 77L626 77L626 139L668 139L668 94L710 94L710 116L751 116L751 97L793 97L793 137L835 137L835 98L877 98L877 81L918 81L918 143L960 143L960 135L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#55331b"
          ></path>
          <path
            d="M0 35L42 35L42 63L83 63L83 39L125 39L125 48L167 48L167 59L209 59L209 105L250 105L250 40L292 40L292 61L334 61L334 105L376 105L376 66L417 66L417 93L459 93L459 62L501 62L501 83L543 83L543 51L584 51L584 112L626 112L626 80L668 80L668 38L710 38L710 101L751 101L751 87L793 87L793 92L835 92L835 113L877 113L877 54L918 54L918 114L960 114L960 100L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#2f1f13"
          ></path>
          <path
            d="M0 58L42 58L42 50L83 50L83 55L125 55L125 21L167 21L167 41L209 41L209 41L250 41L250 46L292 46L292 13L334 13L334 3L376 3L376 38L417 38L417 54L459 54L459 51L501 51L501 45L543 45L543 73L584 73L584 62L626 62L626 2L668 2L668 24L710 24L710 16L751 16L751 14L793 14L793 8L835 8L835 63L877 63L877 61L918 61L918 58L960 58L960 24L960 0L960 0L918 0L918 0L877 0L877 0L835 0L835 0L793 0L793 0L751 0L751 0L710 0L710 0L668 0L668 0L626 0L626 0L584 0L584 0L543 0L543 0L501 0L501 0L459 0L459 0L417 0L417 0L376 0L376 0L334 0L334 0L292 0L292 0L250 0L250 0L209 0L209 0L167 0L167 0L125 0L125 0L83 0L83 0L42 0L42 0L0 0Z"
            fill="#060606"
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
          className="MCbutton tracking-widest mt-4"
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
