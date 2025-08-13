import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "ODINN",
  description = "ODINN is the most popular powerful ecommerce website which serves many Khmer products such as rural area",
  keywords = "ODINN, ecommerce, Khmer products, rural area, online store",
  image,
  url,
  type = "website",
  twitterHandle = "@yourhandle",
}) => {
  const siteUrl =
    "https://fd-003-project-i9yww7zr6-sokcheats-projects.vercel.app";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image
    ? `${siteUrl}${image}`
    : `${siteUrl}/default-og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={new URL(siteUrl).hostname} />
      <meta property="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url: fullUrl,
          image: fullImage,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

