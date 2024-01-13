export type ArticleWithSlug = {
  slug: string;
  title: string;
  description: string;
  date: string;
  featured?: boolean;
};

/**
 * Keep the number of features posts to 3.
 */
let articles: ArticleWithSlug[] = [
  {
    title: 'Techniques for Compressing PDF Files',
    description:
      'Have you ever been tasked with reducing the size of a PDF file. Or tried uploading a PDF file to a website that has size limitation? Here I will be showing you two ways to reduce the size of PDF file using Nodejs.',
    date: '2023-03-05',
    slug: 'https://blog.blockqueue.io/pdf-compression-techniques-20230305',
    featured: true,
  },
  {
    title:
      "Unleashing the Power of Precision: A Guide to Using FileTools' Remove Image Background Tool",
    description:
      "In the dynamic world of digital content creation, the ability to edit and enhance images is a skill that transcends various fields. Whether you're a graphic designer, a marketer, or an enthusiast capturing precious moments, the quality of your visuals plays a pivotal role.",
    date: '2023-11-20',
    slug: 'https://www.thefiletools.com/blog/image-background-removal-2023-11-20',
    featured: true,
  },
  {
    title: 'Document Fusion with Our Online PDF Merging Tool',
    description:
      "Simplicity is essential in the world of digital documents. Our online PDF merging tool is your simple solution designed for people who aren't tech-savvy but want a straightforward way to combine and organize their PDF files.",
    date: '2024-01-01',
    slug: 'https://www.thefiletools.com/blog/merge-multiple-pdf-files-2024-01-01',
    featured: true,
  },
];

export async function getAllArticles() {
  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
export async function getFeaturedArticles() {
  return articles
    .filter((a) => !!a.featured)
    .sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
