import React from "react";

export default function Theme() {
  return (
    <div id="theme" className="flex justify-center mb-10">
      {/* Flex Break Point - lg */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-8/12 border-4 border-yellow-300 flex flex-col-reverse lg:flex-row">
        <article
          lang="en"
          className="w-full lg:w-9/12 p-8 text-base md:text-xl bg-black/20 backdrop-blur-2xl break-words text-justify"
        >
          Granted that you are indefinitely trivial and your kind have only
          existed for a minuscule time, you are a salient part of something very
          immense and alluring. Every single element on earth was created at the
          heart of a star. Big bang manifests our physical composition out of
          this cosmos. Our bodies are quite literally made of remnants of stars
          and explosions in the galaxy. There&apos;s Stardust gushing through
          your veins and galaxies swirling through your soul. So the next time
          you look up at the stars, remember that the beauty of the night sky is
          within you. Importing this indelible galaxy on land, we introduce Thar
          &apos;23, welcoming you to encounter the bizzare gush of utterly
          prepossessing and striking events.
        </article>
        <div className=" bg-yellow-300/20 backdrop-blur-xl w-full lg:w-3/12 flex h-full justify-center items-center lg:border-l-4 border-b-4 lg:border-b-0 border-yellow-300">
          <span className="lg:rotate-90 h-max text-4xl font-spaceboards my-4 pt-3 text-center">
            The Galaxy Indelible
          </span>
        </div>
      </div>
    </div>
  );
}
