import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Index Fund',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Index fund is like a mutual fund or Exchange traded fund, which is designed 
        to follow certain preset rules so that it can replicate the performance of a
         specified ASSET basket of underlying investment.
      </>
    ),
  },
  {
    title: 'Blue Chip',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Blue chip is your gateway to simplified, diversified crypto investment. 
        As crypto market evolves and expands, navigating the complexity of individual 
        tokens can be daunting task. Blue chip offers smart and accessible way to invest
         in the exciting world of cryptocurrencies.

      </>
    ),
  },
  {
    title: 'Why BLUE',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Blue Chip provides a portfolio of less risky and market winning crypto assets. 
        We provide bechmark returns in the cryptocurrency market, upheld by retails, 
        institutional and high-net worth individuals
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
