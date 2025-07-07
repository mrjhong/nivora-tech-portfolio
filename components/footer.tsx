"use client"

import { motion } from "framer-motion"
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react"
import Link from "next/link"



const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950/95 border-t border-slate-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-cyan-950/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  <Code2 className="h-10 w-10 text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-40"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <motion.span
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Nivora Tech
              </motion.span>
            </motion.div>

            <motion.p
              className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transformamos ideas en experiencias digitales extraordinarias. Somos tu socio tecnológico para alcanzar el
              éxito digital que siempre has soñado.
            </motion.p>

            <motion.div
              className="space-y-3 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-3 hover:text-blue-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-5 w-5 text-blue-400" />
                <span>john.guevara.dev@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+57 3015886619</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 hover:text-teal-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>Bogota, Colombia</span>
              </motion.div>
            </motion.div>
          </div>

        
        
        
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-800/50 mt-16 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p className="text-gray-400 flex items-center gap-2" whileHover={{ scale: 1.02 }}>
              © {new Date().getFullYear()} Nivora Tech. Hecho con
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-4 w-4 text-red-400 fill-current" />
              </motion.span>
              en Colombia.
            </motion.p>

            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.3, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
