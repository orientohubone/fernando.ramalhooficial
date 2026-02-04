import React, { useState } from 'react';
import { FAQItem } from '../faqData';

interface FAQSectionProps {
  faqs: FAQItem[];
  lang?: 'PT' | 'EN';
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, lang = 'PT' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 text-center">
          {lang === 'EN' ? 'Frequently Asked Questions' : 'Perguntas Frequentes'}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#58B573]/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-[#050505] hover:bg-[#0a0a0a] transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-sm md:text-base font-medium text-white pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-[#58B573] transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  <span className="text-[#58B573] text-lg font-black">+</span>
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-[#0a0a0a] border-t border-neutral-800">
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {faqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">
              {lang === 'EN' ? 'No FAQs available for this service.' : 'Nenhuma FAQ disponível para este serviço.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
