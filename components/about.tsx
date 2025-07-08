"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, Coffee, Rocket, Target, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


import { useLanguage } from "@/contexts/LanguageContext"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()



 const values = [
    {
      icon: Target,
      title: t.about.values.precision.title,
      description: t.about.values.precision.description,
    },
    {
      icon: Heart,
      title: t.about.values.passion.title,
      description: t.about.values.passion.description,
    },
    {
      icon: Users,
      title: t.about.values.collaboration.title,
      description: t.about.values.collaboration.description,
    },
  ]


  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-400/30 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(20, 184, 166, 0.3)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Users className="h-5 w-5 text-teal-400" />
            </motion.div>
            <span className="text-teal-300 font-semibold">{t.about.badge}</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="text-white block mb-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t.about.subtitle}
            </span>
            </motion.span>
            
          </motion.h2>

          <motion.p
            className="text-4xl  text-gray-400 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-white font-semibold">
              {t.about.description}
            
            </span>
          </motion.p>
        </motion.div>



        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-4xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.about.story.title}
            </motion.h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              {t.about.story.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/Nosotros.png?height=400&width=600"
                alt="Nivora Tech Team"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                whileHover={{ opacity: 1 }}
              />
            </div>
          </motion.div>
        </div>
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <motion.h3
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.about.values.title}
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl text-center p-8 h-full hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 p-5 mx-auto mb-6 shadow-lg"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </section>
  )
}
