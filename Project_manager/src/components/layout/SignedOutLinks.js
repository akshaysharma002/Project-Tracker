import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Button color="inherit" className="right">
        <Link to="/signin">Sign In</Link>
      </Button>
      <Button color="inherit" href="signup">
        <Link to="/signup">Sign up</Link>
      </Button>
    </React.Fragment>
  );
};

export default SignedOutLinks;
