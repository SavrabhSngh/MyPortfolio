import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./App.css";
import DocumentLoader from "../Common/Loader/DocumentLoader";
import BasicModal from "../Common/Modal/Modal";
import Snackbars from "../Common/Snackbar";
import DrawerAppBar from "./AppBar/DrawerAppBar";
import Features from "./Features/Features";
import Projects from "./Projects/Projects";
import About from "./About/index";
import Footer from "./Footer/Footer";
function Components(props) {
  const [documentState, setDocumentState] = useState(false);
  const [timmer, setTimmer] = useState(false);

  useEffect(() => {
    setDocumentState(true);
  }, [document.readyState]);

  useEffect(() => {
    setTimeout(() => {
      setTimmer(true);
    }, 5000);
  }, []);

  if (timmer) {
    if (documentState) {
      return (
        <div className="App">
          <DrawerAppBar />
          <div className="container">
            <About />
            <Features />
            <Projects />
          </div>
          <Footer />
          <BasicModal />
          <Snackbars />
        </div>
      );
    }
  } else {
    return <DocumentLoader />;
  }
}

const mapStateToProps = (state) => {
  return {
    snackbarData: state.snackbar,
  };
};

export default connect(mapStateToProps, {})(Components);

Components.propTypes = {
  snackbarData: PropTypes.shape({
    open: PropTypes.bool,
    autoHideDuration: PropTypes.number,
    severity: PropTypes.string,
    message: PropTypes.string,
  }),
};
