import "./Experience.css";
import Timeline from "../../Common/Timeline/Timeline";
import { ProfessionalExpData } from "../../Services/DataService";
const Experience = () => {
  return (
    <div className="experience">
      <div className="heading">
        <h4>EDUCATION & PROFESSIONAL EXPERIENCE</h4>
        <h1>Professional Qualification</h1>
      </div>
      <div className="exp-timeline">
        <section className="timeline-section">
          <div className="timeline-items">
            {ProfessionalExpData.map((obj, index) => {
              return (
                <Timeline
                  key={index}
                  startDate={obj.startDate}
                  endDate={obj.endDate}
                  org={obj.org}
                  location={obj.location}
                  title={obj.title}
                  description={obj.description}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
