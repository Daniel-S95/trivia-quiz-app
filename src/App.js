import './App.scss';
import React, { useState } from 'react';
import Header from 'components/Header/Header';
import CategoriesContainer from 'components/CategoriesContainer/CategoriesContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import QuizContainer from 'components/QuizContainer/QuizContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [categoryId, setCategoryId] = useState(null);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CategoriesContainer setCategoryId={setCategoryId} />} />
        <Route path="quiz" element={<QuizContainer categoryId={categoryId} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
