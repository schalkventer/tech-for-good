import React from 'react';
import styles from './styles.module.scss';

export default function Page({ children, header, footer }) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        {header}
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        {footer}
      </footer>
    </div>
  )
}