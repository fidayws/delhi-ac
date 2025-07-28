import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import SEO from './SEO';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Default structured data for the business
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Delhi AC Services",
    "description": "Professional AC installation, repair, and maintenance services in Delhi. Available 24/7 for all your cooling needs with certified technicians.",
    "url": "https://delhiacservices.com",
    "telephone": "+91-97737-54227",
    "email": "info@delhiacservices.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New Delhi",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "areaServed": {
      "@type": "City",
      "name": "Delhi",
      "sameAs": "https://en.wikipedia.org/wiki/Delhi"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "geoRadius": "50000"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₹₹",
    "paymentAccepted": "Cash, Card, UPI, NEFT",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Installation Service",
            "description": "Professional AC installation service in Delhi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Repair Service",
            "description": "Expert AC repair service in Delhi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Maintenance Service",
            "description": "Regular AC maintenance service in Delhi"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/delhiacservices",
      "https://www.instagram.com/delhiacservices",
      "https://twitter.com/delhiacservices"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO structuredData={defaultStructuredData} />
      <Navbar />
      {/* Main content area with proper spacing for fixed header */}
      <main className="flex-1">
        {/* No top padding for home page, but add it for other pages */}
        <div className={isHomePage ? '' : 'pt-[120px]'}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout; 