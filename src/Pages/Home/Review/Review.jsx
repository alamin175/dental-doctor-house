import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

// import "./styles.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);
  return (
    <div>
      <div className="text-center p-6 md:w-4/6 md:mt-32 mx-auto">
        <h3 className="mb-4 text-2xl md:text-5xl font-bold">
          What Our Patients Says
        </h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="border-4 border-orange-500 w-11/12 md:w-1/2 md:my-10 text-start p-10 rounded-lg mx-auto">
                <div className="md:flex justify-between">
                  <div className="flex">
                    <FaUserCircle className="text-6xl mx-4"></FaUserCircle>
                    <div>
                      <h1 className="text-2xl font-bold">{review.name}</h1>
                      <p>
                        From :{" "}
                        <span className="text-orange-600">
                          {review.location}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <FaQuoteLeft className="hidden md:block md:enabled md:text-6xl text-orange-600"></FaQuoteLeft>
                </div>
                <div className="py-2 md:p-4 mx-auto">
                  <p>{review.details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
