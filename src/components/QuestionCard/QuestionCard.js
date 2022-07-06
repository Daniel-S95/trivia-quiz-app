import React from 'react';
import styles from './QuestionCard.module.scss';

const QuestionCard = ({ question }) => (
  <div className={styles['question-card']}>
    {question}
  </div>
);

export default QuestionCard;
