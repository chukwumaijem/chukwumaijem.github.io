import { type Metadata } from 'next';
import Image from 'next/image';

import { Container } from '~/components/Container';
import { SocialLinkWithName } from '~/components/SocialLink';
import portraitImage from '~/images/portrait.jpeg';

export const metadata: Metadata = {
  title: 'About',
  description:
    'DevOps / Platform Engineer focused on CI/CD, containers, Kubernetes, observability, and infrastructure automation.',
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Portrait of Chukwuma Zikora"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            I&apos;m Chukwuma Zikora.
          </h1>
          <h1 className="pt-2 text-lg font-medium tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100">
            DevOps / Platform Engineer. I build the systems that keep software
            running.
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              After 10+ years as a software engineer (healthcare SaaS and
              product work), I deliberately shifted into DevOps and Platform
              Engineering. Today I care about one question: can we deploy
              safely, observe clearly, and recover fast?
            </p>
            <p>
              At ShiftHealth I design and maintain CI/CD with GitHub Actions and
              Docker across a multi-environment healthcare platform, and have
              migrated workloads toward AWS serverless where it fits. That same
              ownership shows up in products I&apos;ve shipped as founder of
              BlockQueue Systems: Property Governors and FirmLyt, from
              application architecture through cloud infrastructure and
              production pipelines.
            </p>
            <p>
              In my homelab I run a Proxmox-backed Swarm platform with automatic
              HTTPS routing (Caddy Docker Proxy), a dedicated monitoring stack
              (Prometheus, Grafana, Loki, Alertmanager), and a deny-by-default
              container egress gateway (Ansible + Squid + iptables). I also
              package multi-service apps with Helm on Minikube and MicroK8s.
              Those labs live at{' '}
              <a
                href="https://github.com/chukwumaijem/playground-devops"
                className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400"
              >
                github.com/chukwumaijem/playground-devops
              </a>
              .
            </p>
            <p>
              Day to day I work across Docker, Kubernetes, Ansible, GitHub
              Actions, Prometheus/Grafana, AWS, Linux, and TypeScript/Node when
              the application layer needs it. I&apos;m open to DevOps, Platform,
              and junior-mid SRE roles where ownership of pipelines and
              reliability is real.
            </p>
            <p>
              Outside of engineering I game and read, which keeps me curious
              when the terminal gets quiet. Thanks for stopping by - feel free
              to reach out if you want to collaborate or just talk shop.
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <SocialLinkWithName />
          </ul>
        </div>
      </div>
    </Container>
  );
}
