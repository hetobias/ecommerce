import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "vvnzedxa",
  dataset: "production",
  apiVersion: "2022-06-28",
  useCdn: true,
  token:
    "skBaI6cts4buroYwgxgRn95C0fqv662ryN6vNJ8d89ewvqUA7994WAmY1p8usdnhRqJHMwemfj4hH4Iur9oCdYGtUTyiddjF5KAQlTfqN8Tsagux0x99wUgpPHAE9ifAAczI09dPrLwvSATM5TNdUf6edDieyV2B6mjnAIg94RkCoD0oih13"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
