import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar, Autoplay } from "swiper";
import dataTestimonials from "../../helpers/dataTestimonials";
import quote from "../../assets/Icons/quote.svg";
import doubleQuote from "../../assets/Icons/double-quotes.svg";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";

function Testimonial() {
  SwiperCore.use([Pagination, Scrollbar, Autoplay]);

  return (
    <Fragment>
      <section id="testimonials" className="testimonials">
        <h2>Comentarios De Clientas</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerGroup: 1,
              slidesPerView:1
            },
            368: {
              slidesPerGroup: 2,
              slidesPerView:2
            },
          }}
        >
          {dataTestimonials.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="testimonials-slider-div">
                <img src={data.image} className="testimonial-img" alt="" />
                <div className="testimonial-item">
                  <p>
                    <img src={quote} alt="quote icon" className="quote-icon"/>
                    {data.description}
                    <img src={doubleQuote} alt="quote icon" className="doublequote-icon"/>
                  </p>

                  <h3>{data.name}</h3>
                  <h4>{data.roll}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Fragment>
  );
}
export default Testimonial;
