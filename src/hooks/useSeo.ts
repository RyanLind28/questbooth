import { useEffect } from 'react';

export const SITE_URL = 'https://questbooth.co.uk';

type Seo = {
  /** shown in the browser tab and as the search result headline */
  title: string;
  description: string;
  /** path only, e.g. "/gallery" */
  path: string;
};

const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

/**
 * Per-page title, description, canonical and Open Graph tags.
 *
 * The site is a client-rendered SPA, so every route is served the same
 * index.html. That means these tags only exist once React has run: Google
 * executes JavaScript and will see them, but most AI crawlers and link-preview
 * bots (WhatsApp, iMessage, Slack) do not, and fall back to the defaults in
 * index.html. Prerendering the four routes at build time is what would fix
 * that properly. This hook is written so those defaults are already correct
 * page by page when that happens.
 */
export const useSeo = ({ title, description, path }: Seo) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);

    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    // a canonical must point at the current route. A static one in index.html
    // would tell crawlers every page is a duplicate of the homepage
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path]);
};

/**
 * Injects a JSON-LD block for the current page and removes it on unmount, so
 * navigating away doesn't leave another page's structured data behind.
 */
export const useJsonLd = (id: string, data: object) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
    // data is a literal defined at module scope in every caller, so a deep
    // compare would cost more than it saves
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};
