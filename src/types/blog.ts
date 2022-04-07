export type Header = { depth: number; text: string; slug: string };

export interface FrontMatterMetadata {
  title: string;
  description: string;
  publishedAt?: string;
  draft?: boolean;
  image: string;
  imageAlt?: string;
  tags: string[];
  url: string;
  astro: {
    headers: Header[];
    source: string;
  };
}

export interface Blog extends FrontMatterMetadata {
  publishDate: string;
  readingTime: string;
}
