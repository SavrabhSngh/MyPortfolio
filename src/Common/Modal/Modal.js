import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Modal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { hideModal } from "../../Store/Modal/action";
import { DUMMY_TEXT } from "../../Services/Messages";
import {
  FEATURED_DESIGN,
  LIKE_THIS,
  VIEW_PROJECT,
} from "../../Services/Constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "81%",
  bgcolor: "#ecf0f3",
  boxShadow: 24,
  p: { lg: 5, md: 4, sm: 3, xs: 3 },
};

function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.ModalData.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container rowSpacing={3} columnSpacing={{ lg: 5, md: 4 }}>
            <Grid
              display={{ sm: "flex", xs: "flex", md: "flex", lg: "block" }}
              justifyContent="center"
              item
              lg={6}
              md={12}
              sm={12}
            >
              <img
                className="modal-image"
                src={props.ModalData.image}
                alt=""
                draggable="false"
              />
            </Grid>
            <Grid
              display={{ xs: "block", md: "block", lg: "block" }}
              item
              lg={6}
              md={12}
              sm={12}
            >
              <div className="right-side">
                <span className="featured">{FEATURED_DESIGN}</span>
                <h1>{props.ModalData.title}</h1>
                <p>{DUMMY_TEXT}</p>
                <p className="project-dec">{DUMMY_TEXT}</p>
                <div className="button">
                  <button className="shadow">
                    {LIKE_THIS} <i className="far fa-thumbs-up"></i>
                  </button>
                  <button className="shadow">
                    {VIEW_PROJECT} <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <div className="close-button card" onClick={props.hideModal}>
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ModalData: state.ModalData,
  };
};

export default connect(mapStateToProps, {
  hideModal,
})(BasicModal);

BasicModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
};
