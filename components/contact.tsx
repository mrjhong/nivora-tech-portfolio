"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Sparkles, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { language, t } = useLanguage() // Extraer tanto language como t
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' })

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.info.email.title,
      value: "john.guevara.dev@gmail.com",
      description: t.contact.info.email.description,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: t.contact.info.phone.title,
      value: "+57 3015886619",
      description: t.contact.info.phone.description,
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: t.contact.info.location.title,
      value: t.contact.info.location.value,
      description: t.contact.info.location.description,
      color: "from-teal-500 to-green-500",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({ type: 'loading' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: language === 'es'
            ? '¡Mensaje enviado exitosamente! Te contactaremos pronto.'
            : 'Message sent successfully! We\'ll contact you soon.'
        })
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        setFormStatus({
          type: 'error',
          message: data.error || (language === 'es'
            ? 'Error al enviar el mensaje. Inténtalo más tarde.'
            : 'Error sending message. Please try again later.')
        })
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: language === 'es'
          ? 'Error de conexión. Verifica tu internet e inténtalo nuevamente.'
          : 'Connection error. Check your internet and try again.'
      })
    }
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: 'idle' })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
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
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
            </motion.div>
            <span className="text-orange-300 font-semibold text-sm sm:text-base">{t.contact.badge}</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 px-4"
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
              {t.contact.title}
            </motion.span>
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              {t.contact.subtitle}
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Información de Contacto
              </motion.h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="w-full"
                  >
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <motion.div
                            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${info.color} p-3 sm:p-4 shadow-lg flex-shrink-0`}
                            whileHover={{
                              rotate: [0, -10, 10, 0],
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <info.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                          </motion.div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-white text-base sm:text-lg truncate">{info.title}</h4>
                            <p className="text-orange-400 font-semibold text-sm sm:text-lg break-all">{info.value}</p>
                            <p className="text-gray-400 text-xs sm:text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Cards
            <div className="space-y-4 hidden sm:block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-400/30 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 flex-shrink-0" />
                      </motion.div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-white text-base sm:text-lg">{t.contact.consultation.title}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">{t.contact.consultation.description}</p>
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
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Send className="h-8 w-8 sm:h-10 sm:w-10 text-teal-400 flex-shrink-0" />
                      </motion.div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-white text-base sm:text-lg">{t.contact.response.title}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">{t.contact.response.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 flex-shrink-0" />
                  </motion.div>
                  <span className="truncate">{t.contact.form.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/10 border border-green-400/30 text-green-400'
                        : formStatus.type === 'error'
                        ? 'bg-red-500/10 border border-red-400/30 text-red-400'
                        : 'bg-blue-500/10 border border-blue-400/30 text-blue-400'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {formStatus.type === 'loading' && <Loader2 className="h-5 w-5 animate-spin" />}
                      {formStatus.type === 'success' && <CheckCircle className="h-5 w-5" />}
                      {formStatus.type === 'error' && <AlertCircle className="h-5 w-5" />}
                    </div>
                    <span className="font-medium text-sm sm:text-base">{formStatus.message}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Label htmlFor="name" className="text-gray-300 font-medium text-sm sm:text-base">
                        {t.contact.form.name} *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                        placeholder={t.contact.form.namePlaceholder}
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Label htmlFor="email" className="text-gray-300 font-medium text-sm sm:text-base">
                        {t.contact.form.email} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                        placeholder={t.contact.form.emailPlaceholder}
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
                    <Label htmlFor="company" className="text-gray-300 font-medium text-sm sm:text-base">
                      {t.contact.form.company}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder={t.contact.form.companyPlaceholder}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Label htmlFor="message" className="text-gray-300 font-medium text-sm sm:text-base">
                      {t.contact.form.message} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none transition-all duration-300 text-sm sm:text-base min-h-[100px]"
                      placeholder={t.contact.form.messagePlaceholder}
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
                      disabled={formStatus.type === 'loading'}
                      className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus.type === 'loading' ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                          <span className="text-sm sm:text-base">
                            {language === 'es' ? 'Enviando...' : 'Sending...'}
                          </span>
                        </div>
                      ) : (
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="flex items-center justify-center"
                        >
                          <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-sm sm:text-base">{t.contact.form.send}</span>
                        </motion.div>
                      )}
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