import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Smart Scanning',
    Svg: require('@site/static/img/security-amico.svg').default,
    description: (
      <>
        Automatically detect API keys, tokens, and secrets in your codebase. 
        Catch forgotten secrets before they ever reach GitHub.
      </>
    ),
  },
  {
    title: 'Instant Remidiation',
    Svg: require('@site/static/img/electrician-amico.svg').default,
    description: (
      <>
        One command to migrate detected variables into a safe <code>.env</code> file with 
        proper naming suggestions <a href="https://env-guardian.online/docs/env-naming-conventions/env-variables">here</a>. Secure your project in seconds.
      </>
    ),
  },
  {
    title: 'Transparent & Documented',
    Svg: require('@site/static/img/agreement-amico.svg').default,
    description: (
      <>
        Every rule, detection, and change is fully documented here in our wiki. 
        Stay in control, no black boxes.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
