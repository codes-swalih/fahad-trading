import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MessageCircle, Wrench, Shield, HardHat, Zap } from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Wrench, color: 'from-gray-600 to-gray-700' },
    { name: 'Tools', icon: Wrench, color: 'from-blue-600 to-blue-700' },
    { name: 'Power Tools', icon: Zap, color: 'from-orange-500 to-orange-600' },
    { name: 'Safety Equipment', icon: Shield, color: 'from-green-600 to-green-700' },
    { name: 'Core Drill', icon: HardHat, color: 'from-purple-600 to-purple-700' },
  ];

  const products = [
    // Tools
    { name: 'Dewesser', category: 'Tools', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Roto', category: 'Tools', image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Tuf Fix', category: 'Tools', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Juster', category: 'Tools', image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Danmi', category: 'Tools', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Clarke', category: 'Tools', image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Vermolen\'s', category: 'Tools', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Total', category: 'Tools', image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Kitools', category: 'Tools', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Stanley', category: 'Tools', image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Hero (Japan)', category: 'Tools', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },

    // Power Tools
    { name: 'Makute', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Kitool', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Dewalt', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Bosch', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Makita', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Stanley Power', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Juster Power', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Dewesser Power', category: 'Power Tools', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },

    // Safety Equipment
    { name: 'KA7 Safety Shoes', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Road Mate Safety Shoes', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Ultimate Plus Safety Shoes', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'JCBman Safety Shoes', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Roto Safety Equipment', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Strong Hammer Safety', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: '2MK Safety Vest', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'VOLTA Safety Vest', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Roto Safety Vest', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Vaultex Safety Vest', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Hi-Tex Safety Vest', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Super Hammer Safety Vest', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: '3M Safety Vest', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Volta Safety Gloves', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/4792083/pexels-photo-4792083.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Hi-Tex Safety Gloves', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/4792083/pexels-photo-4792083.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Pro Guard Safety Gloves', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/4792083/pexels-photo-4792083.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'OT Safety Gloves', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/4792083/pexels-photo-4792083.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'SPH Safety Gloves', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/4792083/pexels-photo-4792083.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Vaultex Safety Gloves', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/4792083/pexels-photo-4792083.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Vaultex Safety Helmet', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'Hi-Tex Safety Helmet', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: '3M Safety Helmet', category: 'Safety Equipment', image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },

    // Core Drill
    { name: 'CAYKEN SCY-2050', category: 'Core Drill', image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'CAYKEN SCY-2550', category: 'Core Drill', image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'CAYKEN SCY-2550C (Gear)', category: 'Core Drill', image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'CAYKEN SCY-3050', category: 'Core Drill', image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'CAYKEN SCY-3050C (Gear)', category: 'Core Drill', image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { name: 'CAYKEN Spare Parts', category: 'Core Drill', image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi! I'm interested in ${productName}. Could you please provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/971XXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-800 to-orange-900">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Catalog</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-200"
          >
            Discover our comprehensive range of professional tools and safety equipment
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={`${product.name}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Inquire on WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Need Something Specific?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Can't find what you're looking for? Our experts are here to help you find the perfect tools and equipment for your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/971XXXXXXXX?text=Hi! I need help finding specific tools and equipment.', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Request Custom Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Catalog;