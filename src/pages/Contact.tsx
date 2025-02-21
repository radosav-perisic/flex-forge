import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Calendar } from 'lucide-react'
import img from '../assets/about.png'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    companyName: '',
    website: '',
    email: '',
    topic: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      name: '',
      surname: '',
      companyName: '',
      website: '',
      email: '',
      topic: '',
      message: ''
    })
    // You could also add a success message or redirect here
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-orange-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        {/* Introduction and Book a Call Button */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl pt-10 md:pt-0 font-bold mb-4">Reach Us Now!</h1>
          <p className="text-xl mb-8">
          Transform Your Business with a Custom Website or Redesign and Optimize Your Current One.
          </p>
          <a
            href="#" // Replace with your booking link
            className="inline-block bg-[#FACC15] text-black font-bold py-3 px-6 rounded-full hover:bg-[#E6B800] transition-colors duration-300"
          >
            Book a Call <Calendar className="inline-block ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 order-2 md:order-1"
          >
            <img 
              src={img || "/placeholder.svg"}
              alt="Digital Forge Craftsmanship" 
              className="w-full h-auto rounded-lg shadow-2xl mb-8"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="flex items-center">
                <Phone className="mr-2 text-[#FACC15]" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 text-[#FACC15]" /> info@flexforge.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 text-[#FACC15]" /> 123 Digital Forge St, Tech City, TC 12345
              </p>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl h-full flex flex-col order-1 md:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-300">Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-[#FACC15] focus:bg-gray-600 focus:ring-0 text-white py-3 px-4"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-lg font-medium text-gray-300">Surname*</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    value={formData.surname}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-[#FACC15] focus:bg-gray-600 focus:ring-0 text-white py-3 px-4"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="companyName" className="block text-lg font-medium text-gray-300">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-[#FACC15] focus:bg-gray-600 focus:ring-0 text-white py-3 px-4"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-lg font-medium text-gray-300">Website</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-[#FACC15] focus:bg-gray-600 focus:ring-0 text-white py-3 px-4"
                  placeholder="https://"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-[#FACC15] focus:bg-gray-600 focus:ring-0 text-white py-3 px-4"
                />
              </div>
              <div>
                <label htmlFor="topic" className="block text-lg font-medium text-gray-300">Topic*</label>
                <select
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-[#FACC15] focus:bg-gray-600 focus:ring-0 text-white py-3 px-4"
                >
                  <option value="">Select a topic</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Custom Website">Custom Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-[#FACC15] focus:bg-gray-600 focus:ring-0 text-white py-3 px-4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#FACC15] text-black font-bold py-3 px-4 rounded hover:bg-[#E6B800] transition-colors duration-300"
                >
                  Forge Ahead with Us <Send className="inline-block ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

