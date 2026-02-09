import { useState } from 'react';
import { Heart, Users, Star, Mail, Phone, ChevronRight, Menu, X, Coins, BookOpen, CheckCircle, Download } from 'lucide-react';
import graceImage from './assets/GRACE 1.png';
import logoImage from './assets/logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white font-quicksand text-brand-dark">

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={logoImage} alt="Inspirando Padres Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-brand-dark/80 hover:text-brand-mint font-semibold transition-colors">Inicio</a>
              <a href="#nosotros" className="text-brand-dark/80 hover:text-brand-mint font-semibold transition-colors">Nosotros</a>
              <a href="#programa" className="text-brand-dark/80 hover:text-brand-mint font-semibold transition-colors">Programa</a>
              <button className="bg-brand-pink text-white px-6 py-2 rounded-full font-bold hover:bg-brand-pink/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                Unirme Ahora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-100 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#inicio" className="block px-3 py-2 text-brand-dark hover:text-brand-mint font-semibold">Inicio</a>
              <a href="#nosotros" className="block px-3 py-2 text-brand-dark hover:text-brand-mint font-semibold">Nosotros</a>
              <a href="#programa" className="block px-3 py-2 text-brand-dark hover:text-brand-mint font-semibold">Programa</a>
              <button className="w-full mt-2 bg-brand-pink text-white px-6 py-2 rounded-full font-bold">
                Unirme Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-mint/10 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-brand-yellow/20 px-4 py-2 rounded-full text-brand-dark font-bold text-sm border border-brand-yellow/30">
                <Star className="w-4 h-4 text-brand-yellow fill-current" />
                <span>Educación Financiera para Familias</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-lilita leading-tight text-brand-dark">
                Construye la familia que siempre <span className="text-brand-pink">soñaste</span>
              </h1>
              <p className="text-xl text-brand-dark/80 leading-relaxed max-w-lg">
                Herramientas prácticas, amorosas y efectivas para criar hijos felices, seguros y emocionalmente sanos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark/90 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center group">
                  Comenzar Mi Viaje
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-brand-dark border-2 border-brand-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-mint hover:text-brand-mint transition-colors flex items-center justify-center">
                  Saber Más
                </button>
              </div>

              <div className="pt-8 flex items-center space-x-8 text-sm text-brand-dark/60 font-semibold">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-brand-yellow fill-current mr-2" />
                  <span>4.9/5 Calificación</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-brand-mint mr-2" />
                  <span>+1000 Familias Felices</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-mint/20 rounded-full blur-3xl opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img
                  src={graceImage}
                  alt="Grace Cardona - Inspirando Padres"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 to-transparent p-8">
                  <p className="text-white font-medium text-lg">"La crianza es un viaje de amor y aprendizaje continuo."</p>
                  <p className="text-brand-yellow mt-2 font-bold">- Grace Cardona, Fundadora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="programa" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-lilita mb-4 text-brand-dark">Nuestros Pilares</h2>
            <p className="text-lg text-brand-dark/70 font-medium">Un enfoque único que une la conciencia emocional con la responsabilidad financiera.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-brand-pink" />,
                title: "Conexión Emocional",
                desc: "Aprende a conectar con tus hijos desde la empatía, fortaleciendo el vínculo afectivo día a día.",
                color: "bg-brand-pink/5"
              },
              {
                icon: <Coins className="w-8 h-8 text-brand-yellow" />,
                title: "Inteligencia Financiera",
                desc: "Equipa a tus hijos con herramientas prácticas para el manejo del dinero desde una edad temprana.",
                color: "bg-brand-yellow/5"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-brand-mint" />,
                title: "Crianza Consciente",
                desc: "Establece límites claros y respetuosos, fomentando la autodisciplina y el respeto mutuo.",
                color: "bg-brand-mint/5"
              }
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.color} p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-dark/5 group`}>
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-lilita mb-3 text-brand-dark">{feature.title}</h3>
                <p className="text-brand-dark/70 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-mint/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-lilita mb-6">¿Lista para transformar tu familia?</h2>
          <p className="text-xl text-white/80 mb-8 font-medium">Únete a nuestra comunidad de padres conscientes y empieza hoy mismo el cambio que deseas ver en tu hogar.</p>
          <button className="bg-brand-pink text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-brand-pink shadow-2xl hover:scale-105 transition-all">
            ¡Quiero Inscribirme!
          </button>
        </div>
      </section>

      {/* Leads / Ebook Section */}
      <section id="ebook" className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Ebook Visual Mockup */}
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-brand-mint/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
              <div className="relative w-64 h-80 bg-gradient-to-br from-brand-dark to-brand-mint p-1 rounded-r-2xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 border-l-8 border-brand-dark/50">
                <div className="h-full w-full bg-brand-dark rounded-r-xl p-6 flex flex-col justify-between border-l border-white/10">
                  <div>
                    <img src={logoImage} alt="" className="h-6 w-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-lilita leading-tight text-brand-mint mb-4">
                      7 Pasos para Enseñar el Valor del Ahorro
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="h-1 w-10 bg-brand-yellow rounded-full"></div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Guía Gratuita de Crianza</p>
                  </div>
                </div>
              </div>
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-brand-yellow p-3 rounded-full shadow-lg animate-bounce">
                <Download className="w-6 h-6 text-brand-dark" />
              </div>
            </div>

            {/* Content & Form */}
            <div className="space-y-8">
              {!isSubmitted ? (
                <>
                  <div className="space-y-4 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-lilita text-brand-mint">¡Regalo Especial para Ti!</h2>
                    <p className="text-xl text-white/80 font-medium leading-relaxed">
                      Descarga gratis nuestra guía exclusiva y empieza a transformar la relación de tus hijos con el dinero hoy mismo.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Nombre Completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-mint transition-colors font-semibold"
                      />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-mint transition-colors font-semibold"
                      />
                    </div>
                    <input
                      required
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp (con código de país)"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-mint transition-colors font-semibold"
                    />
                    <button
                      type="submit"
                      className="w-full bg-brand-pink text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-pink/90 transition-all shadow-xl active:scale-95 shadow-brand-pink/20"
                    >
                      Descargar Guía Ahora
                    </button>
                    <p className="text-xs text-center lg:text-left text-white/40 font-medium">
                      Respetamos tu privacidad. Tus datos están seguros con nosotros.
                    </p>
                  </form>
                </>
              ) : (
                <div className="bg-white/5 border border-brand-mint/20 rounded-3xl p-10 text-center space-y-6 animate-in fade-in zoom-in duration-500 scale-100 origin-center">
                  <div className="w-20 h-20 bg-brand-mint rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-mint/20">
                    <CheckCircle className="w-12 h-12 text-brand-dark" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-lilita text-brand-mint">¡Gracias por tu interés!</h3>
                    <p className="text-lg text-white/80 font-medium leading-relaxed">
                      Hola **{formData.name.split(' ')[0]}**, hemos enviado el enlace de descarga a **{formData.email}**.
                    </p>
                  </div>
                  <p className="text-brand-yellow font-bold animate-pulse text-lg">
                    ¡Revisa tu bandeja de entrada y spam!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-white/30 hover:text-white text-xs font-bold transition-all uppercase tracking-tighter"
                  >
                    Volver al formulario
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-brand-dark/60 py-16 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src={logoImage} alt="Inspirando Padres Logo" className="h-10 w-auto mb-6" />
              <p className="text-lg max-w-sm font-medium">Acompañandote en el viaje de criar seres humanos maravillosos, conscientes y financieramente preparados.</p>
            </div>
            <div>
              <h4 className="text-brand-dark font-bold text-lg mb-6">Contacto</h4>
              <ul className="space-y-4 font-semibold">
                <li className="flex items-center hover:text-brand-mint transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 mr-3 text-brand-mint" />
                  contacto@inspirandopadres.com
                </li>
                <li className="flex items-center hover:text-brand-mint transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 mr-3 text-brand-mint" />
                  +57 320 477 8082
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-dark font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 font-semibold">
                <li className="hover:text-brand-pink transition-colors cursor-pointer">Política de Privacidad</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">Términos y Condiciones</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-100 text-center font-bold text-sm">
            © {new Date().getFullYear()} Inspirando Padres. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
