import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
}) => {
  useEffect(() => {
    // Update document title cleanly without duplication
    const fullTitle = title.includes('Uplift Fitness')
      ? title
      : `${title} | Uplift Fitness Studio Borivali West`;
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://upliftfitnessstudio.com${canonicalPath}`);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://upliftfitnessstudio.com${canonicalPath}`);
    }

    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }
  }, [title, description, canonicalPath, ogType]);

  return null;
};
