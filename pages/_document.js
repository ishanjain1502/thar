import { Html, Head, Main, NextScript } from "next/document";
import { NavBar } from "../components/NavBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Thar 2023" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <div className="relative z-20">
          <NavBar />
          <div className="pt-32" />
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
