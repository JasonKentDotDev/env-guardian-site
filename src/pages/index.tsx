import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            npm install @jkdd/env-guardian
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Don't let another Environment Variable slip through your git commit again!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}





// import React from "react";
// import Link from "@docusaurus/Link";
// import Layout from "@theme/Layout";

// export default function Home() {
//   return (
//     <Layout>
//       <main className="text-center p-10">
//         <h1 className="text-5xl font-bold mb-4">env-guardian</h1>
//         <p className="text-lg mb-8">Secure Your Environment Variables.</p>

//         <div className="mb-8">
//           <code className="bg-gray-800 text-white p-2 rounded">
//             npx @jkdd/env-guardian scan .
//           </code>
//         </div>

//         <div className="space-x-4">
//           <Link className="button button--primary" to="/docs/intro">
//             Get Started
//           </Link>
//           <Link className="button button--secondary" to="/changelog">
//             Changelog
//           </Link>
//         </div>
//       </main>
//     </Layout>
//   );
// }