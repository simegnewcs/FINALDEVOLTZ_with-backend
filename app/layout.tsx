import type { Metadata } from 'next'

import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Devvoltz Technology',
  keywords: [
    'Devvoltz',
    'Technology',
    'E-Learning',
    'Freelance',
    'Software Solutions',
    'Bootcamps',
    'Product Marketing',
    'Tech Education',
    'Digital Marketing',
    'Web Development',
    'Software Development',
    'Online Courses',
    'Tech Bootcamps',
    'Freelance Services',
    'Tech Community',
    'Devvoltz Community',
    'Tech Innovation',
    'Tech Solutions',
    'Tech Startups',
    'Tech Entrepreneurship',
    'Tech Careers',
    'Tech Skills',
    'Tech Training',
    'Tech Learning',
    'Tech Growth',
    'Tech Leadership',
    'Tech Development', 
    'Tech Products',
    'Tech Services',
    'Tech Industry',      

    'Tech Trends',
    'Tech News',
    'Tech Events',    
    'Tech Conferences',
    'Tech Workshops',
    'Tech Networking',
    'Tech Collaboration',
    'Tech Partnerships',    
    'Tech Ecosystem', 

    'Tech Community Building',
    'Tech Mentorship',
    'Tech Support',     
    'Tech Resources',
    'Tech Tools',
    'Tech Platforms',
    'Tech Solutions',     
    'Tech Innovation',
    'Tech Startups',        
    'Tech Entrepreneurship',
    'Tech Careers',
    'Tech Skills',
    'Tech Training',
    'Tech Learning',
    'Tech Growth',      
    'Tech Leadership',    
    'Tech Development',
    'Tech Products',
    'Tech Services',
    'Tech Industry',  
    'Tech Trends',
    'Tech News',
    'Tech Events',
    'Tech Conferences',
    'Tech Workshops',
    'Tech Networking',
    'Tech Collaboration',
    'SKILLS',
    'TECHNOLOGY',
    'DEVVOLTZ', 
    'DEVVOLTZ TECHNOLOGY',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA', 
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',   
    'DEVVOLTZ TECHNOLOGY ETHIOPIA',
  ],
  authors: [{ name: 'Smegn Destew Molla', url: 'https://smegndestewportfolio.vercel.app' }],
  openGraph: {
    title: 'Devvoltz Technology',
    description: 'Empowering the future of tech through education, innovation, and community.',
    url: 'https://devvoltz-website.vercel.app',
    siteName: 'Devvoltz Technology',
    images: [
      {
        url: '/public/Devvoltzlogow.jpg',
        width: 1200,
        height: 630,
        alt: 'Devvoltz Technology - Empowering the future of tech through education, innovation, and community.',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devvoltz Technology',
    description: 'Empowering the future of tech through education, innovation, and community.',
    images: ['/Devvoltzlogow.jpg'],
  },
  themeColor: '#ffffff',
  colorScheme: 'light dark',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,
    nosnippet: false,   
    

 
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    me: 'me-verification-code',
    other: {              
      'other-verification': 'verification-code',
    },
  },
  icons: {
    icon: '/Devvoltzlogow.jpg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
  },
  description: `
Devvoltz Technology

Devvoltz is a tech-driven company built on five powerful pillars:

1. Free E-Learning Platform
We offer open access to tech and software education. This not only empowers our community but also helps us generate revenue through platforms like Google Ads — all while promoting Devvoltz globally.

2. Freelance & Digital Marketing
Our skilled members will provide freelance services and market solutions, creating value and building strong client networks worldwide.

3.  Software Solutions
From innovative new software to custom management systems, we design, develop, and deliver high-quality digital products for businesses — small and large.

4. 🎓 Bootcamps (Online & In-Person)
We’ll host intensive training sessions, both online and offline, helping learners and professionals level up with real-world skills.

5. Product Marketing Services
We partner with other businesses to promote and market their products, driving mutual growth and brand awareness.

Let’s build the future — together.
Devvoltz: Learn. Build. Grow. Lead.`,
  generator: 'Smegn Destew Molla - CEO, Developer, and Founder of Devvoltz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

