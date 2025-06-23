import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Wrench } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpeg"; // Adjust the path as necessary

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg"
              >
                <Wrench className="h-8 w-8 text-white" />
              </motion.div> */}
              <img src={logo} alt="" className=" w-14 h-14" />
              <div>
                <h3 className="text-2xl font-bold">Fahad Trading</h3>
                <p className="text-sm text-gray-300">Est.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for premium power tools, safety equipment,
              and industrial supplies. Quality products from leading global
              brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Catalog", "Contact"].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">+966 55 260 1880</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">info@fahadtrading.ae</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">Saudi Arabia, riyadh</span>
              </div>
              <a className=" flex items-center space-x-3" href="https://www.instagram.com/fahad_alanzi_trading.est/?utm_source=ig_web_button_share_sheet">
                <div className="flex items-center space-x-3">
                  <FaInstagram className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300">Instagram</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Fahad Trading Est. All rights reserved. Built with precision
            and care.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
