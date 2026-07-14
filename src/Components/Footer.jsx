import React from "react";
import { motion } from "framer-motion";
import { navItems, socialPlatforms } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 relative z-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl md:text-2xl font-bold gradient-text cursor-pointer">
              CODER-PORTFOLIO
            </span>
          </motion.div>

          

          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 rounded-full glass dark:glass flex items-center justify-center hover:bg-neo-primary/20 transition-all duration-300"
              >
                <platform.icon className="text-lg" />
              </motion.a>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 <span className="font-semibold">Tejashri Tagad</span>. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built with ❤️ using <span className="font-medium">React, Vite & Tailwind CSS</span>
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            Designed & Developed by <span className="font-medium">Tejashri Tagad</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;