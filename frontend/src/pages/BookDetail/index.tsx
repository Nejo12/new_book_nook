import { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchBookDetail } from '../../redux/actions/book';
import { borrowBook, returnBook } from '../../redux/actions/borrow';
import { AppState, Book, BookList } from '../../types/types';
import Spinner from '../../components/spinner';
import { url } from '../../Routes';
import BookCard from '../../components/bookCard';

interface IBorrowedBooks {
  books: Book[];
  borrowId: string[];
}

const BookDetail = (): JSX.Element => {
  const user = useSelector((state: AppState) => state.authState.user);
  const { loading, bookProps, isBorrowed } = useSelector(
    (state: AppState) => state.bookState,
  );
  const bookState = useSelector((state: AppState) => state.bookState);
  // const { msg, error } = useSelector((state: AppState) => state.borrowState)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams();

  const bookId = id.id!;

  // Fetch a Book Detail
  useEffect(() => {
    dispatch(fetchBookDetail(bookId));
  }, [dispatch, bookId]);

  // When borrowing book
  const userId = user._id;
  const onBorrowClick = (bookId: string) => {
    const bookData = {
      userId,
      bookId,
    };
    dispatch(borrowBook(bookData));
    // toast.error(error) || toast.success(msg)
    // error ? toast.error(error) : toast.success(msg)  TODO:
    setTimeout(() => {
      navigate('/');
    }, 100);
  };

  // When user intend returning borrowed book
  const onReturnClick = () => {
    if (bookState.borrow === null) {
      return;
    }
    const borrowId = bookState.borrow[0]._id;
    dispatch(returnBook(borrowId));
    toast.success('Book returned successfully...'); // TODO: set messages from backend
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const deleteBook = (bookId: string) => {
    axios.delete(`${url}/api/books/${bookId}`).then((res) => {
      if (res.status === 204) return toast(`Book Successfully Deleted`);
    });
    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='page-container p-2'>
      {/* <Link to='/'>
        <img
          src='https://img.icons8.com/wired/64/000000/circled-left-2.png'
          alt='back-btn'
          className='back engrave'
        />
      </Link> */}
      <div className='nowrap left'>
        {bookProps?.copies ? (
          <div className='emboss'>
            <span className='note hide-md'>NOTE: </span> We have{' '}
            <span className='copies lead'>
              {' '}
              {bookProps?.copies} {''}
            </span>{' '}
            copies left.
          </div>
        ) : null}

        <div>
          <span className='engrave lead'>Title: </span>{' '}
          <span className='details lead'> {bookProps?.title}</span>
        </div>
        <div>
          <span className='engrave lead'>Author: </span>
          <span className='details lead'> {bookProps?.author}</span>
        </div>

        <div>
          <span className='engrave lead'>Description: </span>
          <span className='details lead'>{bookProps?.description}</span>
        </div>

        <div>
          <span className='engrave lead'>ISBN: </span>
          <span className='details lead'> {bookProps?.isbn}</span>
        </div>
        <div>
          <span className='engrave lead'>Publisher: </span>
          <span className='details lead'> {bookProps?.publisher}</span>
        </div>
        <div>
          <span className='engrave lead'>Published on: </span>
          <span className='details lead'>
            {' '}
            {new Date(bookProps?.publishedDate).toDateString()}
          </span>
        </div>
      </div>

      {user.role === 'admin' ? (
        <div>
          <Link
            to={`/edit-book/${bookId}`}
            className='lead engrave submit edit'>
            Edit Book
          </Link>
          <button
            onClick={() => deleteBook(bookId)}
            className='lead engrave submit red'>
            Delete Book
          </button>
        </div>
      ) : (
        <div>
          {bookProps?.copies === 0 ? (
            <Link to='/'>
              <h4 style={{ color: 'red' }} className='google-btn'>
                No copies left. Check back later.
              </h4>
            </Link>
          ) : (
            <div>
              {!userId ? (
                <Link to='/login'>
                  <button className='submit'>Login or Register</button>
                </Link>
              ) : (
                <div>
                  {isBorrowed ? (
                    <button className='submit' onClick={() => onReturnClick()}>
                      Return this book
                    </button>
                  ) : (
                    <button
                      className='submit'
                      onClick={() => onBorrowClick(bookId)}>
                      Borrow this book
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <p className='page-title lead emboss'>Book Details </p>
    </div>
  );
};

export default BookDetail;
