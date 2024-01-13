import { type Metadata } from 'next';

import { Providers } from '~/app/providers';
import { Layout } from '~/components/Layout';

import '~/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Chukwuma Zikora',
    default:
      'Chukwuma Zikora - Software engineer, devOps enthusiast, and aspiring founder.',
  },
  description: `I'm Chukwuma, a software designer and entrepreneur based in Nigeria. Committed to continuous learning and a passion for crafting innovative and user-centric solutions.`,
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
