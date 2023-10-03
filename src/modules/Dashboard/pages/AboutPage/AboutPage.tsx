import React from 'react';
import styles from './AboutPage.module.scss';

export type AboutPageProps = {};

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <div className={styles.container}>AboutPage Component</div>
  );
};
