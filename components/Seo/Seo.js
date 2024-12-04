"use client"
import React from "react"

import configData from '../../config'
import Script from "next/script"



function NextSeo({ title, description, path, metaImage }) {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/images/cac_favicon-150x150.png" />
      <link rel="canonical" href={`${configData.websiteMainUrl}${path}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${configData.websiteMainUrl}${path}`} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "IEC",
            url: `${configData.websiteMainUrl}`,
            potentialAction: {
              "@type": "SearchAction",
              target: `${configData.websiteMainUrl}${path}/{search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </head>
  )
}

export default NextSeo
