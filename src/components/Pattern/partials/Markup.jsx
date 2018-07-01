import React from 'react';
import { findIndex } from 'lodash';

import styles from './../styles.module.scss';
import Heading from './../../Heading';

const buildDropdown = (iframes, selected, setSelected) => {
  const setSelectedWrap = event => setSelected(event.target.value);

  return (
    <select value={selected} onChange={setSelectedWrap} className={styles.dropdown}>
      {iframes.map(({ name, filename }) => {
        return <option value={filename}>{name}</option>
      })}
    </select>
  )
}

const buildIframe = (iframes, selected) => {
  const index = findIndex(iframes, { filename: selected });
  const { filename, code, height = 150 } = iframes[index];

  return (
    <div>
      {code ? <pre><code className={styles.code}>{code}</code></pre> : null}
      <iframe 
        src={`/patterns/examples/${filename}`}
        key={filename} 
        {...{ height }} 
        className={styles.iframe}
      />
    </div>
  )
}

const notice = (
  <div className={styles.notice}>This component changes depending on viewport size, make sure to drag the right-bottom corner of the iframe emulate different viewport sizes</div>
)


export default function Markup({ title, iframes, description, responsive, selected, setSelected }) {
  return (
    <div>
      <Heading level={2}>{title}</Heading>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      {responsive ? notice : null}
      {buildIframe(iframes, selected)}
      {iframes.length > 1 ? buildDropdown(iframes, selected, setSelected) : null}
    </div>
  );
}
