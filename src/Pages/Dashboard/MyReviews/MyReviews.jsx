import { Helmet } from "react-helmet";

const MyReviews = () => {
  return (
    <div>
      <Helmet>
        <title>My Reviews - Doc House</title>
      </Helmet>
      <h1 className="text-4xl m-9 font-bold border-l-8 border-[#F7A582] p-3">
        My Reviews
      </h1>
    </div>
  );
};

export default MyReviews;
