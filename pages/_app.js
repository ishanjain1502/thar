import Script from "next/script";
import "../styles/globals.css";
import "../styles/loader.css";

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
