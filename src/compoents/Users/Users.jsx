import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/actions/users.actions";

const Users = ({ users, fetchUsers }) => {
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
