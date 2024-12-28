import { motion } from 'framer-motion'
import { Search, BarChart, Zap, ArrowUp, Target, Cpu, BarChartIcon as ChartBar, Users, FileSearch, Star } from 'lucide-react'

const SeoImprovement = () => {
  const seoServices = [
    {
      icon: <Search className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <Search className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Keyword Forging",
      description: "We craft and optimize your content with powerful keywords, ensuring your site rises to the top of search results.",
      action: "Optimize Now"
    },
    {
      icon: <BarChart className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <BarChart className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Analytics Tempering",
      description: "Our data-driven approach refines your SEO strategy, tempering it with insights from comprehensive analytics.",
      action: "Analyze Performance"
    },
    {
      icon: <Zap className="w-16 h-16 text-[#FACC15]" />,
      backgroundIcon: <Zap className="w-64 h-64 text-[#FACC15] opacity-5" />,
      title: "Speed Optimization",
      description: "We sharpen your website's performance, forging lightning-fast load times to boost your search engine rankings.",
      action: "Accelerate Site"
    }
  ]

  const seoProcess = [
    {
      icon: <Target className="w-12 h-12 text-[#FACC15]" />,
      title: "SEO Audit",
      description: "We analyze your current SEO standing, identifying strengths and areas for improvement."
    },
    {
      icon: <Search className="w-12 h-12 text-[#FACC15]" />,
      title: "Keyword Research",
      description: "Our team forges a list of powerful keywords tailored to your industry and target audience."
    },
    {
      icon: <Cpu className="w-12 h-12 text-[#FACC15]" />,
      title: "On-Page Optimization",
      description: "We refine your website's content and structure to align with SEO best practices."
    },
    {
      icon: <ArrowUp className="w-12 h-12 text-[#FACC15]" />,
      title: "Rank Monitoring",
      description: "Continuous monitoring and adjustments to ensure your site maintains its forged position."
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black to-orange-700">
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full min-h-screen z-10 px-4 sm:px-6 lg:px-8 xl:px-16 gap-8 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            <motion.span 
              className="text-[#FACC15] font-bold text-lg sm:text-xl mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Forge Your Online Presence
            </motion.span>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SEO Mastery: Elevate Your Digital Dominance
            </motion.h1>

            <motion.p 
              className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Harness the power of cutting-edge SEO techniques to forge your way to the top of search engine results. Our master craftsmen will optimize your digital presence for unparalleled visibility and growth.
            </motion.p>

            <motion.button
              className="bg-[#FACC15] hover:bg-[#E6B800] text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Start Your SEO Journey
            </motion.button>
          </div>

          <motion.div 
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/placeholder.svg?height=400&width=600" 
              alt="SEO Improvement Visualization" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-black to-orange-700">
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
                  {service.action} <ArrowUp className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-black to-orange-700">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-black to-orange-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">From Strategy to Success</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ChartBar className="w-8 h-8 text-[#FACC15] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Strategic Analysis</h3>
                    <p className="text-gray-300">We forge your SEO strategy through comprehensive market analysis, competitor research, and audience targeting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-[#FACC15] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Audience Targeting</h3>
                    <p className="text-gray-300">Identify and connect with your ideal audience through precise demographic and behavioral analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FileSearch className="w-8 h-8 text-[#FACC15] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Content Strategy</h3>
                    <p className="text-gray-300">Develop engaging, SEO-optimized content that resonates with your audience and search engines.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="SEO Strategy Visualization" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-black to-orange-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="SEO Features Overview" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Features Forged for Success</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="w-8 h-8 text-[#FACC15] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Performance Monitoring</h3>
                    <p className="text-gray-300">Real-time tracking and analysis of your SEO performance with detailed insights and reporting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Star className="w-8 h-8 text-[#FACC15] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Reputation Management</h3>
                    <p className="text-gray-300">Monitor and enhance your online presence while building trust with your audience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-8 h-8 text-[#FACC15] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Technical Excellence</h3>
                    <p className="text-gray-300">Optimize your website's technical aspects for peak search engine performance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-t from-black to-orange-700">
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
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let our master SEO craftsmen elevate your online presence and forge a path to the top of search results.
          </motion.p>
          <motion.button
            className="bg-[#FACC15] hover:bg-[#E6B800] text-black font-semibold px-8 py-3 rounded-md transition-colors duration-300"
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

