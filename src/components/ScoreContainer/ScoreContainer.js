import ScoreItem from 'components/ScoreItem/ScoreItem';
import React from 'react';
import { Table } from 'react-bootstrap';
import { parseString } from 'utils/parseString';
import styles from './ScoreContainer.module.scss';

const ScoreContainer = ({ triviaQuestions, selectedAnswers, totalScore }) => {
  return (
    <div className={styles['score-container']}>
      <div className={styles['total-score']}>
        You got {totalScore} questions correct out of {triviaQuestions.length}.
      </div>

      <Table responsive striped hover>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Correct?</th>
          </tr>
        </thead>

        <tbody>
          {triviaQuestions.map((question, i) => <ScoreItem key={i} question={parseString(question.question)}
            correctAnswer={parseString(question.correct_answer)} selectedAnswer={parseString(selectedAnswers[i])} />
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ScoreContainer;
