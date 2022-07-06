import axios from 'axios';
import CategoryItem from 'components/CategoryItem/CategoryItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoriesContainer.module.scss';

const CategoriesContainer = ({ setCategoryId }) => {
  const navigate = useNavigate();

  const [triviaCategories, setTriviaCategories] = useState(null);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api_category.php');
      let { data: { trivia_categories } } = response;

      setTriviaCategories(trivia_categories);
    } catch (e) {
      console.error(e.message);
    }
  }

  const categorySelectHandler = (categoryId) => {
    setCategoryId(categoryId);
    navigate('quiz');
  }

  return (
    <div className={styles['categories-container']}>
      {!triviaCategories && <LoadingSpinner />}

      {triviaCategories && <div className={styles['trivia-categories']}>
        {triviaCategories.map((category, i) => <CategoryItem key={i} category={category} categorySelectHandler={categorySelectHandler} />)}
      </div>}
    </div>
  );
};

export default CategoriesContainer;
