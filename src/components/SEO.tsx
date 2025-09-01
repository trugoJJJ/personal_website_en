"use client";

import { useEffect } from "react";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
  ogImage?: string;
};

const SEOContent = ({ title, description, canonical, noIndex, ogImage }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Ensure meta tags exist
    const ensureMeta = (name: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", property);
        } else {
          meta.name = name;
        }
        document.head.appendChild(meta);
      }
      return meta;
    };

    // Update description
    if (description) {
      const descMeta = ensureMeta("description");
      descMeta.content = description;
      
      // Update Open Graph description
      const ogDescMeta = ensureMeta("", "og:description");
      ogDescMeta.content = description;
      
      // Update Twitter description
      const twitterDescMeta = ensureMeta("", "twitter:description");
      twitterDescMeta.content = description;
    }

    // Update Open Graph title
    const ogTitleMeta = ensureMeta("", "og:title");
    ogTitleMeta.content = title;
    
    // Update Twitter title
    const twitterTitleMeta = ensureMeta("", "twitter:title");
    twitterTitleMeta.content = title;

    // Update Open Graph image
    if (ogImage) {
      const ogImageMeta = ensureMeta("", "og:image");
      ogImageMeta.content = ogImage;
      
      const twitterImageMeta = ensureMeta("", "twitter:image");
      twitterImageMeta.content = ogImage;
    } else {
      // Default OG image if none provided
      const ogImageMeta = ensureMeta("", "og:image");
      ogImageMeta.content = "/og_cover.png";
      
      const twitterImageMeta = ensureMeta("", "twitter:image");
      twitterImageMeta.content = "/og_cover.png";
    }

    // Update canonical link
    const canon = ensureLinkRel("canonical");
    canon.setAttribute("href", canonical || window.location.href);

    if (noIndex) {
      const robotsMeta = ensureMeta("robots");
      robotsMeta.content = "noindex, nofollow";
    }
  }, [title, description, canonical, noIndex, ogImage]);

  const ensureLinkRel = (rel: string) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    return link;
  };

  return null;
};

export const SEO = (props: SEOProps) => {
  return (
    <ClientOnlyWrapper>
      <SEOContent {...props} />
    </ClientOnlyWrapper>
  );
};
