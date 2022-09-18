import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./App.css";
import DocumentLoader from "./Common/Loader/DocumentLoader";
import BasicModal from "./Common/Modal/Modal";
import Snackbars from "./Common/Snackbar";
import DrawerAppBar from "./Components/AppBar/DrawerAppBar";
import Features from "./Components/Features/Features";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/index";
import Footer from "./Components/Footer/Footer";
function App(props) {
  const [documentState, setDocumentState] = useState(false);
  const [timmer, setTimmer] = useState(false);
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setDocumentState(true);
  }, [document.readyState]);

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    setTimeout(() => {
      setTimmer(true);
    }, 5000);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
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

export default connect(mapStateToProps, {})(App);

App.propTypes = {
  snackbarData: PropTypes.shape({
    open: PropTypes.bool,
    autoHideDuration: PropTypes.number,
    severity: PropTypes.string,
    message: PropTypes.string,
  }),
};
