import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'About DAAS',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Get a high level overview of what DAAS is and how it can chagne the way we work.
      </>
    ),
  },
  {
    title: 'Status',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Find out more information about the current status of DAAS in Grasplabs and what roadmap includes.
      </>
    ),
  },
  {
    title: 'Using DAAS',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get information on how to use DAAS.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
