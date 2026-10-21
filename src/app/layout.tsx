import { type Metadata } from 'next';

import { Providers } from '~/app/providers';
import { Layout } from '~/components/Layout';

import '~/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Chukwuma Zikora',
    default: 'Chukwuma Zikora - DevOps / Platform Engineer',
  },
  description:
    'DevOps and Platform Engineer with 10+ years of software engineering experience. CI/CD, containers, Kubernetes, observability, and infrastructure automation for production systems.',
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
