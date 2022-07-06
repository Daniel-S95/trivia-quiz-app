import React from 'react';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import styles from './AnswerToggle.module.scss';

const AnswerToggle = ({ i, selection, answer, setSelection }) => {

  return (
    <ToggleButton
      key={i}
      id={`radio-${i}`}
      type="radio"
      className={selection === answer ? styles["answer-toggle-button-active"] : styles["answer-toggle-button"]}
      name="radio"
      value={answer}
      checked={selection === answer}
      onChange={(e) => setSelection(e.currentTarget.value)}
    >
      {answer}
    </ToggleButton>
  );
};

export default AnswerToggle;
