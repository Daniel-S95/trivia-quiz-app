import AnswerToggle from 'components/AnswerToggle/AnswerToggle';
import QuestionCard from 'components/QuestionCard/QuestionCard';
import QuizProgressBar from 'components/QuizProgressBar/QuizProgressBar';
import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import styles from './QuizItem.module.scss';
import { parseString } from 'utils/parseString';

const QuizItem = ({ question, updateSelectedAnswers, progressBarPercentage }) => {
  const [allPossibleAnswers, setAllPossibleAnswers] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    shuffleAnswers();
    setIsError(false);
  }, [question]);

  const shuffleAnswers = () => {
    let { correct_answer, incorrect_answers } = question;
    let allAnswers = [...incorrect_answers, correct_answer];

    let currentIndex = allAnswers.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [allAnswers[currentIndex], allAnswers[randomIndex]] = [
        allAnswers[randomIndex], allAnswers[currentIndex]];
    }

    setAllPossibleAnswers(allAnswers);
  }

  const nextQuestionHandler = () => {
    if (!selectedAnswer) {
      setIsError(true);
      return;
    }

    updateSelectedAnswers(selectedAnswer);
    setSelectedAnswer(null);
  }

  return (
    <div className={styles['quiz-item']}>
      {allPossibleAnswers &&
        <>
          <QuizProgressBar progressBarPercentage={progressBarPercentage} />

          <QuestionCard question={parseString(question.question)} />

          <div className={allPossibleAnswers.length === 2 ? `${styles['answer-container']} ${styles['flex-row']}` : `${styles['answer-container']} ${styles['flex-column']}`}>
            {allPossibleAnswers.map((answer, i) => {
              return <React.Fragment key={i}>
                <ButtonGroup className={`"mb-2" ${styles['button-group']}`}>
                  <AnswerToggle i={i} selection={selectedAnswer} answer={parseString(answer)} setSelection={setSelectedAnswer} />
                </ButtonGroup>
              </React.Fragment>
            })}
          </div>


          <div className={styles['next-button-error-container']}>
            {isError && <div className={styles['error-message']}>An answer must be selected</div>}
            <Button className={styles['next-button']} onClick={nextQuestionHandler}>Next Question</Button>
          </div>
        </>
      }

    </div>
  );
};

export default QuizItem;
