import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../constants';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  lang: Language;
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ lang, items }) => {
  const location = useLocation();

  // Generate breadcrumb items automatically if not provided
  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
    if (items) return items;

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems: BreadcrumbItem[] = [];
    
    // Add home
    breadcrumbItems.push({
      name: lang === 'EN' ? 'Home' : 'Início',
      path: lang === 'EN' ? '/en' : '/'
    });

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Skip language prefix
      if (segment === 'en') return;
      
      // Convert segment to readable name
      let name = segment.replace(/-/g, ' ');
      name = name.charAt(0).toUpperCase() + name.slice(1);
      
      // Special cases for Portuguese
      if (lang === 'PT') {
        switch (segment) {
          case 'capacidades':
            name = 'Capacidades';
            break;
          case 'capacidade':
            name = 'Capacidade';
            break;
          case 'sobre':
            name = 'Sobre';
            break;
          case 'relatorios':
            name = 'Relatórios';
            break;
          case 'relatorio':
            name = 'Relatório';
            break;
          case 'contato':
            name = 'Contato';
            break;
          case 'filosofia':
            name = 'Filosofia';
            break;
          case 'arquitetura-cognitiva':
            name = 'Arquitetura Cognitiva';
            break;
          case 'ia':
            name = 'IA';
            break;
        }
      } else {
        // English cases
        switch (segment) {
          case 'capacidades':
            name = 'Capabilities';
            break;
          case 'capacidade':
            name = 'Capability';
            break;
          case 'sobre':
            name = 'About';
            break;
          case 'relatorios':
            name = 'Reports';
            break;
          case 'relatorio':
            name = 'Report';
            break;
          case 'contato':
            name = 'Contact';
            break;
          case 'filosofia':
            name = 'Philosophy';
            break;
          case 'arquitetura-cognitiva':
            name = 'Cognitive Architecture';
            break;
          case 'ia':
            name = 'AI';
            break;
        }
      }
      
      breadcrumbItems.push({
        name,
        path: currentPath
      });
    });

    return breadcrumbItems;
  };

  const breadcrumbItems = generateBreadcrumbItems();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav 
      className="flex items-center space-x-2 text-sm text-neutral-500 mb-8"
      aria-label="Breadcrumb navigation"
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-neutral-700" aria-hidden="true">
                /
              </span>
            )}
            
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-neutral-400 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
