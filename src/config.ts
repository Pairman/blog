import type { AccentColor, BaseColor } from "./colors";

// IMPORTANT SET THOSE TWO VARIABLES:
// NUMBER ONE:
// if deployed to github pages, set to https://<your-github-username>.github.io/
export const SITE = "https://www.pnxlr.eu.org";

// NUMBER TWO:
// if repo name is <your-github-username>.github.io set to '/'
// otherwise set to '/<your-repo-name>'
export const BASE = "";

// MORE SETTINGS:

// will be used for the the title and meta tags and in the header (if SITE_NAME is left blank)
export const SITE_TITLE = "PA\\RMAN";

// will be used in the meta tags (and for example shown in search results)
export const SITE_DESCRIPTION = "Scatered notis sette ich doun.”";

// will be used in the footer as the name of the author (c) <YEAR> <NAME> - LICENSE
export const NAME = "Pairman";

// will be used in the footer as the license of the content (e.g. "All right reserved" or "CC-BY-SA 4.0")
export const LICENSE = "CC BY-SA 4.0";

export const SOURCE_LINK = 'https://github.com/Pairman/blog';

// will be used to set the base color of the blog
export const BASE_COLOR: BaseColor = "neutral";

// will be used to set the accent color of the blog
export const ACCENT_COLOR: AccentColor = "neutral";

// will show all icons that are not empty in the footer as links
export const SOCIAL_LINKS: {
  GITHUB_URL?: string;
  EMAIL?: string;
  SHOW_RSS?: boolean;
} = {
  SHOW_RSS: true,
  GITHUB_URL: "https://github.com/Pairman",
  EMAIL: "pairmanxlr@gmail.com",
};
// EVEN MORE SETTINGS:

// if true, will enable the search functionality
export const SEARCH_ENABLED = true;

// will be used to set the number of posts per page
export const POSTS_PER_PAGE = 10;

// will be shown in the header, if left blank will instead show the SITE_TITLE
export const SITE_NAME = "PA\\RMAN";
