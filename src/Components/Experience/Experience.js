import "./Experience.css";
import Timeline from "../../Common/Timeline/Timeline";
import { ProfessionalExpData } from "../../Services/DataService";
import {
  EDUCATION_AND_EXPERIENCE,
  PROFESSIONAL_QUALIFICATION,
} from "../../Services/Constants";

const Experience = () => {
  return (
    <div className="experience">
      <div className="heading">
        <h4>{EDUCATION_AND_EXPERIENCE}</h4>
        <h1>{PROFESSIONAL_QUALIFICATION}</h1>
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
