import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from './contexts/authContext';

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <center><b><p>
      Welcome {context.userName}! <button onClick={() => context.signout()}>Sign out</button>
    </p></b></center>
  ) : (
    <center><b><p>
      You are not currently not logged in!{" "}
    </p></b></center>
  );
};

export default withRouter(BaseAuthHeader);