import React, { useState } from 'react';
import { Language } from '../constants';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
  lang: Language;
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ 
  url, 
  title, 
  description, 
  lang, 
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);
  const baseUrl = 'https://fernandoramalhobuilder.com.br';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${description}\n\n${fullUrl}`);
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const buttonClass = "flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] border transition-all duration-300 hover:bg-[#FFEE00] hover:text-black hover:border-[#FFEE00]";
  const iconClass = "w-4 h-4";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* Copiar Link */}
      <button
        onClick={handleCopyLink}
        className={`${buttonClass} ${copied ? 'bg-[#58B573] text-black border-[#58B573]' : 'border-neutral-700 text-neutral-400'}`}
        title={copied ? (lang === 'EN' ? 'Copied!' : 'Copiado!') : (lang === 'EN' ? 'Copy link' : 'Copiar link')}
      >
        {copied ? (
          <>
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {lang === 'EN' ? 'Copied!' : 'Copiado!'}
          </>
        ) : (
          <>
            <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            {lang === 'EN' ? 'Copy Link' : 'Copiar Link'}
          </>
        )}
      </button>

      {/* Compartilhar no LinkedIn */}
      <button
        onClick={handleLinkedInShare}
        className={`${buttonClass} border-neutral-700 text-neutral-400`}
        title={lang === 'EN' ? 'Share on LinkedIn' : 'Compartilhar no LinkedIn'}
      >
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        {lang === 'EN' ? 'LinkedIn' : 'LinkedIn'}
      </button>

      {/* Enviar por Email */}
      <button
        onClick={handleEmailShare}
        className={`${buttonClass} border-neutral-700 text-neutral-400`}
        title={lang === 'EN' ? 'Share via Email' : 'Compartilhar por Email'}
      >
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {lang === 'EN' ? 'Email' : 'Email'}
      </button>
    </div>
  );
};

export default ShareButtons;
