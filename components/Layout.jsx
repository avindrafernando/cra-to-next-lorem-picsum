import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.content}>{children}</div>
    </>
  );
};

export default Layout;
