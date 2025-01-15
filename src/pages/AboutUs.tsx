import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, Shield, Zap, Users, Trophy, Target, ArrowRight } from 'lucide-react'
import about from '../assets/about.png'

const AboutUs: React.FC = () => {
  const companyValues = [
    {
      icon: <Hammer className="w-12 h-12 text-[#FACC15]" />,
      title: "Craftsmanship",
      description: "We forge digital experiences with precision and care, ensuring every detail is perfected."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#FACC15]" />,
      title: "Integrity",
      description: "Our work is built on a foundation of honesty, transparency, and ethical practices."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#FACC15]" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in digital design and development."
    },
    {
      icon: <Users className="w-12 h-12 text-[#FACC15]" />,
      title: "Collaboration",
      description: "We work closely with our clients, forging strong partnerships to achieve shared goals."
    }
  ]

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Awards Won" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "10+", label: "Years of Excellence" }
  ]

  const teamMembers = [
    {
      name: "Alex Forge",
      role: "Founder & Master Craftsman",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Sarah Steele",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Mike Hammer",
      role: "Chief Developer",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      name: "Emily Anvil",
      role: "Client Success Manager",
      image: "/placeholder.svg?height=300&width=300"
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-orange-800">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Forging Digital Excellence
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a team of passionate digital craftsmen, dedicated to creating exceptional online experiences that drive success for our clients.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black to-orange-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={about} alt="About" className="rounded-lg shadow-2xl" />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300 text-lg">
                Founded in 2013, our company began as a small team of passionate designers and developers with a shared vision: to forge digital experiences that would leave a lasting impact.
              </p>
              <p className="text-gray-300 text-lg">
                Over the years, we've grown into a full-service digital agency, but our core values remain unchanged. We approach each project with the same dedication and craftsmanship that defined our early days.
              </p>
              <p className="text-gray-300 text-lg">
                Today, we're proud to be at the forefront of digital innovation, constantly pushing boundaries and setting new standards in web design and development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-orange-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black to-orange-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Achievements
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold mb-2 text-[#FACC15]">{achievement.number}</h3>
                <p className="text-gray-300 text-lg">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-orange-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Master Craftsmen
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black to-orange-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Forge Your Digital Future?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's collaborate and create something extraordinary together. Our team of master craftsmen is ready to bring your vision to life.
          </motion.p>
          <motion.button
            className="bg-[#FACC15] hover:bg-[#E6B800] text-black font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-300 flex items-center justify-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

