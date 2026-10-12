import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2026-10-12",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) =>
  builder.image(source);