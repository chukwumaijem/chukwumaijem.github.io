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
    title:
      'What I Learned Researching Docker Storage (and Why My Disk Hates Me)',
    description:
      'A deep dive into Docker storage, OverlayFS, and why you should never forget to use volumes for your stateful containers. Learn how to reclaim your disk space and your sanity.',
    date: '2025-06-25',
    slug: 'https://blockqueue.io/blog/2025-06-25-docker-volume-management',
    featured: true,
  },
  {
    title: 'Part 2: Infrastructure as Code with Vagrant and Ansible',
    description:
      'Infrastructure as code, or IaC, is a set of practices that allows developers to automate the creation, configuration, and management of infrastructure. In this article, we will host a static website on a Vagrant VM using Ansible.',
    date: '2025-01-21',
    slug: 'https://blockqueue.io/blog/2025-01-21-iac-with-vagrant-and-ansible-part-2',
    featured: false,
  },
  {
    title: 'Setting Up Bitcoin Core, Fulcrum, and Electrum in Regtest',
    description:
      'A step-by-step guide on how to set up Bitcoin Core, Fulcrum, and Electrum in regtest mode for local development and testing.',
    date: '2025-01-20',
    slug: 'https://blockqueue.io/blog/2025-01-20-setup-bitcoin-core-with-fulcrum-server',
    featured: true,
  },
  {
    title: 'Part 1: Infrastructure as Code with Vagrant and Ansible',
    description:
      'Infrastructure as code, or IaC, is a set of practices that allows developers to automate the creation, configuration, and management of infrastructure. In this article, we will explore how to use Vagrant and Ansible to create a local development environment.',
    date: '2025-01-05',
    slug: 'https://blockqueue.io/blog/2025-01-05-iac-with-vagrant-and-ansible',
    featured: true,
  },
  {
    title: 'Techniques for Compressing PDF Files',
    description:
      'Have you ever been tasked with reducing the size of a PDF file. Or tried uploading a PDF file to a website that has size limitation? Here I will be showing you two ways to reduce the size of PDF file using Nodejs.',
    date: '2023-03-05',
    slug: 'https://blockqueue.io/blog/2023-03-05-pdf-compression-techniques',
    featured: false,
  },
  {
    title:
      "Unleashing the Power of Precision: A Guide to Using FileTools' Remove Image Background Tool",
    description:
      "In the dynamic world of digital content creation, the ability to edit and enhance images is a skill that transcends various fields. Whether you're a graphic designer, a marketer, or an enthusiast capturing precious moments, the quality of your visuals plays a pivotal role.",
    date: '2023-11-20',
    slug: 'https://www.thefiletools.com/blog/image-background-removal-2023-11-20',
    featured: false,
  },
  {
    title: 'Document Fusion with Our Online PDF Merging Tool',
    description:
      "Simplicity is essential in the world of digital documents. Our online PDF merging tool is your simple solution designed for people who aren't tech-savvy but want a straightforward way to combine and organize their PDF files.",
    date: '2024-01-01',
    slug: 'https://www.thefiletools.com/blog/merge-multiple-pdf-files-2024-01-01',
    featured: false,
  },
  {
    title: 'Sharp vs Imagemin for Image Minification in Node.js',
    description:
      'Image optimization is crucial in web development for improving website performance. Two popular Node.js packages for image compression are Sharp and Imagemin. In this post, we will compare these two libraries in terms of image size reduction and processing speed.',
    date: '2024-09-22',
    slug: 'https://blockqueue.io/blog/2024-09-22-sharp-vs-imagemin-comparison',
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
