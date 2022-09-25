import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { showModal } from "../Store/Modal/action";

function ProjectsCard(props) {
  const handleClick = () => {
    props.showModal({ open: true, ...props });
  };

  return (
    <Grid
      display={
        props.index < 4
          ? { xs: "flex", md: "flex", lg: "flex" }
          : { xs: "none", md: "flex", lg: "flex" }
      }
      sx={{ justifyContent: "center", alignItems: "center" }}
      item
      lg={4}
      sm={6}
      md={6}
      xs={12}
    >
      <div className="card" onClick={handleClick}>
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="category">
          <span>{props.category}</span>
          <label>
            <i className="far fa-heart"></i>
            {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <a href="#popup" className="arrow">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  showModal,
})(ProjectsCard);

ProjectsCard.propTypes = {
  showModal: PropTypes.func.isRequired,
};
