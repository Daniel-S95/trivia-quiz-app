import React from 'react';
import styles from './QuizProgressBar.module.scss';
import { ProgressBar } from 'react-bootstrap';

const QuizProgressBar = ({ progressBarPercentage: { progressPercentage, questionNumber, totalNumberQuestions } }) => {
  return (
    <div className={styles['progress-bar']}>
      <ProgressBar striped variant="info" now={progressPercentage} />
      <div className={styles['question-number']}>Question {questionNumber}/{totalNumberQuestions}</div>
    </div>
  );
};

export default QuizProgressBar;
