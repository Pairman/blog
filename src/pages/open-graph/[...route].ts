import { OGImageRoute } from "astro-og-canvas";
import { SITE_DESCRIPTION, SITE_TITLE } from "../../config.ts";
import { getBlogPosts } from "src/utils";

const posts = await getBlogPosts();

// turn posts into an object with slugs as keys, and title and description as values
// { slug: { title, description } }

const pages = posts.reduce(
  (acc, post) => {
    acc[post.id] = {
      title: post.data.title,
      description: (post.data.shortDescription ?? post.data.description ?? "") + "\n\n" + SITE_TITLE,
    };
    return acc;
  },
  {} as Record<
    string,
    { title: string; description: string }
  >,
);

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: "route",

  // A collection of pages to generate images for.
  // The keys of this object are used to generate the path for that image.
  // In this example, we generate one image at `/open-graph/example.png`.
  pages: {
    main: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      useHero: false,
    },
    ...pages,
  },

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (_, page) => ({
    title: page.title,
    description: page.description,

    bgGradient: [[0, 0, 0], [0, 0, 0]],
    font: {
      /** Font style for the page title. */
      title: {
        families: ["IBM Plex Mono"],
        color: [255, 255, 255],
        size: 80,
        weight: "SemiBold",
      },
      description: {
        families: ["IBM Plex Mono"],
        color: [255, 255, 255],
      },
    },
    padding: 80,
    fonts: [
      "./src/assets/fonts/IBMPlexMono-Regular.ttf",
      "./src/assets/fonts/IBMPlexMono-SemiBold.ttf",
    ],
  }),
});
