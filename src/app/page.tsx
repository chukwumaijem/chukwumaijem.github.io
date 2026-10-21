import { Card } from '~/components/Card';
import { Container } from '~/components/Container';
import { Resume } from '~/components/Resume';
import { SocialLink } from '~/components/SocialLink';

import { type ArticleWithSlug, getFeaturedArticles } from '~/lib/articles';
import { formatDate } from '~/lib/formatDate';

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={article.slug}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default async function Home() {
  let articles = (await getFeaturedArticles()).slice(0, 3);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            DevOps / Platform Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Chukwuma, based in Nigeria. I build and operate the systems
            that ship software reliably: CI/CD, containers, Kubernetes,
            observability, and secure network defaults. Open to DevOps,
            Platform, and SRE roles.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
