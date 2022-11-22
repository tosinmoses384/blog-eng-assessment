import React from "react";
import AccountVerificationSuccessAlert from "./Alerts/AccountVerificationSuccessAlert";
import PublicNavbar from "./Public/PublicNavbar";

const Navbar = () => {
  const userAuth = true;
  const token = false;
  const loading = false;
  const appErr = null;
  const serverErr = null;

  return (
    <>
      {userAuth && <PublicNavbar />}

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
