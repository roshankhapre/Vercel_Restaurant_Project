import React from "react";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-center">
      <div className="text-red-700 text-9xl">
        404
      </div>
      <SentimentVeryDissatisfiedIcon style={{ fontSize: 100, color: 'red' }} />
      <h1 className="text-4xl md:text-6xl font-bold mt-4">
        Oops! Page Not Found
      </h1>
      <p className="mt-2 text-lg md:text-xl">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
