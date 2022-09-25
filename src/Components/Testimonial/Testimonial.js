import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TestimonialData } from "../../Services/DataService";
import Avatar from "@mui/material/Avatar";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h4>HAPPY CLIENT WORKS !</h4>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "4vh" }}
      >
        <div className="round"></div>
        <div className="line"></div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {TestimonialData.map((obj, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={
                  index % 2 === 1 ? { transform: "translateY(20px)" } : null
                }
                className="card"
              >
                <i className="fas fa-quote-left"></i>
                {obj.desc} <i className="fas fa-quote-right"></i>
              </div>
              <div
                style={index % 2 === 1 ? { paddingTop: "20px" } : null}
                className="dflex profile"
              >
                <Avatar alt={obj.name} src="/static/images/avatar/1.jpg" />
                <div className="dflex profile-details">
                  <h5>{obj.name}</h5>
                  <span>{obj.post}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
