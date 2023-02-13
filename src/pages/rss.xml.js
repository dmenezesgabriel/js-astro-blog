import rss from "@astrojs/rss";

export const get = async () =>
  rss({
    title: "Astro | Learner blog",
    description: "My Journey learning Astro",
    site: "https://www.example.com",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.{md,mdx}")),
    customData: `<language>en-us</language>`,
  });
