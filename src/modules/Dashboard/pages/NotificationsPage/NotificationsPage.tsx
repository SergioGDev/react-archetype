import React from 'react';
import styles from './NotificationsPage.module.scss';

export type NotificationsPageProps = {};

export const NotificationsPage: React.FC<NotificationsPageProps> = (props) => {
  return (
    <div className={styles.container}>NotificationsPage Component</div>
  );
};
