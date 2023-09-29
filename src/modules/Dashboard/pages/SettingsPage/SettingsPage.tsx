import React from 'react';
import styles from './SettingsPage.module.scss';

export type SettingsPageProps = {};

export const SettingsPage: React.FC<SettingsPageProps> = (props) => {
  return (
    <div className={styles.container}>SettingsPage Component</div>
  );
};
