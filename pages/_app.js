import Script from "next/script";
import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/vader.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EY4D843XDN"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EY4D843XDN', { page_path: window.location.pathname });
            `,
        }}
      />
      <SessionProvider
        session={session}
        refetchOnWindowFocus={false}
        refetchInterval={10 * 60}
      >
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
