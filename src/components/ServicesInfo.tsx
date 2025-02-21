import React from "react";
import { motion } from "framer-motion";
import SEO from "../assets/ServicesInfo-Redesign.png";

const ServicesInfo = () => {
  return (
    <section className="w-full relative bg-gradient-to-b overflow-hidden from-orange-800 to-black py-16 md:py-24">
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
