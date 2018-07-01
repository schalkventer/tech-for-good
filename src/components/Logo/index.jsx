import React from 'react';
import styles from './styles.module.scss';

export default function Logo({ breakpoint }) {
  return (
    <picture>
      <source
        media={`(min-width: ${breakpoint}px)`}
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330390/logo.svg"
      />
      <img
        className={styles.root}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330390/logo-square.svg"
        alt=""
      />
    </picture>
  )
}
