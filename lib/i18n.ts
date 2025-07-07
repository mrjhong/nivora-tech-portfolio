// lib/i18n.ts
export interface Translations {
  // Header
  header: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    spanish: string;
    english: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    language: string;
    title: string;
    subtitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  
  // Services Section
  services: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    webDev: {
      title: string;
      description: string;
      features: string[];
    };
    ecommerce: {
      title: string;
      description: string;
      features: string[];
    };
    backend: {
      title: string;
      description: string;
      features: string[];
    };
    learnMore: string;
  };
  
  // Portfolio Section
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    categories: {
      all: string;
      ecommerce: string;
      webapp: string;
    };
    viewProject: string;
    viewAll: string;
    featured: string;
  };
  
  // About Section
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: {
      projects: string;
      clients: string;
      experience: string;
      coffee: string;
    };
    story: {
      title: string;
      paragraphs: string[];
    };
    values: {
      title: string;
      precision: {
        title: string;
        description: string;
      };
      passion: {
        title: string;
        description: string;
      };
      collaboration: {
        title: string;
        description: string;
      };
    };
    team: {
      title: string;
      members: {
        alex: {
          name: string;
          role: string;
          bio: string;
        };
        maria: {
          name: string;
          role: string;
          bio: string;
        };
        carlos: {
          name: string;
          role: string;
          bio: string;
        };
      };
    };
  };
  
  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    infoTitle: string;
    info: {
      email: {
        title: string;
        description: string;
      };
      phone: {
        title: string;
        description: string;
      };
      location: {
        title: string;
        value: string;
        description: string;
      };
    };
    consultation: {
      title: string;
      description: string;
    };
    response: {
      title: string;
      description: string;
    };
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    services: {
      title: string;
      webDev: string;
      mobileApps: string;
      ecommerce: string;
      uiux: string;
    };
    resources: {
      title: string;
      documentation: string;
      support: string;
      terms: string;
      privacy: string;
    };
    madeWith: string;
    location: string;
  };
}

