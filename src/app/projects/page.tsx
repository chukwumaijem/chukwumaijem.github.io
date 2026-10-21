import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '~/components/Card';
import { SimpleLayout } from '~/components/SimpleLayout';
import logoBlockQueue from '~/images/logos/projects/blockqueue.png';
import logoFirmLyt from '~/images/logos/projects/firmlyt.png';
import logoPlaceholder from '~/images/logos/projects/placeholder.png';
import logoPropertyGovernors from '~/images/logos/projects/propertygovernors.png';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Infrastructure labs and production systems: Proxmox/Swarm observability, egress security, Helm on Kubernetes, plus SaaS platforms and open-source tooling.',
};

const projects = [
  {
    name: 'Platform Homelab',
    description:
      'Multi-VM Proxmox homelab: Docker Swarm app cluster + dedicated monitoring VM. Label-driven HTTPS with Caddy Docker Proxy, Prometheus/Grafana/Loki/Alertmanager, and Alloy log shipping.',
    link: {
      href: 'https://github.com/chukwumaijem/playground-devops',
      label: 'github.com/chukwumaijem/playground-devops',
    },
    logo: logoPlaceholder,
  },
  {
    name: 'Container Egress Gateway',
    description:
      'Deny-by-default container egress: direct internet dropped; only host Squid proxy traffic allowed. Ansible-automated Squid, allowlists, and iptables DOCKER-USER rules, validated with a Swarm demo.',
    link: {
      href: 'https://github.com/chukwumaijem/playground-devops',
      label: 'github.com/chukwumaijem/playground-devops',
    },
    logo: logoPlaceholder,
  },
  {
    name: 'Helm Multi-Service Packaging',
    description:
      'Packaged a multi-tier voting app as Helm charts (umbrella + per-service). Templating, values overrides, and install/upgrade workflows on Minikube and MicroK8s, plus kubeadm multi-node practice.',
    link: {
      href: 'https://github.com/chukwumaijem/playground-devops',
      label: 'github.com/chukwumaijem/playground-devops',
    },
    logo: logoPlaceholder,
  },
  {
    name: 'Property Governors',
    description:
      'Multi-sided property management SaaS: role-based access, lease workflows, and multi-provider rent collection. Built and operated end-to-end, including cloud infrastructure and deployment pipelines.',
    link: {
      href: 'https://propertygovernors.com',
      label: 'propertygovernors.com',
    },
    logo: logoPropertyGovernors,
  },
  {
    name: 'FirmLyt',
    description:
      'Legal practice management SaaS for the Nigerian market: case management, client portals, contract tools, and AI-assisted research. Architecture through AWS deployment owned in-house.',
    link: { href: 'https://firmlyt.com', label: 'firmlyt.com' },
    logo: logoFirmLyt,
  },
  {
    name: 'Notifier',
    description:
      'Self-hostable email orchestration microservice: pluggable templates, dual auth (API keys and HMAC), rate limiting, and Docker-first config for multi-environment deploys.',
    link: {
      href: 'https://github.com/blockqueue/notifier',
      label: 'github.com/blockqueue/notifier',
    },
    logo: logoBlockQueue,
  },
  {
    name: 'BQ Queue',
    description:
      'Self-hostable job queue and signed webhook delivery on PostgreSQL / pg-boss: shared scheduling, idempotency, and Docker Compose for multi-service backends.',
    link: {
      href: 'https://github.com/blockqueue/bq-queue',
      label: 'github.com/blockqueue/bq-queue',
    },
    logo: logoBlockQueue,
  },
];

export default function Projects() {
  return (
    <SimpleLayout
      title="Infrastructure labs and systems I've shipped"
      intro="Homelab and platform work first (orchestration, observability, egress security, Helm), then production SaaS and self-hostable tooling under BlockQueue."
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
