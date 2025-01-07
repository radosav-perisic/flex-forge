import React from "react";
import { motion } from "framer-motion";
import SEO from "../assets/ServicesInfo-Redesign.png";

const ServicesInfo = () => {
  return (
    <section className="w-full relative bg-gradient-to-b overflow-hidden from-orange-800 to-black py-16 md:py-24">
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
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {/* SEO Optimization Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.span
              className="text-[#FACC15] font-bold text-3xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Handcrafted Web Design
            </motion.span>

            <motion.h2
              className="text-[2.5rem] leading-tight font-bold text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Forge a Unique Digital Identity with Custom-Built Website
              Solutions
            </motion.h2>

            <motion.p
              className="text-[#f3f4f7] text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your website is the cornerstone of your online presence, and it
              should reflect the unique character and goals of your business. At
              FlexForge, we specialize in creating custom-built websites and
              eCommerce platforms that are tailored to your brand and designed
              to leave a lasting impression.
            </motion.p>

            <motion.p
              className="text-[#f3f4f7] text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              By improving page load times, mobile responsiveness, and
              implementing the latest SEO best practices, we help you attract
              more visitors and convert them into customers.
            </motion.p>
          </div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={SEO}
              alt="SEO Optimization Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Website Maintenance Section */}
        <div className="flex flex-col-reverse relative z-10 lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={SEO} // Placeholder until second image is provided
              alt="Website Maintenance Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-6">
            <motion.span
              className="text-[#FACC15] font-semibold text-3xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Reliable Website Maintenance
            </motion.span>

            <motion.h2
              className="text-[2.5rem] leading-tight font-bold text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Maintain a Secure, Efficient Website That Runs Seamlessly
            </motion.h2>

            <motion.p
              className="text-[#f3f4f7] text-lg leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              In the fast-moving digital world, regular maintenance is vital to
              ensure your website’s performance and security remain sharp. At
              BrightWave Web Solutions, we forge comprehensive maintenance
              services that keep your website in prime condition and performing
              at its peak.
            </motion.p>

            <motion.p
              className="text-[#f3f4f7] text-lg leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              By vigilantly monitoring performance, applying security updates,
              and executing regular backups, we safeguard your site from
              potential threats. Our proactive approach ensures your business
              stays focused on growth while we fine-tune and protect the
              backbone of your online presence.{" "}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
