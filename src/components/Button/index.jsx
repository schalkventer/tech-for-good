import React from 'react';
import Link from 'gatsby-link';
import styles from './styles.module.scss';


const isInternal = path => /^\/(?!\/)/.test(path);


export default function Button(props) {
  const {
    link,
    onClick,
    children,
    primary,
    inline,
    submit,
    utils = null,
  } = props;

  const rootCss = [
    styles.root,
    (primary ? styles.isPrimary : null),
    (inline ? styles.isInline : null),
    utils,
  ].join(' ');


  if (link && !onClick) {
    if (isInternal(link)) {
      return <Link to={link} className={rootCss}>{children}</Link>;
    }
      return <a href={link} className={rootCss} target="_blank">{children}</a>;
  }

  return (
    <button
      className={rootCss}
      type={submit ? 'submit' : null}
      {...{ onClick }}
    >
      {children}
    </button>
  );
}