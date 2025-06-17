import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Award, Users, Star, CheckCircle, Phone, MessageCircle, Wrench, HardHat, Settings, Globe, Play } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Premium safety equipment from trusted global brands',
    },
    {
      icon: Zap,
      title: 'Power Tools',
      description: 'Professional-grade power tools for every application',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Certified products with warranty and support',
    },
    {
      icon: Users,
      title: 'Expert Service',
      description: 'Professional consultation and after-sales support',
    },
  ];

  const brands = [
    { name: 'Dewalt', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png' },
    { name: 'Bosch', logo: 'https://s19538.pcdn.co/wp-content/uploads/2016/09/Bosch-Logo.png' },
    { name: 'Makita', logo: 'https://thumbs.dreamstime.com/b/photo-white-makita-word-green-background-construction-tools-set-photo-white-makita-word-green-background-235421856.jpg' },
    { name: 'Stanley', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Stanley_Hand_Tools_logo.svg/1200px-Stanley_Hand_Tools_logo.svg.png' },
    { name: 'Cayken', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSssHH_3d-Klz_DD0kBKRy7D28ezfyPVYVSA&s' },
    { name: '3M', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdrCTFYk1X1FFsaNK4Nh1cKM04hsA9VCsdg&s' },
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Tool Consultation',
      description: 'Expert advice on selecting the right tools for your specific projects and requirements.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: HardHat,
      title: 'Safety Solutions',
      description: 'Comprehensive safety equipment packages tailored to your workplace needs.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Settings,
      title: 'Equipment Maintenance',
      description: 'Professional maintenance services to keep your tools in peak condition.',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Access to international brands and specialized equipment from worldwide suppliers.',
      color: 'from-purple-600 to-purple-700'
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Al-Rashid Construction',
      text: 'Fahad Trading has been our trusted partner for over 5 years. Their quality tools and exceptional service have helped us complete projects on time and within budget.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Dubai Engineering Solutions',
      text: 'The safety equipment we purchased exceeded our expectations. The team provided excellent guidance in selecting the right products for our industrial facility.',
      rating: 5,
    },
    {
      name: 'Mohammed Hassan',
      company: 'Hassan Contracting LLC',
      text: 'Professional service, competitive prices, and genuine products. Fahad Trading is our go-to supplier for all power tools and safety equipment.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '500+', label: 'Satisfied Clients' },
    { number: '50+', label: 'Global Brands' },
    { number: '24/7', label: 'Customer Support' },
  ];

  const categories = [
    {
      title: 'Hand Tools',
      description: 'Professional hand tools for precision work',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      count: '200+ Products'
    },
    {
      title: 'Power Tools',
      description: 'High-performance electric and cordless tools',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      count: '150+ Products'
    },
    {
      title: 'Safety Equipment',
      description: 'Complete safety solutions for workplace protection',
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      count: '300+ Products'
    },
    {
      title: 'Core Drilling',
      description: 'Professional core drilling equipment and accessories',
      image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      count: '50+ Products'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section - Redesigned for Professional Excellence */}
      <section className="pb-10 md:pb-0 mt-10 md:mt-0 relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0">
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
          
          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-0 left-0 w-full h-full" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 25% 25%, #1e40af 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, #ea580c 1px, transparent 1px)`,
                   backgroundSize: '60px 60px, 40px 40px'
                 }}>
            </div>
          </div>

          {/* Subtle animated elements */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-20 right-20 w-32 h-32 border border-blue-100 rounded-full opacity-30"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-20 left-20 w-24 h-24 border border-orange-100 rounded-full opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-left">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 rounded-full mb-8"
              >
                <Award className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Premium Trading Excellence Since 2009</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-gray-900">Fahad Trading</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 bg-clip-text text-transparent">
                  Establishment
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light"
              >
                Elevating industries with premium power tools, safety equipment, and professional solutions across the UAE
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6 mb-10"
              >
                {[
                  { icon: CheckCircle, text: "Certified Quality" },
                  { icon: Shield, text: "Warranty Protected" },
                  { icon: Award, text: "Industry Leading" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/catalog">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Explore Catalog</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://wa.me/971XXXXXXXX?text=Hi! I would like to know more about your premium tools and services.', '_blank')}
                  className="group border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center space-x-3 transition-all duration-300 hover:bg-orange-50"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Get Quote</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Professional Power Tools"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Years Excellence</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl opacity-30"></div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-20 text-center"
          >
            <p className="text-sm text-gray-500 mb-8 font-medium">TRUSTED BY LEADING COMPANIES ACROSS THE UAE</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {brands.slice(0, 4).map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 w-20 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 border border-white/10 rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Trusted by Professionals Across the UAE</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has earned us the trust of industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fahad Trading?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence through quality products, expert service, and unwavering commitment to safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-600 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of professional tools and safety equipment for every industry need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/catalog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>View All Products</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Global Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the world's leading manufacturers to bring you authentic, high-quality products
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond products, we provide comprehensive services to support your business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the professionals who trust us with their projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 border border-white/10 rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Upgrade Your Tools?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience the Fahad Trading difference. Quality tools, expert advice, and service you can trust.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us Today</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/971XXXXXXXX?text=Hi! I would like to know more about your products and services.', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;