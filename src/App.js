import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./App.css";
import Snackbars from "./Common/Snackbar";
import { useEffect } from "react";
import { showSnackbar } from "./Store/Snackbar/action";
import DrawerAppBar from "./Components/DrawerAppBar";
import Features from "./Components/Features/Features";
import Projects from "./Components/Projects/Projects";
function App(props) {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    props.showSnackbar({
      open: true,
      autoHideDuration: 6000,
      severity: "success",
      message: "PropTypes.string",
    });
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="App">
      <DrawerAppBar />
      <div className="container">
        <Features />
        <Projects />
      </div>
      <Snackbars />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    snackbarData: state.snackbar,
  };
};

export default connect(mapStateToProps, {
  showSnackbar,
})(App);

App.propTypes = {
  snackbarData: PropTypes.shape({
    open: PropTypes.bool,
    autoHideDuration: PropTypes.number,
    severity: PropTypes.string,
    message: PropTypes.string,
  }),
};
