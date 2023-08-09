import React from 'react';
import styles from './{{ pascalCase name }}.module.scss';

export type {{ pascalCase name }}Props = {};

export const {{ pascalCase name }}: React.FC<{{ pascalCase name }}Props> = (props) => {
  return (
    <div className={styles.container}>{{ pascalCase name }} Component</div>
  );
};
