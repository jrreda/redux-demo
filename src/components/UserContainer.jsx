import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
import { useEffect } from 'react';

function UserContainer({ userData, fetchUsers }) {

  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>{userData.error}</h2> : (
    <div>
      <h2>User List</h2>
      <div>
        {userData?.users?.users?.map(user => <p key={user.id}>{user.firstName} {user.lastName}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);