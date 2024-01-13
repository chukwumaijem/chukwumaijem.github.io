'use client';

import Link from 'next/link';

import { GitHubIcon, LinkedInIcon, MailIcon } from '~/components/Icons';
import { Fragment } from 'react';

const socialLinks = [
  {
    href: 'https://github.com/chukwumaijem',
    icon: GitHubIcon,
    label: 'Follow on GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/chukwumazikora',
    icon: LinkedInIcon,
    label: 'Connect on LinkedIn',
  },
  {
    href: 'mailto:chukwuma.zikora@gmail.com',
    icon: MailIcon,
    label: 'chukwuma.zikora@gmail.com',
  },
];

export function SocialLink() {
  return (
    <Fragment>
      {socialLinks.map((link) => (
        <Link className="group -m-1 p-1" key={link.label} href={link.href}>
          <link.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
      ))}
    </Fragment>
  );
}

export function SocialLinkWithName() {
  return (
    <Fragment>
      {socialLinks.map((link) => (
        <li key={link.label} className="mt-4 flex">
          <Link
            href={link.href}
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
          >
            <link.icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
            <span className="ml-4">{link.label}</span>
          </Link>
        </li>
      ))}
    </Fragment>
  );
}
