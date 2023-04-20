import { Routes, Route } from 'react-router-dom';

import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';

export const url = 'http://localhost:5001';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<BookList />} />
    <Route path='/book-details/:id' element={<BookDetail />} />
  </Routes>
);

export default AppRoutes;
