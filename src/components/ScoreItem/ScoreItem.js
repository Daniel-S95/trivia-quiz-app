import React from 'react';
import styles from './ScoreItem.module.scss';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const ScoreItem = ({ question, correctAnswer, selectedAnswer }) => {
  const isAnswerCorrect = correctAnswer === selectedAnswer;

  return (
    <tr>
      <td>{question}</td>

      <td className={styles[isAnswerCorrect ? "correct-answer" : "wrong-answer"]} colSpan={isAnswerCorrect ? 2 : 1}>{selectedAnswer}</td>

      {!isAnswerCorrect && <td>{correctAnswer}</td>}

      <td>{isAnswerCorrect ? <IoIosCheckmarkCircle style={{ color: 'green' }} /> : <IoIosCloseCircle style={{ color: 'red' }} />}</td>
    </tr>
  );
};

export default ScoreItem;
