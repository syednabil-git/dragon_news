import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
  } = news;

  // Format Date
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md ">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 cursor-pointer">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold leading-snug">
          {title}
        </h2>

        <figure className="my-4">
          <img
            src={image_url}
            alt="news"
            className="rounded-lg w-full h-150 object-cover"
          />
        </figure>

        <p className="text-sm text-gray-600">
          {details.length > 200
            ? details.slice(0, 200) + "..."
            : details}
          <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center gap-2 text-orange-500">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-600 ml-2">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;