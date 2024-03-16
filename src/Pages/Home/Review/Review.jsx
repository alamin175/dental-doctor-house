import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

// import "./styles.css";

const Review = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const result = await axiosPublic.get("reviews");
      return result.data;
    },
  });

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
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
        <Marquee>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-4 w-[370px] h-[450px] md:w-[600px] md:h-[400px] border-orange-500  m-4 md:m-10 text-start p-4 md:p-10 rounded-lg "
            >
              <div className="md:flex justify-between">
                <div className="flex justify-center items-center m-3">
                  <FaUserCircle className="text-6xl mx-4"></FaUserCircle>
                  <div>
                    <h1 className="text-2xl font-bold">{review.name}</h1>
                    <p>
                      From :{" "}
                      <span className="text-orange-600">{review.location}</span>{" "}
                    </p>
                  </div>
                </div>
                <FaQuoteLeft className="hidden md:block md:enabled md:text-6xl text-orange-600"></FaQuoteLeft>
              </div>
              <div className="md:py-2 md:p-4 mx-auto">
                <p>{review.details}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Review;
