import React from 'react';
import styles from './AnalyticsPage.module.scss';

export type AnalyticsPageProps = {};

export const AnalyticsPage: React.FC<AnalyticsPageProps> = (props) => {
  return (
    <div className={styles.container}>AnalyticsPage Component</div>
  );
};
