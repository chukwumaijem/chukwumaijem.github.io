import { type Metadata } from 'next';

import { Providers } from '~/app/providers';
import { Layout } from '~/components/Layout';

import '~/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Chukwuma Zikora',
    default:
      'Chukwuma Zikora - Senior Software Engineer | Full-Stack & Platform Infrastructure',
  },
  description:
    'Senior software engineer with 10+ years shipping full-stack SaaS - including CI/CD, cloud architecture, containers, and infrastructure automation for production systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
