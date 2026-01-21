import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ListItem } from '../types';

interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'Article' | 'WebPage' | 'BreadcrumbList' | 'LocalBusiness' | 'FAQPage';
  data?: any;
  item?: ListItem;
  lang?: 'PT' | 'EN';
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  data,
  item,
  lang = 'PT'
}) => {
  const generateStructuredData = () => {
    const baseUrl = 'https://fernandoramalho.vercel.app';

    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Fernando Ramalho",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": lang === 'EN'
            ? "Strategic innovation and AI solutions company specializing in cognitive architecture, digital transformation, and business intelligence."
            : "Empresa de inovação estratégica e soluções de IA especializada em arquitetura cognitiva, transformação digital e inteligência de negócios.",
          "sameAs": [
            "https://linkedin.com/in/fernandolsr/",
            "https://www.behance.net/fernandoramalho1"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-9999-9999",
            "contactType": "customer service",
            "availableLanguage": ["Portuguese", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR",
            "addressLocality": "São Paulo",
            "addressRegion": "SP"
          }
        };

      case 'Service':
        if (!item) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": item.title,
          "description": item.desc,
          "provider": {
            "@type": "Organization",
            "name": "Fernando Ramalho",
            "url": baseUrl
          },
          "serviceType": item.category,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Brazil"
          }
        };

      case 'WebPage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data?.title || "Fernando Ramalho",
          "description": data?.description,
          "url": data?.url || baseUrl,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Fernando Ramalho",
            "url": baseUrl
          },
          "inLanguage": lang === 'EN' ? "en-US" : "pt-BR",
          "dateModified": new Date().toISOString()
        };

      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${baseUrl}${crumb.path}`
          })) || []
        };

      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title,
          "description": data?.description,
          "author": {
            "@type": "Organization",
            "name": "Fernando Ramalho"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Fernando Ramalho",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": data?.datePublished || new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || baseUrl
          }
        };

      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Fernando Ramalho | Inovação Estratégica & IA",
          "image": `${baseUrl}/profile.jpg`,
          "@id": baseUrl,
          "url": baseUrl,
          "telephone": "+55-14-99861-8547",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Paulista",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01311-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.5614,
            "longitude": -46.6559
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://linkedin.com/in/fernandolsr/",
            "https://www.instagram.com/fernando.ramalhooficial/"
          ]
        };

      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.questions?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || []
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
