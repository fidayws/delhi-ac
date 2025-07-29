import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData,
  additionalMeta = []
}) => {
  const defaultTitle = 'Delhi AC Services - Expert AC Repair & Installation in Delhi';
  const defaultDescription = 'Professional AC installation, repair, and maintenance services in Delhi. Available 24/7 for all your cooling needs with certified technicians. Call +91-97737 54227';
  const defaultKeywords = 'AC repair Delhi, air conditioner service Delhi, AC installation Delhi, Delhi AC maintenance, emergency AC repair Delhi, best AC service Delhi, AC technician Delhi, split AC repair Delhi, window AC service Delhi, commercial AC service Delhi, residential AC repair Delhi, AC gas refilling Delhi, AC cleaning service Delhi, 24/7 AC repair Delhi, affordable AC service Delhi';
  const defaultImage = 'https://res.cloudinary.com/dw1sh368y/image/upload/v1753519612/266_bgmeao.jpg';
  const siteUrl = 'https://delhiacservices.com';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Delhi AC Services" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi, India" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />
      
      {/* Business Meta Tags */}
      <meta name="DC.title" content={seoTitle} />
      <meta name="DC.creator" content="Delhi AC Services" />
      <meta name="DC.subject" content="AC Services, Air Conditioner Repair, HVAC Services" />
      <meta name="DC.description" content={seoDescription} />
      <meta name="DC.publisher" content="Delhi AC Services" />
      <meta name="DC.contributor" content="Delhi AC Services Team" />
      <meta name="DC.date" content={new Date().toISOString()} />
      <meta name="DC.type" content="service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={seoUrl} />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="Delhi, India" />
      <meta name="DC.rights" content="Copyright Delhi AC Services" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content="Delhi AC Services" />
      <meta property="og:locale" content="en_IN" />
      <meta property="business:contact_data:street_address" content="New Delhi" />
      <meta property="business:contact_data:locality" content="Delhi" />
      <meta property="business:contact_data:region" content="Delhi" />
      <meta property="business:contact_data:postal_code" content="110001" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content="+919773754227" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@DelhiACServices" />
      <meta name="twitter:creator" content="@DelhiACServices" />
      
      {/* Mobile Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Delhi AC Services" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;