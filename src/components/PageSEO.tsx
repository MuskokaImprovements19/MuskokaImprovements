import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const BASE_TITLE = "Muskoka Improvements";
const BASE_URL = "https://muskokaimprovements.ca";

const PageSEO = ({ title, description, canonical, ogTitle, ogDescription }: PageSEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title.includes(BASE_TITLE) ? title : `${title} | ${BASE_TITLE}`;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      metaDesc.content = description;
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // Update canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (link) {
        link.href = `${BASE_URL}${canonical}`;
      }
    }

    // Update Open Graph tags
    const updateMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement;
      if (el) el.content = value;
    };

    updateMeta('meta[property="og:title"]', ogTitle || title);
    updateMeta('meta[name="twitter:title"]', ogTitle || title);
    updateMeta('meta[property="og:description"]', ogDescription || description);
    updateMeta('meta[name="twitter:description"]', ogDescription || description);

    // Cleanup: restore defaults when component unmounts
    return () => {
      document.title = `${BASE_TITLE} | Premium Property Services in Muskoka`;
    };
  }, [title, description, canonical, ogTitle, ogDescription]);

  return null;
};

export default PageSEO;
