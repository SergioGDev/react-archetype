import React from 'react';
import styles from './ContactPage.module.scss';

export type ContactPageProps = {};

export const ContactPage: React.FC<ContactPageProps> = (props) => {
  return (
    <div className={styles.container}>ContactPage Component</div>
  );
};
