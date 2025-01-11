import React from 'react'
import { motion } from 'framer-motion'
import { Search, BarChart, Zap, ArrowRight, Target, Cpu, BarChartIcon as ChartBar, Users, FileSearch, Check, Hammer, Flame, Shield } from 'lucide-react'

const SeoImprovement: React.FC = () => {
  const seoServices = [
    {
      icon: <Search className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <Search className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Keyword Forging",
      description: "We craft and optimize your content with powerful keywords, ensuring your site rises to the top of search results. Our expert team conducts in-depth research to identify the most effective keywords for your industry and target audience.",
      action: "Forge Keywords"
    },
    {
      icon: <BarChart className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <BarChart className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Analytics Tempering",
      description: "Our data-driven approach refines your SEO strategy, tempering it with insights from comprehensive analytics. We use cutting-edge tools to track your performance and make data-backed decisions to improve your search rankings.",
      action: "Temper Analytics"
    },
    {
      icon: <Zap className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <Zap className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Speed Optimization",
      description: "We sharpen your website's performance, forging lightning-fast load times to boost your search engine rankings. Our team optimizes your site's code, images, and server response times to ensure a smooth user experience.",
      action: "Optimize Speed"
    }
  ]

  const seoProcess = [
    {
      number: "01",
      icon: <Target className="w-8 h-8 text-[#FACC15]" />,
      title: "SEO Audit",
      description: "We begin by conducting a comprehensive analysis of your current SEO standing. This involves examining your website's structure, content, backlink profile, and technical aspects to identify strengths and areas for improvement.",
    },
    {
      number: "02",
      icon: <Search className="w-8 h-8 text-[#FACC15]" />,
      title: "Keyword Research",
      description: "Our team forges a list of powerful keywords tailored to your industry and target audience. We use advanced tools and techniques to identify high-value, low-competition keywords that will drive relevant traffic to your site.",
    },
    {
      number: "03",
      icon: <Cpu className="w-8 h-8 text-[#FACC15]" />,
      title: "On-Page Optimization",
      description: "We refine your website's content and structure to align with SEO best practices. This includes optimizing meta tags, headings, content structure, and internal linking to improve your site's relevance and authority.",
    },
    {
      number: "04",
      icon: <ArrowRight className="w-8 h-8 text-[#FACC15]" />,
      title: "Rank Monitoring",
      description: "We implement continuous monitoring and make adjustments to ensure your site maintains its forged position. Our team tracks your rankings for target keywords and analyzes your performance to make data-driven improvements.",
    }
  ]

  const seoPricingTiers = [
    {
      name: "Apprentice SEO",
      price: "$800",
      features: [
        "Basic keyword forging",
        "On-page SEO tempering",
        "Monthly performance report",
        "Essential meta tag optimization",
        "Basic content optimization"
      ]
    },
    {
      name: "Journeyman SEO",
      price: "$2,000",
      features: [
        "Advanced keyword strategy",
        "Comprehensive on-page & off-page SEO",
        "Weekly performance tracking",
        "Content strategy development",
        "Local SEO optimization"
      ]
    },
    {
      name: "Master SEO Smith",
      price: "$4,500+",
      features: [
        "Enterprise-level SEO mastery",
        "AI-driven keyword forging",
        "Daily rank monitoring & adjustments",
        "Advanced technical SEO implementation",
        "Full-scale content marketing"
      ]
    }
  ]

  return (
    <div className="w-full font-sans">
      {/* Hero Section with Wave */}
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black to-orange-800">
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
              Welcome to the SEO Forge
            </motion.span>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Forge Your SEO Dominance
            </motion.h1>

            <motion.p 
              className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Harness the power of cutting-edge SEO techniques to elevate your digital presence and conquer search engine results. Our master craftsmen will optimize your online presence for unparalleled visibility and growth.
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
              Start Your SEO Journey
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
              src="/placeholder.svg?height=400&width=300" 
              alt="SEO Mastery" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* SEO Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-800 to-black py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Forge Your SEO Arsenal
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
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

      {/* SEO Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-orange-800 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The SEO Forging Process
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {seoProcess.map((step, index) => (
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
                    <h3 className="text-xl font-bold mb-2 text-white flex items-center">
                      {step.icon}
                      <span className="ml-2">{step.title}</span>
                    </h3>
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
              <img src="/placeholder.svg?height=400&width=600" alt="SEO Process Visualization" className="rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-800 to-black py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            From Strategy to Success
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/placeholder.svg?height=400&width=600" alt="SEO Strategy Overview" className="rounded-lg shadow-2xl" />
            </motion.div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white flex items-center">
                  <ChartBar className="w-8 h-8 text-[#FACC15] mr-2" />
                  Strategic Analysis
                </h3>
                <p className="text-gray-300">We forge your SEO strategy through comprehensive market analysis, competitor research, and audience targeting. Our team identifies opportunities and challenges in your digital landscape.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white flex items-center">
                  <Users className="w-8 h-8 text-[#FACC15] mr-2" />
                  Audience Targeting
                </h3>
                <p className="text-gray-300">Identify and connect with your ideal audience through precise demographic and behavioral analysis. We craft personas to ensure your SEO efforts resonate with your target market.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white flex items-center">
                  <FileSearch className="w-8 h-8 text-[#FACC15] mr-2" />
                  Content Strategy
                </h3>
                <p className="text-gray-300">Develop engaging, SEO-optimized content that resonates with your audience and search engines. Our content strategy aligns with your business goals and target keywords.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Forging Tiers Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-orange-800 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            SEO Forging Tiers
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoPricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-3xl font-bold text-[#FACC15] mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-6 flex-grow">
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

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-orange-800 to-black lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Forge Your SEO Dominance?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let our master SEO craftsmen elevate your online presence and forge a path to the top of search results. With our battle-tested strategies and cutting-edge techniques, we'll help you conquer the digital landscape and outrank your competitors.
          </motion.p>
          <motion.button
            className="bg-[#FACC15] hover:bg-[#E6B800] text-black font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start Your SEO Journey
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default SeoImprovement

