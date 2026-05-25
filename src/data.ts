// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Serviços',
    url: '#services',
  },
  {
    label: 'Projetos',
    url: '#works',
  },
  {
    label: 'Sobre',
    url: '#about-me-section',
  },
  {
    label: 'Depoimentos',
    url: '#testimonials-section',
  },
  {
    label: 'Contato',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Início',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/fineart.autoral',
  },
  {
    label: 'Pinterest',
    url: 'https://pinterest.com/fineartautoral',
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/5511999999999',
  },
  {
    label: 'E-mail',
    url: 'mailto:contato@galeriafineart.com',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Template do Figma',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
  },
];

const heroText =
  'Fotografia Autoral Fine Art — Esculpindo o silêncio do espaço e a poesia da luz. Tiragens limitadas impressas em pigmento mineral sobre papel de algodão para projetos de interiores refinados.';

const locationPlace = `2°29'04.0"S 43°07'31.0"W`;
const locationCountry = 'Maranhão, Brasil';

// cal.com (neutralizado)
const dataCalNamespace = '';
const dataCalLink = '';
const dataCalConfig = '{}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
