import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooksRequest } from '../../redux/actions/book';
import { AppState, Book } from '../../types/types';

const BookList = (): JSX.Element => {
  const { data, loading } = useSelector((state: AppState) => state.bookState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBooksRequest());
  }, [dispatch]);

  if (loading) <h1>Loading . . .</h1>;

  return (
    <div>
      {data && data.map((book: Book) => <p key={uuidv4()}>{book.title}</p>)}
    </div>
  );
};

export default BookList;
