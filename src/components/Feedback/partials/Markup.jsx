import React from 'react';
import styles from './../styles.module.scss';
import Fineprint from './../../Fineprint';


export default Markup({ success, createModal, triggerSuccess, sendFeedback }) {
  
  const questionCss = [
    styles.question,
    success ? styles.isHidden : null,
  ].join(' ');

  const successCss = [
    styles.success,
    success ? styles.isActive : null,
  ].join(' ');

  const createModalWrap = () => createModal(modalMarkup);

  const question = (
    <div className={questionCss}>
      <Fineprint>
        <span>Was this page helpful?&nbsp;</span>
        <button className={styles.button} onClick={triggerSuccess}>
          Yes
        </button>
        <span>&nbsp;/&nbsp;</span>
        <button className={styles.button} onClick={createModalWrap}>
          No
        </button>
      </Fineprint>
    </div>
  )

  const success = (
    <Fineprint>
      <div className={successCss}>Thank you. We appreciate the feedback!</div>
    </Fineprint>
  )

  return (
    <div className={style.root}>
      {question}
      {success}
    </div>
  )

}









function Markup({ modal, success, triggerSuccess, triggerModal }) {  
  const questionCss = [
    'question',
    success ? 'isActive' : null,
  ].join(' ')
  
  const successCss = [
    'success',
    success ? 'isActive' : null,
  ].join(' ');
  
  const modalMarkup = (
    <div className="modal">
      <div className="test">
        <label>
          <span>Please tell us why</span>
          <input />
        </label>
        <button onClick={triggerSuccess}>Send</button>
      </div>
    </div>
  );
  
  return (
    <div>
      { modal ? modalMarkup : null }
      <div className="Feedback">
        <div className={questionCss}>
          <span>Was this page helpful?&nbsp;</span>
          <button className="Feedback-button" onClick={triggerSuccess}>Yes</button>
          <span>&nbsp;/&nbsp;</span>
          <button className="Feedback-button" onClick={e => triggerModal(e)}>No</button>
        </div>
        <div className={successCss}>Thank you. We appreciate the feedback!</div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Feedback />,
  document.getElementById('yes'),
)