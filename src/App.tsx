import { useState } from 'react';
import { Heart, Users, Star, Mail, Phone, ChevronRight, Menu, X } from 'lucide-react';
import graceImage from './assets/GRACE 1.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-rose-600">Inspirando Padres</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-stone-600 hover:text-rose-600 transition-colors">Inicio</a>
              <a href="#nosotros" className="text-stone-600 hover:text-rose-600 transition-colors">Nosotros</a>
              <a href="#programa" className="text-stone-600 hover:text-rose-600 transition-colors">Programa</a>
              <button className="bg-rose-600 text-white px-6 py-2 rounded-full font-medium hover:bg-rose-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Unirme Ahora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-100">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#inicio" className="block px-3 py-2 text-stone-600 hover:text-rose-600">Inicio</a>
              <a href="#nosotros" className="block px-3 py-2 text-stone-600 hover:text-rose-600">Nosotros</a>
              <a href="#programa" className="block px-3 py-2 text-stone-600 hover:text-rose-600">Programa</a>
              <button className="w-full mt-2 bg-rose-600 text-white px-6 py-2 rounded-full font-medium">
                Unirme Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full text-rose-700 font-medium text-sm">
                <Heart className="w-4 h-4 fill-current" />
                <span>Crianza Respetuosa y Consciente</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-stone-900">
                Construye la familia que siempre <span className="text-rose-600">soñaste</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                Herramientas prácticas, amorosas y efectivas para criar hijos felices, seguros y emocionalmente sanos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition-colors shadow-xl hover:shadow-2xl flex items-center justify-center">
                  Comenzar Mi Viaje
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white text-stone-600 border-2 border-stone-200 px-8 py-4 rounded-full font-bold text-lg hover:border-rose-200 hover:text-rose-600 transition-colors flex items-center justify-center">
                  Saber Más
                </button>
              </div>

              <div className="pt-8 flex items-center space-x-8 text-sm text-stone-500">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                  <span>4.9/5 Calificación</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-rose-500 mr-2" />
                  <span>+1000 Familias Felices</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={graceImage}
                  alt="Grace - Inspirando Padres"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <p className="text-white font-medium text-lg">"La crianza es un viaje de amor y aprendizaje continuo."</p>
                  <p className="text-rose-200 mt-2 font-bold">- Grace, Fundadora</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">¿Qué Aprenderás?</h2>
            <p className="text-lg text-stone-600">Nuestro enfoque se basa en tres pilares fundamentales para transformar la dinámica familiar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-rose-500" />,
                title: "Conexión Emocional",
                desc: "Aprende a conectar con tus hijos desde la empatía y el entendimiento mutuo, fortaleciendo el vínculo día a día."
              },
              {
                icon: <StartIcon />,
                title: "Disciplina Positiva",
                desc: "Establece límites claros y respetuosos sin recurrir a gritos ni castigos, fomentando la autodisciplina."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Armonía Familiar",
                desc: "Crea un ambiente de paz y cooperación en casa donde cada miembro se sienta valorado y escuchado."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-rose-100 group">
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-stone-900">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Lista para transformar tu familia?</h2>
          <p className="text-xl text-rose-100 mb-8">Únete a nuestra comunidad de padres conscientes y empieza hoy mismo el cambio que deseas ver en tu hogar.</p>
          <button className="bg-white text-rose-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-colors shadow-2xl">
            ¡Quiero Inscribirme!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold text-white mb-4 block">Inspirando Padres</span>
              <p className="mb-4">Acompañandote en el viaje de criar seres humanos maravillosos.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> contacto@inspirandopadres.com</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +57 300 123 4567</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            © {new Date().getFullYear()} Inspirando Padres. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

function StartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
  )
}

export default App;
