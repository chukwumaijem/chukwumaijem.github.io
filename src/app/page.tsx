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
            Software engineer & DevOps enthusiast
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Chukwuma, a software designer and entrepreneur based in
            Nigeria. Committed to continuous learning and a passion for crafting
            innovative and user-centric solutions.
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
