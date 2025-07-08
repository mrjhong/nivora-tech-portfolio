"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ExternalLink, Github, Eye, Sparkles, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

// Simulando datos de Strapi con traducciones


const portfolioDataEs = [
 
  
  {
    id: 3,
    title: "Landing Page GP Handy Solution LLC",
    description: "Landing page inmobiliaria",
    image: "/gphandysolutions.png?height=400&width=600",
    category: "Web App",
    technologies: ["Next js", "Strapi"],
    liveUrl: "http://31.97.11.43:3050/",
    githubUrl: "http://31.97.11.43:3050/",
    featured: false,
  },
  {
    id: 4,
    title: "Ms-suite",
    description: "Aplicativo web para envio masivo de correos y mensajes de texto",
    image: "/msuite.png?height=400&width=600",
    category: "Web App",
    technologies: ["Vue.js", "Laravel", "MySQL", "Three.js"],
    liveUrl: "https://github.com/mrjhong/msuite",
    githubUrl: "https://github.com/mrjhong/msuite",
    featured: false,
  },
 
]


const portfolioDataEn = [
 
  
  {
    id: 3,
    title: "Landing Page GP Handy Solution LLC",
    description: "Real estate landing page",
    image: "/gphandysolutions.png?height=400&width=600",
    category: "Web App",
    technologies: ["Next js", "Strapi"],
    liveUrl: "http://31.97.11.43:3050/",
    githubUrl: "http://31.97.11.43:3050/",
    featured: false,
  },
  {
    id: 4,
    title: "Ms-suite",
    description: "Web application for mass email and SMS sending",
    image: "/msuite.png?height=400&width=600",
    category: "Web App",
    technologies: ["Vue.js", "Laravel", "MySQL", "Three.js"],
    liveUrl: "https://github.com/mrjhong/msuite",
    githubUrl: "https://github.com/mrjhong/msuite",
    featured: false,
  },
 
]


export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { language, t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState(t.portfolio.categories.all)
  const [projects, setProjects] = useState(language === 'en' ? portfolioDataEn : portfolioDataEs)

  const categories = [
    t.portfolio.categories.all,
    t.portfolio.categories.ecommerce,
    t.portfolio.categories.webapp
  ]

  useEffect(() => {
    const portfolioData = language === 'en' ? portfolioDataEn : portfolioDataEs
    if (selectedCategory === t.portfolio.categories.all) {
      setProjects(portfolioData)
    } else {
      setProjects(portfolioData.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory, language, t.portfolio.categories])

  useEffect(() => {
    // Reset category when language changes
    setSelectedCategory(t.portfolio.categories.all)
  }, [language, t.portfolio.categories.all])

  return (
    <section id="portfolio" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Eye className="h-5 w-5 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-300 font-semibold">{t.portfolio.badge}</span>
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
              {t.portfolio.title}
            </motion.span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              {t.portfolio.subtitle}
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.portfolio.description}
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-blue-500/25"
                      : "border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10"
                  } transition-all duration-300 px-6 py-2`}
                >
                  <Filter className="h-3 w-3 mr-2" />
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Action Buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ y: -20 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Sparkles className="h-3 w-3 mr-1" />
                        </motion.div>
                        {t.portfolio.featured}
                      </Badge>
                    </motion.div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="border-cyan-400/50 text-cyan-300 bg-cyan-500/10">
                      {project.category}
                    </Badge>
                  </div>

                  <motion.h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-slate-800/50 text-gray-300 text-xs hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        {t.portfolio.viewProject}
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </motion.div>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 hover:border-blue-400 bg-transparent hover:bg-blue-500/10"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500/10 hover:text-white hover:border-blue-400 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              {t.portfolio.viewAll}
            </Button>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}