// Traducciones en español
export const es: Translations = {
  header: {
    home: "Inicio",
    services: "Servicios",
    portfolio: "Portafolio",
    about: "Nosotros",
    contact: "Contacto",
    spanish: "Español",
    english: "English"
  },
  
  hero: {
    badge: "Innovación Digital",
    language: "es",
    title: "Nivora Tech",
    subtitle: "Transformamos Ideas en Experiencias Digitales",
    description: "Somos especialistas en crear soluciones web innovadoras, sistemas personalizados que impulsan el crecimiento exponencial de tu negocio.",
    primaryButton: "Descubre Nuestros Servicios",
    secondaryButton: "Ver Portafolio"
  },
  
  services: {
    badge: "Nuestros Servicios",
    title: "Soluciones Tecnológicas",
    subtitle: "a tu Medida",
    description: "Ofrecemos un amplio rango de servicios de desarrollo para llevar tu proyecto desde la idea hasta la realidad digital con la más alta calidad y tecnología de vanguardia.",
    webDev: {
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y escalables con las últimas tecnologías",
      features: ["React/Next.js", "Node.js", "TypeScript", "API REST"]
    },
    ecommerce: {
      title: "E-commerce",
      description: "Tiendas online completas con sistemas de pago integrados",
      features: ["MercadoPago", "Stripe", "PayPal"]
    },
    backend: {
      title: "Backend & APIs",
      description: "Arquitecturas robustas y APIs escalables para tus aplicaciones",
      features: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    learnMore: "Saber más"
  },
  
  portfolio: {
    badge: "Nuestro Trabajo",
    title: "Proyectos que",
    subtitle: "Transforman Ideas",
    description: "Explora algunos de nuestros proyectos más destacados y descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos digitales con soluciones innovadoras.",
    categories: {
      all: "Todos",
      ecommerce: "E-commerce",
      webapp: "Web App"
    },
    viewProject: "Ver Proyecto",
    viewAll: "Ver Todos los Proyectos",
    featured: "Destacado"
  },
  
  about: {
    badge: "Sobre Nosotros",
    title: "El Equipo Detrás de",
    subtitle: "Nivora Tech",
    description: '"Tu aliado en el camino de la transformación digital".',
    stats: {
      projects: "Proyectos Completados",
      clients: "Clientes Satisfechos",
      experience: "Años de Experiencia",
      coffee: "Tazas de Café"
    },
    story: {
      title: "Nuestra Historia",
      paragraphs: [
        "Nivora Tech nació en 2025 como respuesta a los diversos retos tecnológicos del sector comercial. Fundada por John Guevara, en Nivora Tech estamos comprometidos con impulsar el crecimiento de tu negocio mediante la transformación digital y el uso estratégico de la tecnología.",
        "Creemos que la tecnología debe ser accesible, funcional y hermosa. Cada proyecto que emprendemos es una oportunidad de crear algo extraordinario que genere un impacto positivo real en la vida de las personas."
      ]
    },
    values: {
      title: "Nuestros Valores",
      precision: {
        title: "Precisión",
        description: "Cada línea de código tiene un propósito específico y está optimizada para el rendimiento"
      },
      passion: {
        title: "Pasión",
        description: "Amamos lo que hacemos y se refleja en cada proyecto que entregamos"
      },
      collaboration: {
        title: "Colaboración",
        description: "Trabajamos como un equipo unido con nuestros clientes para alcanzar el éxito"
      }
    },
    team: {
      title: "Conoce al Equipo",
      members: {
        alex: {
          name: "Alex Rivera",
          role: "CEO & Full Stack Developer",
          bio: "Especialista en arquitecturas escalables y liderazgo técnico"
        },
        maria: {
          name: "Maria González",
          role: "UI/UX Designer",
          bio: "Creadora de experiencias digitales memorables y funcionales"
        },
        carlos: {
          name: "Carlos Mendoza",
          role: "Mobile Developer",
          bio: "Experto en desarrollo móvil multiplataforma"
        }
      }
    }
  },
  
  contact: {
    badge: "Hablemos",
    title: "¿Tienes un Proyecto",
    subtitle: "en Mente?",
    description: "Estamos aquí para ayudarte a convertir tu idea en realidad digital. Contáctanos y comencemos a construir algo increíble juntos que transforme tu visión en éxito.",
    infoTitle: "Información de Contacto",
    info: {
      email: {
        title: "Email",
        description: "Respuesta en 24 horas"
      },
      phone: {
        title: "Teléfono",
        description: "Lun - Vie, 9AM - 6PM"
      },
      location: {
        title: "Ubicación",
        value: "Bogota, Colombia",
        description: "También trabajamos remoto"
      }
    },
    consultation: {
      title: "Agenda una Consulta Gratuita",
      description: "30 minutos para discutir tu proyecto sin compromiso"
    },
    response: {
      title: "Respuesta Rápida",
      description: "Te contactamos en menos de 24 horas garantizado"
    },
    form: {
      title: "Envíanos un Mensaje",
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      company: "Empresa",
      companyPlaceholder: "Nombre de tu empresa (opcional)",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte a alcanzar el éxito digital...",
      send: "Enviar Mensaje"
    }
  },
  
  footer: {
    description: "Transformamos ideas en experiencias digitales extraordinarias. Somos tu socio tecnológico para alcanzar el éxito digital que siempre has soñado.",
    services: {
      title: "Servicios",
      webDev: "Desarrollo Web",
      mobileApps: "Apps Móviles",
      ecommerce: "E-commerce",
      uiux: "UI/UX Design"
    },
    resources: {
      title: "Recursos",
      documentation: "Documentación",
      support: "Soporte",
      terms: "Términos",
      privacy: "Privacidad"
    },
    madeWith: "Hecho con",
    location: "en Colombia"
  }
};

// Traducciones en inglés
export const en: Translations = {
  header: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    spanish: "Español",
    english: "English"
  },
  
  hero: {
    badge: "Digital Innovation",
    language: "en",
    title: "Nivora Tech",
    subtitle: "We Transform Ideas into Digital Experiences",
    description: "We specialize in creating innovative web solutions and custom systems that drive exponential business growth.",
    primaryButton: "Discover Our Services",
    secondaryButton: "View Portfolio"
  },
  
  services: {
    badge: "Our Services",
    title: "Technology Solutions",
    subtitle: "Tailored for You",
    description: "We offer a wide range of development services to take your project from idea to digital reality with the highest quality and cutting-edge technology.",
    webDev: {
      title: "Web Development",
      description: "Modern and scalable web applications with the latest technologies",
      features: ["React/Next.js", "Node.js", "TypeScript", "REST API"]
    },
    ecommerce: {
      title: "E-commerce",
      description: "Complete online stores with integrated payment systems",
      features: ["MercadoPago", "Stripe", "PayPal"]
    },
    backend: {
      title: "Backend & APIs",
      description: "Robust architectures and scalable APIs for your applications",
      features: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    learnMore: "Learn More"
  },
  
  portfolio: {
    badge: "Our Work",
    title: "Projects that",
    subtitle: "Transform Ideas",
    description: "Explore some of our most outstanding projects and discover how we've helped our clients achieve their digital goals with innovative solutions.",
    categories: {
      all: "All",
      ecommerce: "E-commerce",
      webapp: "Web App"
    },
    viewProject: "View Project",
    viewAll: "View All Projects",
    featured: "Featured"
  },
  
  about: {
    badge: "About Us",
    title: "The Team Behind",
    subtitle: "Nivora Tech",
    description: '"Your partner in the digital transformation journey".',
    stats: {
      projects: "Completed Projects",
      clients: "Satisfied Clients",
      experience: "Years of Experience",
      coffee: "Cups of Coffee"
    },
    story: {
      title: "Our Story",
      paragraphs: [
        "Nivora Tech was founded in 2025 in response to the diverse technological challenges of the commercial sector. Founded by John Guevara, we are committed to driving your business growth through digital transformation and strategic use of technology.",
        "We believe that technology should be accessible, functional, and beautiful. Every project we undertake is an opportunity to create something extraordinary that generates real positive impact in people's lives."
      ]
    },
    values: {
      title: "Our Values",
      precision: {
        title: "Precision",
        description: "Every line of code has a specific purpose and is optimized for performance"
      },
      passion: {
        title: "Passion",
        description: "We love what we do and it shows in every project we deliver"
      },
      collaboration: {
        title: "Collaboration",
        description: "We work as a united team with our clients to achieve success"
      }
    },
    team: {
      title: "Meet the Team",
      members: {
        alex: {
          name: "Alex Rivera",
          role: "CEO & Full Stack Developer",
          bio: "Specialist in scalable architectures and technical leadership"
        },
        maria: {
          name: "Maria González",
          role: "UI/UX Designer",
          bio: "Creator of memorable and functional digital experiences"
        },
        carlos: {
          name: "Carlos Mendoza",
          role: "Mobile Developer",
          bio: "Expert in cross-platform mobile development"
        }
      }
    }
  },
  
  contact: {
    badge: "Let's Talk",
    title: "Do You Have a Project",
    subtitle: "in Mind?",
    description: "We're here to help you turn your idea into digital reality. Contact us and let's start building something incredible together that transforms your vision into success.",
    infoTitle: "Contact Information",
    info: {
      email: {
        title: "Email",
        description: "Response within 24 hours"
      },
      phone: {
        title: "Phone",
        description: "Mon - Fri, 9AM - 6PM"
      },
      location: {
        title: "Location",
        value: "Bogota, Colombia",
        description: "We also work remotely"
      }
    },
    consultation: {
      title: "Schedule a Free Consultation",
      description: "30 minutes to discuss your project with no commitment"
    },
    response: {
      title: "Quick Response",
      description: "We contact you in less than 24 hours guaranteed"
    },
    form: {
      title: "Send Us a Message",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      company: "Company",
      companyPlaceholder: "Your company name (optional)",
      message: "Message",
      messagePlaceholder: "Tell us about your project, goals and how we can help you achieve digital success...",
      send: "Send Message"
    }
  },
  
  footer: {
    description: "We transform ideas into extraordinary digital experiences. We are your technology partner to achieve the digital success you've always dreamed of.",
    services: {
      title: "Services",
      webDev: "Web Development",
      mobileApps: "Mobile Apps",
      ecommerce: "E-commerce",
      uiux: "UI/UX Design"
    },
    resources: {
      title: "Resources",
      documentation: "Documentation",
      support: "Support",
      terms: "Terms",
      privacy: "Privacy"
    },
    madeWith: "Made with",
    location: "in Colombia"
  }
};

// Hook para usar las traducciones
export const useTranslations = (language: 'es' | 'en' = 'es'): Translations => {
  return language === 'en' ? en : es;
};