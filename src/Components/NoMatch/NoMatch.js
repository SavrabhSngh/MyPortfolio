import ContextMenu from "../../Common/ContextMenu/ContextMenu";
import "./NoMatch.css";
const NoMatch = () => {
  return (
    <div className="no-match">
      <h1>404</h1>
      <h3>OPPS! PAGE NOT FOUND</h3>
      <span>
        Sorry, the page you're looking for doesn't exist. If you think something
        is broken, report a problem
      </span>
      <div className="button">
        <button className="shadow">RETURN HOME</button>
        <button className="shadow">REPORT PROBLEM</button>
      </div>
      <ContextMenu />
    </div>
  );
};

export default NoMatch;
