"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Smartphone, Globe, Database, Palette, Zap, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      features: t.services.webDev.features,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: Globe,
      title: t.services.ecommerce.title,
      description: t.services.ecommerce.description,
      features: t.services.ecommerce.features,
      color: "from-teal-500 to-green-500",
      delay: 0.3,
    },
    {
      icon: Database,
      title: t.services.backend.title,
      description: t.services.backend.description,
      features: t.services.backend.features,
      color: "from-blue-600 to-indigo-600",
      delay: 0.4,
    },
  ]

  return (
    <section id="services" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-6 py-3 mb-8"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-blue-400" />
              </motion.div>
              <span className="text-blue-300 font-semibold">{t.services.badge}</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent block mb-2">
                {t.services.title}
              </span>
              <motion.span
                className="text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.services.subtitle}
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.services.description}
            </motion.p>
          </div>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: service.delay,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl h-full hover:border-blue-400/50 transition-all duration-500 overflow-hidden relative hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)`,
                  }}
                />

                <CardHeader className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 shadow-lg`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: service.delay + featureIndex * 0.1,
                        }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="ghost"
                      className="w-full text-blue-400 hover:text-white hover:bg-blue-500/20 group/btn border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
                    >
                      <span>{t.services.learnMore}</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}