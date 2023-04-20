import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooksRequest } from '../../redux/actions/book';
import { AppState, Book } from '../../types/types';
import BookCard from '../../components/bookCard';
import Spinner from '../../components/spinner';

const BookList = (): JSX.Element => {
  const { data, loading } = useSelector((state: AppState) => state.bookState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBooksRequest());
  }, [dispatch]);

  if (loading) <Spinner />;

  return (
    <div className='listContainer p-2'>
      {data &&
        data.map((book: Book) => <BookCard key={uuidv4()} bookData={book} />)}
    </div>
  );
};

export default BookList;
