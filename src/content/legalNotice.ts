import { Localized } from '../types';

export const LEGAL_COMPANY = {
  name: 'Byroad Adventures S.L.',
  nif: 'B-XXXXXXXX',
  address: { es: 'Zaragoza, España', en: 'Zaragoza, Spain' },
  email: 'info@byroadadventures.com',
  website: 'https://pablomartinezromero-sketch.github.io/byroad-adventure/',
  registry: {
    es: 'Inscrita en el Registro Mercantil de Zaragoza.',
    en: 'Registered in the Commercial Registry of Zaragoza.',
  },
};

export interface LegalSection {
  id: string;
  title: Localized;
  paragraphs: Localized<string[]>;
}

export const LEGAL_NOTICE_SECTIONS: LegalSection[] = [
  {
    id: 'identificacion',
    title: { es: '1. Datos identificativos', en: '1. Identification details' },
    paragraphs: {
      es: [
        'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos del titular de este sitio web:',
        `Denominación social: ${LEGAL_COMPANY.name}`,
        `NIF: ${LEGAL_COMPANY.nif}`,
        `Domicilio social: ${LEGAL_COMPANY.address.es}`,
        `Correo electrónico de contacto: ${LEGAL_COMPANY.email}`,
        `Sitio web: ${LEGAL_COMPANY.website}`,
        LEGAL_COMPANY.registry.es,
      ],
      en: [
        'In compliance with Article 10 of Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), users are informed of the following website owner details:',
        `Company name: ${LEGAL_COMPANY.name}`,
        `Tax ID (NIF): ${LEGAL_COMPANY.nif}`,
        `Registered address: ${LEGAL_COMPANY.address.en}`,
        `Contact email: ${LEGAL_COMPANY.email}`,
        `Website: ${LEGAL_COMPANY.website}`,
        LEGAL_COMPANY.registry.en,
      ],
    },
  },
  {
    id: 'objeto',
    title: { es: '2. Objeto', en: '2. Purpose' },
    paragraphs: {
      es: [
        'El presente Aviso Legal regula el acceso, navegación y uso del sitio web de Byroad Adventures, así como las responsabilidades derivadas de la utilización de sus contenidos y servicios.',
        'El acceso a este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las disposiciones incluidas en este Aviso Legal, sin perjuicio de las condiciones particulares que pudieran aplicarse a determinados servicios ofrecidos a través del sitio.',
      ],
      en: [
        'This Legal Notice governs access to, browsing of, and use of the Byroad Adventures website, as well as liability arising from the use of its content and services.',
        'Accessing this website grants you user status and implies full and unreserved acceptance of the provisions set out herein, without prejudice to any specific terms that may apply to certain services offered through the site.',
      ],
    },
  },
  {
    id: 'uso',
    title: { es: '3. Condiciones de uso', en: '3. Terms of use' },
    paragraphs: {
      es: [
        'El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la ley, el presente Aviso Legal, la moral, las buenas costumbres y el orden público.',
        'Queda prohibido el uso del sitio web con fines ilícitos o lesivos contra los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización del sitio.',
        'La información sobre rutas, precios orientativos, alojamientos y servicios tiene carácter meramente informativo y no constituye, por sí sola, una oferta contractual vinculante hasta la confirmación expresa por parte de Byroad Adventures.',
      ],
      en: [
        'Users agree to use the website, its content, and services in accordance with the law, this Legal Notice, morality, good customs, and public order.',
        'Use of the website for unlawful purposes or in ways that harm third-party rights and interests, or that may damage, disable, overload, impair, or hinder normal use of the site, is prohibited.',
        'Information on routes, indicative prices, accommodations, and services is provided for guidance only and does not constitute a binding contractual offer until expressly confirmed by Byroad Adventures.',
      ],
    },
  },
  {
    id: 'propiedad',
    title: { es: '4. Propiedad intelectual e industrial', en: '4. Intellectual and industrial property' },
    paragraphs: {
      es: [
        'Todos los contenidos del sitio web (textos, fotografías, logotipos, iconos, imágenes, diseño gráfico, código fuente, software, marcas y nombres comerciales) son titularidad de Byroad Adventures S.L. o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional en materia de propiedad intelectual e industrial.',
        'Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, sin autorización expresa y por escrito del titular.',
        'Las imágenes de terceros utilizadas en el sitio pueden estar sujetas a sus propias licencias. Las fotografías de rutas y alojamientos se emplean con fines informativos y promocionales de las experiencias ofrecidas.',
      ],
      en: [
        'All website content (text, photographs, logos, icons, images, graphic design, source code, software, trademarks, and trade names) is owned by Byroad Adventures S.L. or third parties who have authorized its use, and is protected under Spanish and international intellectual and industrial property law.',
        'Reproduction, distribution, public communication, transformation, or any other form of exploitation, in whole or in part, without the express written authorization of the rights holder is prohibited.',
        'Third-party images used on the site may be subject to their own licenses. Route and accommodation photographs are used for informational and promotional purposes related to the experiences offered.',
      ],
    },
  },
  {
    id: 'responsabilidad',
    title: { es: '5. Exclusión de responsabilidad', en: '5. Limitation of liability' },
    paragraphs: {
      es: [
        'Byroad Adventures S.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso, uso o imposibilidad de acceso al sitio web, ni de la falta de disponibilidad, continuidad o calidad del servicio.',
        'No garantizamos la ausencia de errores en los contenidos ni que estos se encuentren permanentemente actualizados, aunque se adoptarán las medidas razonables para corregir errores y mantener la información lo más precisa posible.',
        'La conducción en motocicleta implica riesgos inherentes. Las descripciones de rutas, dificultad, distancias y condiciones del terreno son orientativas. El usuario es responsable de evaluar su capacidad, experiencia y el cumplimiento de la normativa de tráfico vigente.',
      ],
      en: [
        'Byroad Adventures S.L. shall not be liable for any damages arising from access to, use of, or inability to access the website, nor for lack of availability, continuity, or quality of the service.',
        'We do not guarantee that content is error-free or permanently up to date, although reasonable measures will be taken to correct errors and keep information as accurate as possible.',
        'Motorcycle riding involves inherent risks. Route descriptions, difficulty, distances, and terrain conditions are indicative. Users are responsible for assessing their ability, experience, and compliance with applicable traffic regulations.',
      ],
    },
  },
  {
    id: 'enlaces',
    title: { es: '6. Enlaces externos', en: '6. External links' },
    paragraphs: {
      es: [
        'Este sitio web puede contener enlaces a sitios de terceros. Byroad Adventures S.L. no asume responsabilidad alguna por los contenidos, políticas o prácticas de sitios web ajenos.',
        'La inclusión de enlaces no implica relación, aprobación o respaldo alguno por parte de Byroad Adventures S.L.',
      ],
      en: [
        'This website may contain links to third-party sites. Byroad Adventures S.L. assumes no responsibility for the content, policies, or practices of external websites.',
        'The inclusion of links does not imply any relationship, approval, or endorsement by Byroad Adventures S.L.',
      ],
    },
  },
  {
    id: 'privacidad',
    title: { es: '7. Protección de datos personales', en: '7. Personal data protection' },
    paragraphs: {
      es: [
        'Los datos personales facilitados a través de los formularios de contacto o reserva serán tratados conforme a la normativa vigente en materia de protección de datos (Reglamento UE 2016/679 y Ley Orgánica 3/2018).',
        'Para más información sobre el tratamiento de sus datos, finalidades, legitimación, conservación y derechos del interesado, consulte nuestra Política de Privacidad.',
        `Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un correo a ${LEGAL_COMPANY.email}, acreditando su identidad.`,
      ],
      en: [
        'Personal data submitted through contact or booking forms will be processed in accordance with applicable data protection law (EU Regulation 2016/679 and Spanish Organic Law 3/2018).',
        'For further information on how we process your data, purposes, legal basis, retention, and your rights, please refer to our Privacy Policy.',
        `You may exercise your rights of access, rectification, erasure, objection, restriction, and portability by emailing ${LEGAL_COMPANY.email} and verifying your identity.`,
      ],
    },
  },
  {
    id: 'legislacion',
    title: { es: '8. Legislación aplicable y jurisdicción', en: '8. Applicable law and jurisdiction' },
    paragraphs: {
      es: [
        'El presente Aviso Legal se rige por la legislación española.',
        'Para la resolución de cualquier controversia relacionada con el acceso o uso del sitio web, las partes se someten a los Juzgados y Tribunales de Zaragoza, salvo que la normativa de consumidores y usuarios disponga otra cosa.',
      ],
      en: [
        'This Legal Notice is governed by Spanish law.',
        'For the resolution of any dispute relating to access to or use of the website, the parties submit to the courts of Zaragoza, unless consumer protection regulations provide otherwise.',
      ],
    },
  },
];
