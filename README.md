import React, { useState } from 'react';
import { Download, MapPin, Users, TrendingUp, ArrowRight, Smartphone, Mail } from 'lucide-react';

export default function BobimoveLanding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    type: 'motorista',
    city: 'Jacuí'
  });

  const whatsappNumber = '553597004763';
  const playStoreMotorista = 'https://play.google.com/store/apps/details?id=br.com.bobimovemob.driver';
  const playStorePassageiro = 'https://play.google.com/store/apps/details?id=br.com.bobimovemob.passenger';
  const appStorePassageiro = 'https://apps.apple.com/br/app/bobi-move-passageiro/id6759625021';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Olá! Meu nome é ${formData.fullName}. Sou ${formData.type === 'motorista' ? 'motorista' : 'passageiro'} em ${formData.city}. Meu e-mail: ${formData.email}. Gostaria de conhecer mais sobre Bobimove.`;
    
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ fullName: '', email: '', whatsapp: '', type: 'motorista', city: 'Jacuí' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-red-50 text-gray-900 overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-b from-purple-300 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-t from-red-300 opacity-30 blur-3xl rounded-full"></div>
      </div>

      <header className="border-b border-purple-200 backdrop-blur-sm sticky top-0 z-50 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-red-600 rounded-lg flex items-center justify-center font-bold text-lg text-white">
              B
            </div>
            <span className="font-bold text-xl text-gray-900">BOBIMOVE</span>
          </div>
          <a href="#formulario" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-red-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-red-700 transition">
            Cadastrar
          </a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Mobilidade
            </span>
            <br />
            <span className="text-gray-900">Urbana</span>
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Conectamos motoristas e passageiros em cidades do interior com transparência total. Comissão fixa 20% para motoristas, preços justos para passageiros.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-300 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-700 mb-2">20%</div>
              <p className="text-sm text-gray-700">Comissão fixa para motoristas</p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-50 border border-red-300 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-700 mb-2">0</div>
              <p className="text-sm text-gray-700">Taxas escondidas</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 border border-pink-300 rounded-lg p-4">
              <div className="text-2xl font-bold text-pink-700 mb-2">∞</div>
              <p className="text-sm text-gray-700">Trabalhe quando quiser</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-purple-100 to-red-100 border border-purple-300 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3 pb-6 border-b border-purple-300">
              <Smartphone className="w-6 h-6 text-purple-700" />
              <h3 className="text-lg font-semibold text-gray-900">Serviços Disponíveis</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">🚗</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">BobiEconômico</p>
                  <p className="text-sm text-gray-700">Corridas econômicas em carros populares</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">🏎️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">BobiConforto</p>
                  <p className="text-sm text-gray-700">Sedans e SUVs para maior conforto</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">🏍️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">BobiMoto</p>
                  <p className="text-sm text-gray-700">Corridas rápidas em motos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">📦</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">BobiFrete</p>
                  <p className="text-sm text-gray-700">Transporte de mercadorias (15% comissão)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Estamos em Expansão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Jacuí-MG', 'São Sebastião do Paraíso-MG', 'Leme-SP'].map((city, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-100 to-red-100 border border-purple-300 rounded-xl p-6 hover:border-purple-500 transition text-center">
              <MapPin className="w-8 h-8 text-purple-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900">{city}</h3>
              <p className="text-sm text-gray-700 mt-2">Operacional agora</p>
            </div>
          ))}
        </div>
      </section>

      <section id="formulario" className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-purple-100 to-red-100 border border-purple-300 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Comece Agora</h2>
          <p className="text-gray-700 mb-8">Preencha seus dados e receba os links dos apps via WhatsApp</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Nome Completo</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="João Silva Santos"
                required
                className="w-full bg-white border border-purple-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-600 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="w-full bg-white border border-purple-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-600 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(35) 99999-9999"
                required
                className="w-full bg-white border border-purple-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-600 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Você é:</label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`border-2 rounded-lg p-4 cursor-pointer transition ${formData.type === 'motorista' ? 'border-purple-700 bg-purple-200' : 'border-purple-300 bg-white'}`}>
                  <input
                    type="radio"
                    name="type"
                    value="motorista"
                    checked={formData.type === 'motorista'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="font-semibold text-gray-900">Motorista</span>
                </label>
                <label className={`border-2 rounded-lg p-4 cursor-pointer transition ${formData.type === 'passageiro' ? 'border-red-700 bg-red-200' : 'border-red-300 bg-white'}`}>
                  <input
                    type="radio"
                    name="type"
                    value="passageiro"
                    checked={formData.type === 'passageiro'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="font-semibold text-gray-900">Passageiro</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Sua Cidade</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-white border border-purple-300 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-600 focus:outline-none transition"
              >
                <option value="Jacuí">Jacuí-MG</option>
                <option value="São Sebastião do Paraíso">São Sebastião do Paraíso-MG</option>
                <option value="Leme">Leme-SP</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 group"
            >
              <span>Abrir WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            <p className="text-center text-xs text-gray-700">
              Seus dados serão compartilhados via WhatsApp com a equipe Bobimove
            </p>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-purple-100 to-red-100 border-y border-purple-300">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Baixe o App Agora</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Google Play</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={playStoreMotorista} target="_blank" rel="noopener noreferrer" className="bg-white border border-purple-300 rounded-xl p-6 hover:border-purple-600 hover:bg-purple-50 transition flex items-center justify-center gap-3 group">
                <Download className="w-6 h-6 text-purple-700 group-hover:scale-110 transition" />
                <div className="text-center">
                  <p className="text-sm text-gray-700">Para</p>
                  <p className="font-bold text-gray-900">Motorista</p>
                </div>
              </a>
              <a href={playStorePassageiro} target="_blank" rel="noopener noreferrer" className="bg-white border border-purple-300 rounded-xl p-6 hover:border-purple-600 hover:bg-purple-50 transition flex items-center justify-center gap-3 group">
                <Download className="w-6 h-6 text-purple-700 group-hover:scale-110 transition" />
                <div className="text-center">
                  <p className="text-sm text-gray-700">Para</p>
                  <p className="font-bold text-gray-900">Passageiro</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Apple Store</h3>
            <div className="flex justify-center">
              <a href={appStorePassageiro} target="_blank" rel="noopener noreferrer" className="bg-white border border-red-300 rounded-xl p-6 hover:border-red-600 hover:bg-red-50 transition flex items-center gap-3 group w-full md:w-1/2">
                <Download className="w-6 h-6 text-red-700 group-hover:scale-110 transition" />
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-700">Para</p>
                  <p className="font-bold text-gray-900">Passageiro</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-700 border-t border-purple-300">
        <p>© 2026 Bobimove - Sua mobilidade, seu lucro</p>
      </footer>
    </div>
  );
}


================================================================================
FIM DO CÓDIGO - PRONTO PARA COLAR NO GitHub!
================================================================================
