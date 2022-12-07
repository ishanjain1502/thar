import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags dynamically generated by metaSEO (https://metaseo.itsvg.in) */}
        <meta charSet="UTF-8" />
        <meta name="title" content="Thar 2023" />
        <meta
          name="description"
          content="Rajasthan's biggest techno management festival, THAR-23 is a celebration for intellectuals across the country."
        />
        <meta name="copyright" content="TeamTHAR" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="rtuthar.in" />
        <meta property="og:title" content="Thar 2023" />
        <meta
          property="og:description"
          content="Rajasthan's biggest techno management festival, THAR-23 is a celebration for intellectuals across the country."
        />
        <meta property="og:image" content="https://rtuthar.in/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="rtuthar.in" />
        <meta property="twitter:title" content="Thar 2023" />
        <meta
          property="twitter:description"
          content="Rajasthan's biggest techno management festival, THAR-23 is a celebration for intellectuals across the country."
        />
        <meta property="twitter:image" content="https://rtuthar.in/og.png" />
        <meta http-equiv="content-language" content="en" />
        <link rel="icon" href="/favicon.png" />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="N_jA3DHZLTm0Kk7Wdo6RcaBKCSqyxATyk6oMvTbezvA"
        />
      </Head>
      {/* Google Analytics
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
      /> */}
      <body>
        <div className="relative z-20">
          <Main />
          <NextScript />
        </div>
        <div className="h-[100vh] overflow-hidden fixed left-0 top-0 z-[1]">
          <video
            autoPlay
            muted
            loop
            className="w-[100vw] object-cover h-full pointer-events-none scale-110 brightness-[0.7]"
            id="bg-vid"
            // TODO: test for lazyload and on load complete event
            preload="none"
            onLoadedData={() => console.log(69)}
          >
            <source src="/assets/videos/bg2.mp4" type="video/mp4" />
          </video>
        </div>
      </body>
    </Html>
  );
}
