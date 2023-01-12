interface IImage {
  alt: string;
  url: string;
}

export default interface IFrontmatter {
  title: string;
  image?: IImage;
  pubDate?: string;
  description?: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
  slug: string;
}
