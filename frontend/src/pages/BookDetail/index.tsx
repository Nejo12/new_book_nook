import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBookDetail } from '../../redux/actions/book';
import { AppState } from '../../types/types';
import Spinner from '../../components/spinner';

const BookDetail = (): JSX.Element => {
  const id = useParams();
  const _id = id.id!;

  const { loading, data } = useSelector((state: AppState) => state.bookState);

  const dispatch = useDispatch();

  // Fetch a Book Detail
  React.useEffect(() => {
    dispatch(fetchBookDetail(_id));
  }, [dispatch, _id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='listContainer-details p-2'>
      <Link to='/'>
        <img
          src='https:img.icons8.com/wired/64/000000/circled-left-2.png'
          alt='back-btn'
          className='back engrave'
        />
      </Link>
      <br />
      <p className='page-title lead emboss'>Book's Details </p>

      {data?.copies ? (
        <p className='emboss'>
          <span className='note hide-md'>NOTE: </span> We have just{' '}
          <span className='copies lead'>
            {data?.copies} {''}
          </span>{' '}
          copies left.
        </p>
      ) : null}
      <br />
      <br />
      <br />
      <div>
        <span className='engrave lead'>Title: </span>{' '}
        <span className='details lead'> {data?.title}</span>
      </div>
      <div>
        <span className='engrave lead'>Author: </span>
        <span className='details lead'> {data?.author}</span>
      </div>
      <br />
      <div>
        <span className='engrave lead'>Description: </span>
        <span className='details lead'>{data?.description}</span>
      </div>
      <br />
      <div>
        <span className='engrave lead'>ISBN: </span>
        <span className='details lead'> {data?.isbn}</span>
      </div>
      <div>
        <span className='engrave lead'>Publisher: </span>
        <span className='details lead'> {data?.publisher}</span>
      </div>
      <div>
        <span className='engrave lead'>Published on: </span>
        <span className='details lead'>
          {new Date(data?.publishedDate).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default BookDetail;
