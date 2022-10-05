import "./Timeline.css";
const Timeline = (props) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">
        {props.startDate} - {props.endDate}
      </div>
      <div className="timeline-content">
        <h3>{props.title}</h3>
        <span>
          {props.org}, {props.location}
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Timeline;
