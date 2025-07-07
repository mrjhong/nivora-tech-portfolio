"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "john.guevara.dev@gmail.com",
    description: "Respuesta en 24 horas",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+57 3015886619",
    description: "Lun - Vie, 9AM - 6PM",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Bogota, Colombia",
    description: "También trabajamos remoto",
    color: "from-teal-500 to-green-500",
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí integrarías con tu backend/Strapi
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="py-32 relative">
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
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/30 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 146, 60, 0.3)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <MessageCircle className="h-5 w-5 text-orange-400" />
            </motion.div>
            <span className="text-orange-300 font-semibold">Hablemos</span>
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
              ¿Tienes un Proyecto
            </motion.span>
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              en Mente?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Estamos aquí para ayudarte a convertir tu idea en realidad digital. Contáctanos y comencemos a construir
            algo increíble juntos que transforme tu visión en éxito.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Información de Contacto
              </motion.h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} p-4 shadow-lg`}
                            whileHover={{
                              rotate: [0, -10, 10, 0],
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <info.icon className="h-8 w-8 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="font-bold text-white text-lg">{info.title}</h4>
                            <p className="text-orange-400 font-semibold text-lg">{info.value}</p>
                            <p className="text-gray-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-400/30 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Calendar className="h-10 w-10 text-blue-400" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Agenda una Consulta Gratuita</h4>
                        <p className="text-gray-300">30 minutos para discutir tu proyecto sin compromiso</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-r from-teal-600/20 to-green-600/20 border-teal-400/30 backdrop-blur-xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Send className="h-10 w-10 text-teal-400" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Respuesta Rápida</h4>
                        <p className="text-gray-300">Te contactamos en menos de 24 horas garantizado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-8 w-8 text-blue-400" />
                  </motion.div>
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Label htmlFor="name" className="text-gray-300 font-medium">
                        Nombre *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Label htmlFor="email" className="text-gray-300 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Label htmlFor="company" className="text-gray-300 font-medium">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Label htmlFor="message" className="text-gray-300 font-medium">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none transition-all duration-300"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte a alcanzar el éxito digital..."
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="flex items-center"
                      >
                        <Send className="mr-3 h-5 w-5" />
                        Enviar Mensaje
                      </motion.div>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
