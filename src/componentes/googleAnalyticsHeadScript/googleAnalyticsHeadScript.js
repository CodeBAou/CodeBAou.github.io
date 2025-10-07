'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAnalyticsHeadScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-SJ7H1DSCKC', { page_path: pathname });
    }
  }, [pathname]);

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SJ7H1DSCKC"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJ7H1DSCKC');
          `,
        }}
      />
    </>
  );
}