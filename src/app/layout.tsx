import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Serif_Devanagari } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600', '700'],
  variable: '--font-devanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Punarnava Ayurvedic Hospital Kanpur | Panchakarma & Ksharsutra Treatment',
  description:
    'Kanpur’s trusted Ayurvedic hospital & surgery centre led by Dr. B.S. Katiyar (MD, PGCKS) & Dr. Smita Katiyar. Expert Ksharsutra surgery for piles, fissure & fistula without general anaesthesia. Classical 5-stage Panchakarma detoxification. Rated 4.2★ with 91+ verified reviews.',
  keywords: [
    'ayurvedic hospital kanpur',
    'panchakarma kanpur',
    'ksharsutra surgery kanpur',
    'piles treatment kanpur',
    'fistula treatment kanpur',
    'fissure treatment kanpur',
    'dr bs katiyar kanpur',
    'dr smita katiyar',
    'ayurvedic clinic kanpur',
    'nadi pariksha kanpur',
    'shirodhara kanpur',
    'uttara basti kanpur',
    'infertility ayurveda kanpur',
  ],
  authors: [{ name: 'Dr. B.S. Katiyar' }, { name: 'Dr. Smita Katiyar' }],
  metadataBase: new URL('https://www.pahindia.com'),
  alternates: {
    canonical: 'https://www.pahindia.com',
    languages: {
      'en-IN': 'https://www.pahindia.com',
      'hi-IN': 'https://www.pahindia.com',
    },
  },
  openGraph: {
    title: 'Punarnava Ayurvedic Hospital Kanpur | Panchakarma & Ksharsutra Treatment',
    description:
      'Premier Ayurvedic hospital in Kanpur specializing in Ksharsutra surgery for piles, fistula & fissure without general anaesthesia, and authentic Panchakarma detoxification. Rated 4.2★ by 91+ patients.',
    url: 'https://www.pahindia.com',
    siteName: 'Punarnava Ayurvedic Hospital',
    images: [
      {
        url: '/img/clinical/panchakarma-droni.jpg',
        width: 1200,
        height: 630,
        alt: 'Punarnava Ayurvedic Hospital Kanpur - Classical Droni Therapy Chamber',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punarnava Ayurvedic Hospital Kanpur | Panchakarma & Ksharsutra Centre',
    description:
      'Ancient Ayurvedic Ksharsutra surgery and classical Panchakarma detoxification in Kanpur with 98% permanent cure rate.',
    images: ['/img/clinical/panchakarma-droni.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Kanpur',
    'geo.position': '26.4940452;80.2793133',
    ICBM: '26.4940452, 80.2793133',
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Hospital', 'MedicalClinic', 'LocalBusiness'],
      '@id': 'https://www.pahindia.com/#hospital',
      name: 'Punarnava Ayurvedic Hospital Panchakarma & Ksharsutra Centre',
      alternateName: ['PAH India', 'Punarnava Hospital Kanpur'],
      url: 'https://www.pahindia.com',
      logo: 'https://www.pahindia.com/punarnava-hospital-logo.png',
      image: 'https://www.pahindia.com/img/clinical/panchakarma-droni.jpg',
      description:
        'Premier Ayurvedic hospital in Kanpur, Uttar Pradesh, specializing in Panchakarma detoxification and Ksharsutra surgery for piles, fissure, and anal fistula without general anaesthesia.',
      telephone: ['+91-8009708080', '+91-9415040160'],
      email: 'info@pahindia.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '68, Lakhanpur, Vikas Nagar, Behind Lucky Restaurant, G.T. Road',
        addressLocality: 'Kanpur',
        addressRegion: 'Uttar Pradesh',
        postalCode: '208024',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.4940452,
        longitude: 80.2793133,
      },
      hasMap: 'https://maps.app.goo.gl/GouFfgFTu7vqa9Je8',
      sameAs: [
        'https://maps.app.goo.gl/GouFfgFTu7vqa9Je8',
        'https://www.facebook.com/PunanarnavaAyurvedicHospital',
        'https://www.instagram.com/punarnava_ayurveda/',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '14:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '17:30',
          closes: '20:00',
        },
      ],
      medicalSpecialty: [
        'Ayurveda',
        'Proctology',
        'Panchakarma',
        'Gynecology',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.2',
        reviewCount: '91',
        bestRating: '5',
        worstRating: '1',
      },
      priceRange: '₹₹',
      founder: {
        '@id': 'https://www.pahindia.com/dr-bs-katiyar#physician',
      },
      employee: [
        {
          '@id': 'https://www.pahindia.com/dr-bs-katiyar#physician',
        },
        {
          '@id': 'https://www.pahindia.com/dr-smita-katiyar#physician',
        },
      ],
      availableService: [
        {
          '@id': 'https://www.pahindia.com/#procedure-ksharsutra',
        },
        {
          '@id': 'https://www.pahindia.com/#procedure-panchakarma',
        },
      ],
    },
    {
      '@type': 'Physician',
      '@id': 'https://www.pahindia.com/dr-bs-katiyar#physician',
      name: 'Dr. B.S. Katiyar',
      honorificPrefix: 'Dr.',
      givenName: 'B.S.',
      familyName: 'Katiyar',
      jobTitle: 'Chief Physician & Ksharsutra Surgeon',
      medicalSpecialty: ['Ayurveda', 'Proctology', 'Panchakarma'],
      image: 'https://www.pahindia.com/img/doctors/dr-bs-katiyar-avatar.jpg',
      telephone: '+91-9415040160',
      worksFor: {
        '@id': 'https://www.pahindia.com/#hospital',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Lucknow University',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'MD in Ayurvedic Medicine, Lucknow University',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'PGCKS (Post Graduate Certificate in Ksharsutra Surgery)',
        },
      ],
      sameAs: 'https://www.pahindia.com/dr-bs-katiyar',
    },
    {
      '@type': 'Physician',
      '@id': 'https://www.pahindia.com/dr-smita-katiyar#physician',
      name: 'Dr. Smita Katiyar',
      honorificPrefix: 'Dr.',
      givenName: 'Smita',
      familyName: 'Katiyar',
      jobTitle: 'Senior Consultant in Ayurvedic Gynaecology & Infertility',
      medicalSpecialty: ['Ayurveda', 'Gynecology', 'Reproductive Medicine'],
      telephone: '+91-8009708080',
      worksFor: {
        '@id': 'https://www.pahindia.com/#hospital',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'MD in Ayurvedic Medicine',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'BAMS (Bachelor of Ayurvedic Medicine & Surgery)',
        },
      ],
      sameAs: 'https://www.pahindia.com/dr-smita-katiyar',
    },
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://www.pahindia.com/#procedure-ksharsutra',
      name: 'Ksharsutra Para-Surgical Therapy for Piles & Fistula',
      procedureType: 'SurgicalProcedure',
      howPerformed:
        'Medicated seton thread coated with Snuhi latex, Apamarga kshara, and Haridra evaluated in multicentric clinical trials by the Indian Council of Medical Research (ICMR) showing 98% cure rate and <2% recurrence.',
      followup: '3 to 5 days recovery to normal routine without hospital admission',
      bodyLocation: 'Anorectal region',
    },
    {
      '@type': 'MedicalProcedure',
      '@id': 'https://www.pahindia.com/#procedure-panchakarma',
      name: 'Classical Five-Fold Panchakarma Detoxification',
      procedureType: 'NoninvasiveProcedure',
      howPerformed:
        'Three-stage purificatory protocol encompassing Poorva Karma (Snehan, Swedana), Pradhana Karma (Vamana, Virechana, Basti, Nasya, Raktamokshana), and Paschatya Karma (Samsarjana Krama).',
      followup: 'Graduated dietary restoration and Rasayana vitalization',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.pahindia.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Ksharsutra treatment and is it truly safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Ksharsutra is an Ayurvedic para-surgical technique evaluated in multicentric clinical trials by the Indian Council of Medical Research (ICMR) and the Ministry of AYUSH. A medicated herbal thread coated with Snuhi latex, Apamarga alkali, and Haridra is placed in the tract. It slowly cuts and heals the fistula or piles mass simultaneously under local anaesthesia. There is zero cut to sphincter muscles, no risk of stool incontinence, and recovery takes just 3–5 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Ksharsutra differ from conventional open surgery for fistula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In conventional surgery (fistulotomy or fissurectomy), surgeons often cut the anal sphincter muscles, which carries a 5–10% risk of permanent stool incontinence and a 20–30% recurrence rate. Ksharsutra gradually cuts through tissue while fibrosis heals behind it, preserving 100% sphincter control. The recurrence rate is less than 2%.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Panchakarma treat chronic conditions like Diabetes, Arthritis & Slip Disc?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Panchakarma extracts fat-soluble metabolic toxins (Aama) accumulated in deep cellular tissues. For osteoarthritis and slip disc, therapies like Janu Basti, Kati Basti, and Patra Pinda Swedan regenerate joint lubrication. For diabetes, deep digestive cleansing restores insulin sensitivity.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many days does a standard Panchakarma course require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depending on your condition, a course lasts between 7 to 21 days. Preparatory Poorva Karma takes 3–5 days, followed by the main therapeutic days (Pradhan Karma) and post-detox dietary stabilization (Paschatya Karma). Patients attend daily day-care sessions of 60–90 minutes without overnight hospital stay.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the first consultation free at Punarnava Hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We offer a complimentary initial OPD consultation to understand your medical history, examine your symptoms, and explain the required treatment protocol. You can call +91-8009708080 or book online.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the hospital OPD timings and location in Kanpur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We are located at 68, Lakhanpur, Vikas Nagar, Behind Lucky Restaurant, G.T. Road, Kanpur - 208024, UP. Morning OPD runs daily from 9:30 AM to 2:00 PM (Monday to Sunday). Evening OPD runs Monday to Saturday from 5:30 PM to 8:00 PM (Sunday evening is closed).',
          },
        },
        {
          '@type': 'Question',
          name: "Does Punarnava Hospital treat women's hormonal and reproductive problems?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Dr. Smita Katiyar (MD, BAMS) leads the women's health wing, successfully treating PCOS, tubal blockages, endometriosis, irregular menstruation, and unexplained female infertility through customized herbal regimes and Uttara Basti therapy.",
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.pahindia.com/#website',
      url: 'https://www.pahindia.com',
      name: 'Punarnava Ayurvedic Hospital',
      inLanguage: ['en-IN', 'hi-IN'],
      publisher: {
        '@id': 'https://www.pahindia.com/#hospital',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${notoDevanagari.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#14241E]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
