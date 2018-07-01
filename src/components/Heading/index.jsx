import React from 'react';
import styles from './styles.module.scss';


export default function Heading({ children, primary, level = 6 }) {
  const rootCss = [
    styles.root,
    primary ? styles.isPrimary : null,
  ].join(' ')


  const Tag = `h${level}`
  return <Tag className={rootCss}>{children}</Tag>;
}