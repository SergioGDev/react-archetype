import React from 'react';
import styles from './HomePage.module.scss';

export type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div className={styles.container}>HomePage Component</div>
  );
};
