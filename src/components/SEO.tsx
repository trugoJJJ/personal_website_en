import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
};

export const SEO = ({ title, description, canonical, noIndex }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };

    if (description) {
      const desc = ensureMeta("description");
      desc.setAttribute("content", description);
    }

    const ensureLinkRel = (rel: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      return el as HTMLLinkElement;
    };

    const canon = ensureLinkRel("canonical");
    canon.setAttribute("href", canonical || window.location.href);

    if (noIndex) {
      const robots = ensureMeta("robots");
      robots.setAttribute("content", "noindex, nofollow");
    }
  }, [title, description, canonical, noIndex]);

  return null;
};
