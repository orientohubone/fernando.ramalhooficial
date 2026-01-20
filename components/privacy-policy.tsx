import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-8 md:px-12 bg-black/90 backdrop-blur border-b border-neutral-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/en')}
            className="group flex items-center gap-4"
          >
            <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">BACK</span>
          </button>
          <div className="text-white font-black text-xl">FERNANDO RAMALHO</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-24">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#58B573]" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">
              LEGAL DOCUMENT
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.8]">
            Privacy <br />
            <span className="text-[#FFEE00]">Policy</span>
          </h1>
          
          <p className="text-sm text-neutral-500">
            Last updated: January 20, 2026
          </p>

          <div className="space-y-12 py-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. General Information</h2>
              <p className="text-neutral-300 leading-relaxed">
                This Privacy Policy describes how Fernando Ramalho collects, uses and protects your personal information when you visit our website fernando.ramalhooficial and use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Information Collected</h2>
              <p className="text-neutral-300 leading-relaxed">
                We collect information you provide directly (name, email, phone) and information collected automatically (IP, browser, visit time).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Use of Information</h2>
              <p className="text-neutral-300 leading-relaxed">
                We use your information to: provide services, improve experience, send relevant communications, analyze site usage and comply with legal obligations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Sharing</h2>
              <p className="text-neutral-300 leading-relaxed">
                We do not sell your information. We only share with essential service providers and when required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
              <p className="text-neutral-300 leading-relaxed">
                You have the right to access, correct, delete and port your data. Contact us at fernando@orientohub.com.br.
              </p>
            </section>
          </div>

          {/* Contact Section */}
          <section className="mt-20 p-8 border border-neutral-800 rounded-xl bg-neutral-950/50">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <strong>Email:</strong> fernando@orientohub.com.br
              </p>
              <p className="text-neutral-300">
                <strong>WhatsApp:</strong> +55 14 99861-8547
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
