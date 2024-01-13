import Image from 'next/image';

import { Card } from '~/components/Card';
import { SimpleLayout } from '~/components/SimpleLayout';
import logoPlaceholder from '~/images/logos/projects/placeholder.png';
import logoLudo from '~/images/logos/projects/ludo.jpeg';
import logoFileTools from '~/images/logos/projects/fileTools.jpeg';

const projects = [
  {
    name: 'File Tools',
    description:
      'Led the development of this project, which is simply a collection of tools for manipulating files. Including PDFs and Images.',
    link: { href: 'https://thefiletools.com', label: 'thefiletools.com' },
    logo: logoFileTools,
  },
  {
    name: 'JS Gravatar',
    description: 'Simple JS implementation of the Gravatar image service.',
    link: {
      href: 'https://github.com/chukwumaijem/js-gravatar',
      label: 'github.com',
    },
    logo: logoPlaceholder,
  },
  {
    name: 'Roll A Die',
    description:
      'A die rolling library for the web, written in TypeScript and React. Made to be used in the Ludo game.',
    link: {
      href: 'https://github.com/chukwumaijem/roll-a-die',
      label: 'github.com',
    },
    logo: logoPlaceholder,
  },
  {
    name: 'Ludo Game',
    description:
      'A multi-player board game developed using React. Had the intention of expanding it to use socket.io, but never got around to that.',
    link: {
      href: 'https://github.com/chukwumaijem/ludo-game',
      label: 'github.com',
    },
    logo: logoLudo,
  },
];

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I have worked on and that I'm proud of!"
      intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="h-18 w-18 relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-16 w-16 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <Image
                src={project.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
