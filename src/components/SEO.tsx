"use client";

import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
};

export const SEO = ({ title, description, canonical, noIndex }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Ensure meta tags exist
    const ensureMeta = (name: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      return meta;
    };

    // Update description
    if (description) {
      const descMeta = ensureMeta("description");
      descMeta.content = description;
    }

    // Update canonical link
    const canon = ensureLinkRel("canonical");
    canon.setAttribute("href", canonical || window.location.href);

    if (noIndex) {
      const robotsMeta = ensureMeta("robots");
      robotsMeta.content = "noindex, nofollow";
    }
  }, [title, description, canonical, noIndex]);

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
