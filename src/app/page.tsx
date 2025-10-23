// app/page.tsx
'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Menu, X, Calendar, Building2, Code, Database, Cloud, Cpu, Network, BookOpen, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  const tags = ["React JS", "Node Js", "NextJS"];
  const roles = ['Développeuse Full-Stack', 'Développeuse Motivante'];

  // Charger le thème depuis localStorage au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
    }
  }, []);

  // Sauvegarder le thème dans localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Génération Automatique d'Examens",
      tech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      year: "2025",
      description: "Plateforme permettant aux enseignants de générer automatiquement des examens à partir d'une banque de questions ou de nouvelles questions",
      icon: <Code className="w-6 h-6" />,
      videoUrl: "/videos/exam-generation.mp4" // Mettre le nom de votre vidéo
    },
    {
      title: "Application Mobile ESSAT News",
      tech: "Java, XML (Android natif)",
      year: "2024",
      description: "Application mobile permettant de consulter, publier et gérer les actualités de l'école ESSAT avec interface fluide et base de données en temps réel",
      icon: <Building2 className="w-6 h-6" />,
    }
  ];

  const skills = [
    {
      category: "Développement logiciel",
      icon: <Code className="w-5 h-5" />,
      items: "Java, C++, Python, PHP, React.js, Node.js, Angular, Spring, Flutter, Android"
    },
    {
      category: "Bases de données",
      icon: <Database className="w-5 h-5" />,
      items: "Oracle, MySQL, Firebase, MongoDB"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      items: "Microsoft Azure"
    },
    {
      category: "IoT & Embarqué",
      icon: <Cpu className="w-5 h-5" />,
      items: "Raspberry Pi"
    },
    {
      category: "Réseaux & Systèmes",
      icon: <Network className="w-5 h-5" />,
      items: "Windows, Linux, Cisco Packet Tracer, configuration routeurs"
    },
    {
      category: "Méthodologies",
      icon: <BookOpen className="w-5 h-5" />,
      items: "Scrum, Méthodes Agiles"
    }
  ];

  const education = [
    {
      school: "École Supérieure des Sciences Appliquées et de la Technologie Privée",
      degree: "Cycle ingénieur informatique - Génie Logiciel",
      period: "09/2023 - Présent",
      location: "Gabès, Tunisie"
    },
    {
      school: "École Supérieure des Sciences Appliquées et de la Technologie Privée",
      degree: "Cycle préparatoire MP",
      period: "2023",
      location: "Gabès, Tunisie"
    },
    {
      school: "Lycée Ibn Khaldoun",
      degree: "Baccalauréat sciences expérimentales",
      period: "2019",
      location: "Gabès, Tunisie"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDarkMode ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/20' : 'bg-white/90 backdrop-blur-md shadow-lg') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-blue-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              AJ
            </div>

            <div className="flex items-center gap-6">
              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'projects', 'skills', 'education', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? (isDarkMode ? 'text-purple-400 font-semibold' : 'text-blue-600 font-semibold')
                        : (isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-blue-600')
                    }`}
                  >
                    {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'projects' ? 'Projets' : section === 'skills' ? 'Compétences' : section === 'education' ? 'Formation' : 'Contact'}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className={isDarkMode ? 'md:hidden text-gray-300' : 'md:hidden text-gray-700'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg`}>
            <div className="px-4 py-6 space-y-4">
              {['home', 'about', 'projects', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 ${isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'projects' ? 'Projets' : section === 'skills' ? 'Compétences' : section === 'education' ? 'Formation' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'}`}>
              Jridi Amal
            </h1>
            <div className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4">
                Étudiante en <span className={`font-semibold ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>Génie Logiciel</span> avec une expertise dans 
                React JS, Next JS, Node JS, et Tailwind CSS.
              </p>
              <p className="mb-4">
                Créez des applications Web modernes, complètes et centrées sur l'utilisateur avec des technologies de pointe
              </p>
              <div className={`flex flex-wrap gap-3 p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-b from-[#0b0b2a] to-[#050517]' : 'bg-white/50 backdrop-blur-sm'}`}>
                {tags.map((tag, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActive(tag)}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: active === tag ? 1.1 : 1,
                      backgroundColor: active === tag ? (isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(59,130,246,0.2)") : (isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)"),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                    className={`px-5 py-2 rounded-full border text-sm font-medium backdrop-blur-sm transition-all ${isDarkMode ? 'border-white/20 text-white' : 'border-blue-200 text-gray-700'}`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
              <div className="mt-6">
                <span className={`font-semibold text-2xl ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
             <a
  href="/CV_Amal_Jridi.pdf"
  download="Amal_Jridi_CV.pdf"
  className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all ${
    isDarkMode
      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
  }`}
>
  <Mail className="w-5 h-5" />
  Télécharger le CV
</a>

              <a 
                href="#projects" 
                className={`inline-flex items-center gap-2 border-2 px-8 py-3 rounded-lg transition-all ${isDarkMode ? 'border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
              >
                <Code className="w-5 h-5" />
                Voir les projets
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse ${isDarkMode ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 'bg-gradient-to-br from-blue-400 to-indigo-400'}`}></div>
              <div className={`relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 shadow-2xl ${isDarkMode ? 'border-purple-500/50 shadow-purple-500/50' : 'border-blue-500/50 shadow-blue-500/50'}`}>
                <div className={`w-full h-full flex items-center justify-center text-8xl font-bold ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' : 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'}`}>
                  AJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-blue-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
            À Propos
          </h2>
          <div className={`rounded-2xl shadow-xl p-8 md:p-12 border ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-purple-500/10 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`text-2xl font-light mb-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                  Bonjour 👋
                </h3>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Développeuse Web Full Stack avec une expertise en React.js, Next.js, Tailwind CSS, Node.js, Angular et Spring.
                </p>
                <p className={`text-lg leading-relaxed mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  J'ai également de l'expérience dans l'hébergement cloud (Azure) et des connaissances en intelligence artificielle, machine learning et deep learning.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity ${isDarkMode ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 'bg-gradient-to-br from-blue-400 to-indigo-400'}`}></div>
                  <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 shadow-2xl ${isDarkMode ? 'border-purple-500/50 shadow-purple-500/30' : 'border-blue-500/50 shadow-blue-500/30'}`}>
                    <div className={`w-full h-full flex items-center justify-center text-6xl font-bold ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' : 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'}`}>
                      AJ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${isDarkMode ? '' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-blue-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
            Projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-purple-500/10 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full"
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg text-white ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.year}</span>
                    </div>
                  </div>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                  <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className={`font-semibold ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>Technologies:</span> {project.tech}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-blue-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
            Compétences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-purple-500/10 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg text-white ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'}`}>
                    {skill.icon}
                  </div>
                  <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{skill.category}</h3>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-4 ${isDarkMode ? '' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-blue-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
            Formation
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className={`rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-purple-500/10 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{edu.degree}</h3>
                    <p className={`font-semibold mb-2 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>{edu.school}</p>
                    <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 mt-4 md:mt-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 to-blue-900' : 'bg-gradient-to-br from-blue-600 to-indigo-600'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Contactez-moi
          </h2>
          <p className={`text-xl mb-12 ${isDarkMode ? 'text-purple-100' : 'text-blue-100'}`}>
            N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:amaljridi66@gmail.com" className={`rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white'}`}>
              <Mail className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Email</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>amaljridi66@gmail.com</p>
            </a>
            <a href="tel:+21628615028" className={`rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white'}`}>
              <Phone className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Téléphone</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+216 28 615 028</p>
            </a>
            <a href="https://www.linkedin.com/in/amal-jridi-a40879267/" target="_blank" rel="noopener noreferrer" className={`rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white'}`}>
              <Linkedin className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>LinkedIn</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Amal Jridi</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Jridi Amal. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}