import React from "react";
import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      image: "/src/assets/web-dev.png",
      title: "Custom Web Development",
      items: [
        "🔧 Fully customized websites and eCommerce stores designed from the ground up to align with your business objectives and branding vision",
        "⚙️ Seamless UX with intuitive navigation, responsive layouts, and optimized performance across all devices for maximum accessibility",
      ],
      buttonText: "Start Building",
    },
    {
      image: "/src/assets/seo.jpeg",
      title: "SEO Strategy & Optimization",
      items: [
        "📈 Advanced and data-driven SEO strategies designed to elevate search engine rankings, boost visibility, and drive steady growth in organic traffic",
        "⛏️ In-depth content optimization crafted to resonate with your specific audience, ensuring consistent and sustainable online expansion over time",
      ],
      buttonText: "Boost Rankings",
    },
    {
      image: "/src/assets/redesign.jpeg",
      title: "Web Interface Revitalization",
      items: [
        "⚡ Comprehensive analysis and restructuring of your site's design and functionality to meet modern standards and user expectations",
        "💡 Enhanced usability, aesthetics, and technical performance to ensure a seamless experience and sustained competitiveness",
      ],
      buttonText: "Optimize Now",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black to-orange-900 py-16 px-4 sm:px-6 lg:px-8">
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
        </svg>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full h-auto">
        <svg
          id="visual"
          viewBox="0 0 960 540"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="h-[550px] md:h-[750px] lg:h-auto"
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
        </svg>
      </div>
      
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-200">Elevating Digital Craftsmanship and eCommerce Solutions!</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:max-w-lg lg:max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl overflow-hidden z-10 shadow-lg flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              className="w-full h-[220px] object-cover"
              alt={service.title}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-3xl font-black text-center text-black mb-2">{service.title}</h2>
              <ul className="text-gray-900 md:text-base text-sm font-mono font-bold mb-4 leading-5 tracking-tight flex-grow list-none pl-0">
                {service.items.map((item, idx) => (
                  <li key={idx} className="mb-2">{item}</li>
                ))}
              </ul>
              <button className="mt-auto px-4 py-2 bg-orange-600 font-bold text-white rounded-md hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center cursor-pointer">
                {service.buttonText} ➔
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

