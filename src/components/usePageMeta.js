import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://scaleezy.com';

// Sets the tab title, meta description and canonical URL for the current page
export default function usePageMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`);
  }, [title, description, pathname]);
}
