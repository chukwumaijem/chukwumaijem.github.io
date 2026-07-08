import Image from 'next/image';

import { Container } from '~/components/Container';
import { SocialLinkWithName } from '~/components/SocialLink';
import portraitImage from '~/images/portrait.jpeg';

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
            I build software - and the systems that keep it running.
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a senior software engineer based in Nigeria with over a
              decade of experience shipping full-stack products. Along the way
              I&apos;ve taken on the work that sits around the application
              layer: CI/CD pipelines, cloud deployment, containerised services,
              and the automation that keeps releases reliable.
            </p>
            <p>
              At ShiftHealth, I design and maintain the deployment
              infrastructure for a healthcare automation platform - GitHub
              Actions, Docker, and AWS Serverless. That same ownership shows up
              in other products I&apos;ve shipped: as founder of BlockQueue
              Systems I&apos;ve shipped Property Governors and FirmLyt
              end-to-end, from application architecture through cloud
              infrastructure and production pipelines.
            </p>
            <p>
              I also publish self-hostable infrastructure tooling under the
              BlockQueue organisation on GitHub - email orchestration, job
              queues, and webhook delivery - built to the same standards I use
              in commercial systems. Day to day I work across TypeScript,
              Node.js, React/Next.js, NestJS, PostgreSQL, Docker, Kubernetes,
              and CI systems like GitHub Actions and GitLab CI. I&apos;m
              currently studying for the CKAD to deepen my Kubernetes practice.
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
