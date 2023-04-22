import { Routes, Route } from 'react-router-dom';

import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Users from './pages/Users';
import Borrowed from './pages/Borrowed';
import CreateBook from './pages/CreateBook';
import LoginAndRegistration from './pages/LoginAndRegistration';

export const url = 'http://localhost:5001';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<BookList />} />
    <Route path='/book-details/:id' element={<BookDetail />} />
    <Route path='/login' element={<LoginAndRegistration />} />
    <Route path='/users' element={<Users />} />
    <Route path='/borrowed' element={<Borrowed />} />
    <Route path='/edit-book/:id' element={<Borrowed />} />
    <Route path='/create-book' element={<CreateBook />} />
  </Routes>
);

export default AppRoutes;
