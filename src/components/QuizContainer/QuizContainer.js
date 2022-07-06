import axios from 'axios';
import ScoreContainer from 'components/ScoreContainer/ScoreContainer';
import QuizItem from 'components/QuizItem/QuizItem';
import React, { useEffect, useState } from 'react';
import styles from './QuizContainer.module.scss';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const QuizContainer = ({ categoryId }) => {
  const navigate = useNavigate();

  const NUMBER_OF_QUESTIONS = 10;

  const [questionNumber, setQuestionNumber] = useState(0);
  const [triviaQuestions, setTriviaQuestions] = useState(null);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (!categoryId) {
      navigate('/');
      return;
    }

    getTriviaQuestions();
  }, []);

  const getTriviaQuestions = async () => {
    try {
      const response = await axios.get(`https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTIONS}&category=${categoryId}&difficulty=medium`);
      const { data: { results } } = response;
      setTriviaQuestions(results);
    } catch (e) {
      console.error(e.message);
    }
  }

  const updateSelectedAnswers = (selectedAnswer) => {
    setUserSelectedAnswers([...userSelectedAnswers, selectedAnswer]);
    setQuestionNumber(questionNumber + 1);

    if (triviaQuestions[userSelectedAnswers.length].correct_answer === selectedAnswer) {
      setTotalScore(totalScore + 1);
    }
  }

  const progressBarPercentage = () => {
    return {
      progressPercentage: 100 / NUMBER_OF_QUESTIONS * (questionNumber + 1),
      questionNumber: (questionNumber + 1),
      totalNumberQuestions: NUMBER_OF_QUESTIONS
    };
  }

  return (
    <div className={styles['quiz-container']}>
      {!triviaQuestions && <LoadingSpinner />}

      {triviaQuestions && questionNumber !== NUMBER_OF_QUESTIONS &&
        triviaQuestions.slice(questionNumber, questionNumber + 1).map((question, i) => <QuizItem key={i} progressBarPercentage={progressBarPercentage()}
          question={question} updateSelectedAnswers={updateSelectedAnswers} />)}

      {questionNumber === NUMBER_OF_QUESTIONS && <ScoreContainer triviaQuestions={triviaQuestions} selectedAnswers={userSelectedAnswers}
        totalScore={totalScore} />}
    </div>
  );
};

export default QuizContainer;
