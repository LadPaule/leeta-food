import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const sanityClient = SanityClient({
  projectId: "ym9zfgaw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(sanityClient);

export const urlFor =(source)=> builder.image(source);
