"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Award, Coffee, Rocket, Target, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const stats = [
  { icon: Rocket, label: "Proyectos Completados", value: "150+", color: "from-blue-500 to-cyan-500" },
  { icon: Users, label: "Clientes Satisfechos", value: "80+", color: "from-cyan-500 to-teal-500" },
  { icon: Award, label: "Años de Experiencia", value: "5+", color: "from-teal-500 to-green-500" },
  { icon: Coffee, label: "Tazas de Café", value: "2000+", color: "from-blue-600 to-indigo-600" },
]

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista en arquitecturas escalables y liderazgo técnico",
  },
  {
    name: "Maria González",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creadora de experiencias digitales memorables y funcionales",
  },
  {
    name: "Carlos Mendoza",
    role: "Mobile Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Experto en desarrollo móvil multiplataforma",
  },
]

const values = [
  {
    icon: Target,
    title: "Precisión",
    description: "Cada línea de código tiene un propósito específico y está optimizada para el rendimiento",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y se refleja en cada proyecto que entregamos",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos como un equipo unido con nuestros clientes para alcanzar el éxito",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-32 relative">
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
            <span className="text-teal-300 font-semibold">Sobre Nosotros</span>
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
              El Equipo Detrás de
            </motion.span>
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Nivora Tech
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales comprometidos con crear
            soluciones tecnológicas que marquen la diferencia en el mundo digital.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl text-center p-6 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-4 mx-auto mb-4 shadow-lg`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

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
              Nuestra Historia
            </motion.h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Nivora Tech nació en 2019 con una visión clara: democratizar el acceso a tecnología de vanguardia para
                empresas de todos los tamaños. Comenzamos como un pequeño equipo de desarrolladores apasionados
                trabajando desde un garaje, con grandes sueños y determinación inquebrantable.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hoy, somos una casa de desarrollo reconocida que ha ayudado a más de 80 empresas a transformar sus ideas
                en realidades digitales exitosas. Nuestro enfoque se centra en la calidad excepcional, la innovación
                constante y la satisfacción total del cliente.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Creemos que la tecnología debe ser accesible, funcional y hermosa. Cada proyecto que emprendemos es una
                oportunidad de crear algo extraordinario que genere un impacto positivo real en la vida de las personas.
              </motion.p>
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
                src="/placeholder.svg?height=400&width=600"
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
            Nuestros Valores
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

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h3
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Conoce al Equipo
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl overflow-hidden hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                    <p className="text-teal-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
