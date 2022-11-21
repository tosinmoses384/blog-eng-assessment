import React from "react";
import AccountVerificationAlertWarning from "./Alerts/AccountVerificationAlertWarning";
import AccountVerificationSuccessAlert from "./Alerts/AccountVerificationSuccessAlert";
import PublicNavbar from "./Public/PublicNavbar";

const Navbar = () => {
  //get user from store
  // const state = useSelector(state => state.users);
  // const { userAuth, profile } = state;
  // const isAdmin = userAuth?.isAdmin;

  // const profile = {};
  const userAuth = true;
  // const isAdmin = false;

  //account verification

  // const { loading, appErr, serverErr, token } = account;
  // const token = 'qrifj4ur84hng893tj39j92rj2jr92j9rj9rj0923jr0fj3fj9fj209fj20fj0';
  const token = false;
  const loading = false;
  const appErr = null;
  const serverErr = null;
  // const appErr = 'this is app err';
  // const serverErr = 'this is server error';
  // const isCreated = true;
  // const isCreated = false;

  return (
    <>
      {userAuth && <PublicNavbar />}

      {/* Display alert */}
      {userAuth && !userAuth.isVerified && <AccountVerificationAlertWarning />}

      {/* display success msg */}
      {loading && <h2 className="text-center">Loading please wait...</h2>}
      {token && <AccountVerificationSuccessAlert />}

      {appErr || serverErr ? (
        <h2 className="text-center text-red-500">
          {serverErr} {appErr}
        </h2>
      ) : null}
    </>
  );
};

export default Navbar;
