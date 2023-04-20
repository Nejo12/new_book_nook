import { Routes, Route } from 'react-router-dom';

import BookList from './pages/BookList';

export const url = 'http://localhost:5001';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<BookList />} />
  </Routes>
);

export default AppRoutes;
