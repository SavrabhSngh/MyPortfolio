import { useNavigate } from "react-router-dom";
import ContextMenu from "../../Common/ContextMenu/ContextMenu";
import "./NoMatch.css";
import {
  FOUR_ZERO_FOUR,
  NOT_FOUND,
  PAGE_DOESNOT_EXIST,
  RETURN_HOME,
  REPORT_PROBLEM,
} from "../../Services/Constants";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="no-match">
      <h1>{FOUR_ZERO_FOUR}</h1>
      <h3>{NOT_FOUND}</h3>
      <span>{PAGE_DOESNOT_EXIST}</span>
      <div className="button">
        <button className="shadow" onClick={() => navigate("/")}>
          {RETURN_HOME}
        </button>
        <button className="shadow">{REPORT_PROBLEM}</button>
      </div>
      <ContextMenu />
    </div>
  );
};

export default NoMatch;
