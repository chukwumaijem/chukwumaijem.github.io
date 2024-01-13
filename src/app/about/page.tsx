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
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            I&apos;m Chukwuma Zikora. I build thing from Nigeria where I live.
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Welcome to my personal corner of the internet! My journey as a
              software developer began by crafting board games. This initial
              fascination has evolved into a dynamic career where I&apos;ve
              immersed myself in diverse industries, wielding a versatile set of
              technologies such as React, Vue, Angular, Nest, Express, and more.
              My experience extends across a spectrum of projects, each
              contributing to my growth as a developer. From front-end
              frameworks to robust back-end architectures, I&apos;ve embraced
              the challenges and triumphs that come with creating innovative and
              efficient solutions.
            </p>
            <p>
              Beyond the world of coding, you&apos;ll find me indulging in my
              favorite pastimes. As an avid gamer, I relish the immersive
              experiences offered by video games. Whether navigating virtual
              realms or competing in digital arenas, I find joy in the
              creativity and skill involved. Additionally, I have a deep
              appreciation for literature, and you might catch me engrossed in a
              captivating novel during my downtime. These hobbies not only
              provide a well-deserved break but also fuel my creativity,
              offering a well-rounded perspective that I bring to my software
              development endeavors.
            </p>
            <p>
              This website serves as a glimpse into my professional journey,
              projects, and the blend of technology and creativity that defines
              my approach to software development. Whether you&apos;re here to
              explore my portfolio, learn about my coding adventures, or simply
              share a mutual interest, I&apos;m excited to connect and showcase
              the exciting intersections of technology, gaming, and literature
              that shape my world. Thank you for visiting, and feel free to
              reach out!
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
