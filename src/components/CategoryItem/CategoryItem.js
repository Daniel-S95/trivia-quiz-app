import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './CategoryItem.module.scss';

const CategoryItem = ({ category, categorySelectHandler }) => {
  return (
    <div className={styles['category-item']}>
      <div className={styles['category-name']}>{category.name}</div>
      <Button className={styles['category-button']} onClick={() => categorySelectHandler(category.id)}>Choose Category</Button>
    </div>
  );
};

export default CategoryItem;
