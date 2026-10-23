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
    'fistula treatment without surgery',
    'dr bs katiyar kanpur',
    'dr smita katiyar',
    'ayurvedic clinic kanpur',
    'nadi pariksha kanpur',
    'shirodhara kanpur',
  ],
  authors: [{ name: 'Dr. B.S. Katiyar' }, { name: 'Dr. Smita Katiyar' }],
  metadataBase: new URL('https://pahindia.com'),
  alternates: {
    canonical: 'https://pahindia.com',
  },
  openGraph: {
    title: 'Punarnava Ayurvedic Hospital Kanpur | Panchakarma & Ksharsutra Treatment',
    description:
      'Premier Ayurvedic hospital in Kanpur specializing in Ksharsutra surgery for piles, fistula & fissure without general anaesthesia, and authentic Panchakarma detoxification. Rated 4.2★ by 91+ patients.',
    url: 'https://pahindia.com',
    siteName: 'Punarnava Ayurvedic Hospital',
    images: [
      {
        url: '/img/ayurveda-punarnava.png',
        width: 1400,
        height: 500,
        alt: 'Punarnava Ayurvedic Hospital Kanpur',
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
    images: ['/img/ayurveda-punarnava.png'],
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
    'geo.position': '26.4499;80.2894',
    ICBM: '26.4499, 80.2894',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness'],
  '@id': 'https://pahindia.com/#organization',
  name: 'Punarnava Ayurvedic Hospital Panchakarma & Ksharsutra Centre',
  alternateName: 'PAH India',
  url: 'https://pahindia.com',
  logo: 'https://pahindia.com/logo.png',
  image: 'https://pahindia.com/img/ayurveda-punarnava.png',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:30',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '17:30',
      closes: '20:00',
    },
  ],
  medicalSpecialty: 'Ayurveda',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    reviewCount: '91',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '₹₹',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#14241E]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
