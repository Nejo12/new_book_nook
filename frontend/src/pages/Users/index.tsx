import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { AppState } from '../../types/types';
import { fetchUsers } from '../../redux/actions/user';
import UserCard from '../../components/userCard';

const Users = () => {
  const userList = useSelector((state: AppState) => state.userState.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='listContainer p-2'>
      {userList &&
        userList.map((user) => <UserCard key={uuidv4()} userData={user} />)}
    </div>
  );
};

export default Users;
