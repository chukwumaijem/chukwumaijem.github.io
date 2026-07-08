import Image from 'next/image';

import { Card } from '~/components/Card';
import { SimpleLayout } from '~/components/SimpleLayout';
import logoBlockQueue from '~/images/logos/projects/blockqueue.png';
import logoFileTools from '~/images/logos/projects/fileTools.jpeg';
import logoFirmLyt from '~/images/logos/projects/firmlyt.png';
import logoLudo from '~/images/logos/projects/ludo.jpeg';
import logoPlaceholder from '~/images/logos/projects/placeholder.png';
import logoPropertyGovernors from '~/images/logos/projects/propertygovernors.png';

const projects = [
  {
    name: 'Property Governors',
    description:
      'Multi-sided property management SaaS - role-based access, lease workflows, and multi-provider rent collection. Built and operated end-to-end, including cloud infrastructure and deployment pipelines.',
    link: {
      href: 'https://propertygovernors.com',
      label: 'propertygovernors.com',
    },
    logo: logoPropertyGovernors,
  },
  {
    name: 'FirmLyt',
    description:
      'Legal practice management SaaS for the Nigerian market - case management, client portals, contract tools, and AI-assisted research. Architecture through AWS deployment owned in-house.',
    link: { href: 'https://firmlyt.com', label: 'firmlyt.com' },
    logo: logoFirmLyt,
  },
  {
    name: 'Mailer',
    description:
      'Self-hostable email orchestration microservice: pluggable templates, dual auth (API keys & HMAC), rate limiting, and Docker-first config for multi-environment deploys.',
    link: {
      href: 'https://github.com/blockqueue/mailer',
      label: 'github.com',
    },
    logo: logoBlockQueue,
  },
  {
    name: 'BQ Queue',
    description:
      'Self-hostable job queue and signed webhook delivery on PostgreSQL / pg-boss - shared scheduling, idempotency, and Docker Compose for multi-service backends.',
    link: {
      href: 'https://github.com/blockqueue/bq-queue',
      label: 'github.com',
    },
    logo: logoBlockQueue,
  },
  {
    name: 'File Tools',
    description:
      'A collection of tools for manipulating files, including PDFs and images - built and shipped as a live utility product.',
    link: { href: 'https://thefiletools.com', label: 'thefiletools.com' },
    logo: logoFileTools,
  },
  {
    name: 'Ludo Game',
    description:
      'A multi-player board game developed using React and Electron. Can be extended with socket.io for real-time multiplayer.',
    link: {
      href: 'https://github.com/chukwumaijem/ludo-game',
      label: 'github.com',
    },
    logo: logoLudo,
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
      'A die rolling library for the web, written in JavaScript. Made to be used in the Ludo game.',
    link: {
      href: 'https://github.com/chukwumaijem/roll-a-die',
      label: 'github.com',
    },
    logo: logoPlaceholder,
  },
];

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've built and shipped"
      intro="SaaS products I've owned end-to-end - including their infrastructure - plus open-source tooling for email, queues, and webhook delivery, and a few earlier experiments I'm still proud of."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt={project.name}
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
