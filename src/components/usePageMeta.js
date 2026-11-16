import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://scaleezy.com';

function setMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== 'content') el.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  el.setAttribute('content', attrs.content);
}

// Sets the tab title, meta description, canonical URL and social/AI-crawler tags for the current page.
// `extra` is optional: { keywords: string[], image: string, type: 'website' | 'article', publishedTime, modifiedTime }
export default function usePageMeta(title, description, extra = {}) {
  const { pathname } = useLocation();
  const { keywords, image, type, publishedTime, modifiedTime } = extra;
  const keywordString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  useEffect(() => {
    if (title) document.title = title;

    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;

    if (description) {
      setMeta('meta[name="description"]', { name: 'description', content: description });
      setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
      setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    }
    if (title) {
      setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
      setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    }
    setMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: type || 'website' });

    if (image) {
      const absImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
      setMeta('meta[property="og:image"]', { property: 'og:image', content: absImage });
      setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: absImage });
    }

    if (keywordString) {
      setMeta('meta[name="keywords"]', { name: 'keywords', content: keywordString });
    } else {
      document.head.querySelector('meta[name="keywords"]')?.remove();
    }

    if (publishedTime) {
      setMeta('meta[property="article:published_time"]', { property: 'article:published_time', content: publishedTime });
    } else {
      document.head.querySelector('meta[property="article:published_time"]')?.remove();
    }
    if (modifiedTime) {
      setMeta('meta[property="article:modified_time"]', { property: 'article:modified_time', content: modifiedTime });
    } else {
      document.head.querySelector('meta[property="article:modified_time"]')?.remove();
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, pathname, keywordString, image, type, publishedTime, modifiedTime]);
}
