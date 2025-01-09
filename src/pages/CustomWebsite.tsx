import { motion } from 'framer-motion'
import img from '../assets/ServicesInfo-Redesign.png'
import img2 from '../assets/Web Design.png'
import { Hammer, Flame, Shield, ArrowRight, Cpu, Zap } from 'lucide-react'

const CustomWebsite = () => {
  const services = [
    {
      icon: <Hammer className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <Hammer className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Digital Forge Mastery",
      description: "We forge robust digital solutions from raw concepts, hammering out every detail to create a website that stands apart.",
      action: "Enter the Forge"
    },
    {
      icon: <Flame className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <Flame className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "SEO Tempering",
      description: "Like steel in the forge, we temper your website with advanced SEO techniques to ensure it rises above the competition.",
      action: "Ignite Growth"
    },
    {
      icon: <Shield className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <Shield className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Steadfast Maintenance",
      description: "Keep your digital arsenal sharp and battle-ready with our comprehensive maintenance and security services.",
      action: "Fortify Site"
    }
  ]

  const process = [
    {
      number: "01",
      title: "Blueprint Crafting",
      description: "We forge the foundation of your digital presence by understanding your vision and sketching out the perfect blueprint."
    },
    {
      number: "02",
      title: "Material Selection",
      description: "Choosing the finest digital materials and technologies to build your website with strength and precision."
    },
    {
      number: "03",
      title: "Forging Process",
      description: "Our master craftsmen shape and refine your website, hammering out every detail to perfection."
    },
    {
      number: "04",
      title: "Quality Tempering",
      description: "Rigorous testing and refinement ensure your website is battle-tested and ready for launch."
    }
  ]

  const features = [
    "Custom-forged designs with no templates",
    "Battle-tested SEO optimization",
    "Reinforced security measures",
    "Swift-loading performance",
    "Responsive across all devices",
    "Integrated analytics arsenal"
  ]

  const tiers = [
    {
      name: "Apprentice",
      price: "$1,200",
      features: [
        "Single-page forge",
        "Basic SEO tempering",
        "Mobile responsiveness",
        "Contact form integration",
        "Essential security measures"
      ]
    },
    {
      name: "Journeyman",
      price: "$2,800",
      features: [
        "Multi-page masterwork (up to 5)",
        "Advanced SEO techniques",
        "Performance optimization",
        "Custom functionality",
        "Enhanced security suite"
      ]
    },
    {
      name: "Master Smith",
      price: "$6,000+",
      features: [
        "Unlimited page forging",
        "Complete SEO mastery",
        "Maximum performance",
        "Custom feature crafting",
        "Ultimate security arsenal"
      ]
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section with Wave */}
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black to-orange-700">
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
          </svg>
        </div>
        
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full min-h-screen z-10 px-4 sm:px-6 lg:px-8 xl:px-16 gap-8 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            <motion.span 
              className="text-[#FACC15] font-bold text-lg sm:text-xl mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Welcome to the Digital Forge
            </motion.span>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Where Digital Excellence is Forged
            </motion.h1>

            <motion.p 
              className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform your vision into digital reality with our master-crafted websites, forged in the fires of innovation and tempered with cutting-edge technology
            </motion.p>

            <motion.button
              className="bg-[#FACC15] hover:bg-[#E6B800] text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-colors duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Begin Your Journey
            </motion.button>
          </div>

          <motion.div 
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/4 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={img2} 
              alt="Digital Forge Craftsmanship" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-black to-orange-700"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Master Crafted Digital Solutions
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg relative overflow-hidden h-[400px] flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {service.backgroundIcon}
                </div>
                <div className="relative z-10">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                </div>
                <button className="flex items-center text-[#FACC15] hover:text-[#E6B800] transition-colors relative z-10">
                  {service.action} <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-black to-orange-700"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Forging Process
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <span className="text-[#FACC15] text-4xl font-bold">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={img} alt="Forging Process" className="rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-black to-orange-700"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={img} alt="Features" className="rounded-lg shadow-2xl" />
            </motion.div>

            <div>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Forged with Excellence
              </motion.h2>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Flame className="w-5 h-5 text-[#FACC15]" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-black to-orange-700"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Arsenal
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-3xl font-bold text-[#FACC15] mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#FACC15]" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#FACC15] text-black font-bold py-2 rounded hover:bg-[#E6B800] transition-colors">
                  Forge Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomWebsite

