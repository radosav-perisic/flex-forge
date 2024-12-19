import React, { useRef } from "react";
import {motion, useInView} from "framer-motion"

const Services = () => {
   // A custom component to handle animations with `useInView`
   const AnimatedElement = ({ children, className, initial, animate, transition }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={initial}
        animate={isInView ? animate : initial}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      <div className="absolute top-0 left-0 w-full h-auto">
        <svg
          id="visual"
          viewBox="0 0 960 540"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="h-[550px] md:h-[750px] lg:h-auto"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            d="M0 442L42 442L42 462L83 462L83 440L125 440L125 441L167 441L167 479L209 479L209 469L250 469L250 471L292 471L292 480L334 480L334 462L376 462L376 451L417 451L417 445L459 445L459 456L501 456L501 471L543 471L543 476L584 476L584 448L626 448L626 444L668 444L668 439L710 439L710 461L751 461L751 459L793 459L793 449L835 449L835 438L877 438L877 452L918 452L918 466L960 466L960 475L960 541L960 541L918 541L918 541L877 541L877 541L835 541L835 541L793 541L793 541L751 541L751 541L710 541L710 541L668 541L668 541L626 541L626 541L584 541L584 541L543 541L543 541L501 541L501 541L459 541L459 541L417 541L417 541L376 541L376 541L334 541L334 541L292 541L292 541L250 541L250 541L209 541L209 541L167 541L167 541L125 541L125 541L83 541L83 541L42 541L42 541L0 541Z"
            fill="#f76900"
          ></path>
          <path
            d="M0 464L42 464L42 491L83 491L83 461L125 461L125 464L167 464L167 468L209 468L209 477L250 477L250 456L292 456L292 477L334 477L334 485L376 485L376 456L417 456L417 471L459 471L459 460L501 460L501 473L543 473L543 489L584 489L584 485L626 485L626 476L668 476L668 472L710 472L710 472L751 472L751 490L793 490L793 494L835 494L835 469L877 469L877 490L918 490L918 454L960 454L960 495L960 541L960 541L918 541L918 541L877 541L877 541L835 541L835 541L793 541L793 541L751 541L751 541L710 541L710 541L668 541L668 541L626 541L626 541L584 541L584 541L543 541L543 541L501 541L501 541L459 541L459 541L417 541L417 541L376 541L376 541L334 541L334 541L292 541L292 541L250 541L250 541L209 541L209 541L167 541L167 541L125 541L125 541L83 541L83 541L42 541L42 541L0 541Z"
            fill="#e5540c"
          ></path>
          <path
            d="M0 472L42 472L42 508L83 508L83 485L125 485L125 486L167 486L167 480L209 480L209 496L250 496L250 484L292 484L292 482L334 482L334 488L376 488L376 499L417 499L417 493L459 493L459 487L501 487L501 486L543 486L543 484L584 484L584 497L626 497L626 482L668 482L668 496L710 496L710 496L751 496L751 483L793 483L793 499L835 499L835 485L877 485L877 491L918 491L918 494L960 494L960 474L960 541L960 541L918 541L918 541L877 541L877 541L835 541L835 541L793 541L793 541L751 541L751 541L710 541L710 541L668 541L668 541L626 541L626 541L584 541L584 541L543 541L543 541L501 541L501 541L459 541L459 541L417 541L417 541L376 541L376 541L334 541L334 541L292 541L292 541L250 541L250 541L209 541L209 541L167 541L167 541L125 541L125 541L83 541L83 541L42 541L42 541L0 541Z"
            fill="#d33f12"
          ></path>
          <path
            d="M0 508L42 508L42 490L83 490L83 499L125 499L125 506L167 506L167 498L209 498L209 495L250 495L250 514L292 514L292 507L334 507L334 510L376 510L376 511L417 511L417 504L459 504L459 518L501 518L501 505L543 505L543 489L584 489L584 499L626 499L626 515L668 515L668 490L710 490L710 519L751 519L751 516L793 516L793 502L835 502L835 510L877 510L877 501L918 501L918 514L960 514L960 499L960 541L960 541L918 541L918 541L877 541L877 541L835 541L835 541L793 541L793 541L751 541L751 541L710 541L710 541L668 541L668 541L626 541L626 541L584 541L584 541L543 541L543 541L501 541L501 541L459 541L459 541L417 541L417 541L376 541L376 541L334 541L334 541L292 541L292 541L250 541L250 541L209 541L209 541L167 541L167 541L125 541L125 541L83 541L83 541L42 541L42 541L0 541Z"
            fill="#bf2914"
          ></path>
          <path
            d="M0 520L42 520L42 527L83 527L83 514L125 514L125 507L167 507L167 522L209 522L209 512L250 512L250 530L292 530L292 527L334 527L334 533L376 533L376 519L417 519L417 524L459 524L459 535L501 535L501 513L543 513L543 521L584 521L584 507L626 507L626 533L668 533L668 510L710 510L710 525L751 525L751 512L793 512L793 516L835 516L835 516L877 516L877 519L918 519L918 514L960 514L960 517L960 541L960 541L918 541L918 541L877 541L877 541L835 541L835 541L793 541L793 541L751 541L751 541L710 541L710 541L668 541L668 541L626 541L626 541L584 541L584 541L543 541L543 541L501 541L501 541L459 541L459 541L417 541L417 541L376 541L376 541L334 541L334 541L292 541L292 541L250 541L250 541L209 541L209 541L167 541L167 541L125 541L125 541L83 541L83 541L42 541L42 541L0 541Z"
            fill="#ab0b15"
          ></path>
        </svg>
      </div>
      {/* Sparks GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/src/assets/sparks.gif')",
          transform: "scaleY(-1)",
        }}
      ></div>
       {/* Intro Section - Centered */}
      <AnimatedElement
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-200 mt-8 mb-4">Our Services</h1>
      </AnimatedElement>

      <AnimatedElement
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-2xl font-bold text-gray-200">Elevating Digital Craftsmanship and eCommerce Solutions!</p>
      </AnimatedElement>

      {/* Services Cards */}
      <div className="flex justify-center space-x-16">
        {/* Service 1 */}
        <AnimatedElement
          className="w-[400px] bg-white p-6 rounded-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img src="/src/assets/web-dev.png" className="w-full rounded-xl h-[220px] bg-gray-300 mb-4" />
          <AnimatedElement
            className="text-xl text-center font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Custom Web Development
          </AnimatedElement>
          <AnimatedElement
            className="tracking-tighter leading-5 space-y-2 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <li>🔧 Fully customized websites and eCommerce stores designed from the ground up to align with your specific
              business goals
            </li>
            <li>⚙️ Seamless user experience, responsive design, and optimized performance on all devices</li>
          </AnimatedElement>
        </AnimatedElement>

        {/* Service 2 */}
        <AnimatedElement
          className="w-[400px] bg-white p-6 rounded-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src="/src/assets/seo.jpg" className="w-full rounded-xl h-[220px] bg-gray-300 mb-4" />
          <AnimatedElement
            className="text-xl text-center font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            SEO Strategy and Optimization
          </AnimatedElement>
          <AnimatedElement
            className="tracking-tighter leading-5 space-y-2 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <li>📈 Advanced SEO strategies designed to elevate search engine rankings and increase organic traffic</li>
            <li>⛏️ In-depth content optimization tailored to your target audience, ensuring sustainable online growth</li>
          </AnimatedElement>
        </AnimatedElement>

        {/* Service 3 */}
        <AnimatedElement
          className="w-[400px] bg-white p-6 rounded-2xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <img src="/src/assets/redesign.jpg" className="w-full rounded-xl h-[220px] bg-gray-300 mb-4" />
          <AnimatedElement
            className="text-xl text-center font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Website Redesign and Optimization
          </AnimatedElement>
          <AnimatedElement
            className="tracking-tighter leading-5 space-y-2 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <li>⚡ Speed and performance optimizations that drive faster load times and improved user satisfaction</li>
            <li>💡 SEO-friendly updates to ensure your site stays competitive and effective in a fast-evolving digital landscape</li>
          </AnimatedElement>
        </AnimatedElement>
        </div>

      {/* Sparks GIF Background */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/src/assets/sparks.gif')",
          transform: "scaleY(-1)",
        }}
      ></div>
    </section>
  );
};

export default Services;
