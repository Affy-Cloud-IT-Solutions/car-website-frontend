import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Reviews = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Very helpful staff, great service.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment:
        "Bought a car from this garage, problem with gear box, but was offered a full refund which impressed me with service and attitude. Thank you!",
    },
    {
      name: "Akbar Khan",
      rating: 5,
      comment:
        "Thank you Visa Cars. Am happy with my new car. Prices are amazing.",
    },
    {
      name: "Waseem Rashid",
      rating: 5,
      comment:
        "I was looking for BMW and found the dealer to be very reasonable. Will buy all my cars from them. Excellent service provided during these hard lines of COVID.",
    },
    {
      name: "Qudsia Rashid",
      rating: 5,
      comment:
        "Very friendly staff, great service. Would recommend to family and friends.",
    },
    {
      name: "Mohd Abdul Khalid",
      rating: 4,
      comment:
        "Great service, good communication. Compare prices with others as well.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Review:", { name, rating, comment });
    setName("");
    setComment("");
    setRating(0);
  };

  // Hollow Star SVG
  const HollowStar = ({ filled, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "#facc15" : "none"}
      viewBox="0 0 24 24"
      stroke={filled ? "#facc15" : "#9ca3af"}
      strokeWidth={filled ? 0 : 2}
      className="w-12 h-12 cursor-pointer transition-all hover:scale-110"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <div className="space-y-4 mb-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-700  rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-100">{review.name}</h3>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HollowStar key={i} filled={i < review.rating} />
                ))}
              </div>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="border border-blue-200 rounded-lg p-6">
        <h3 className="text-sm text-center py-4 font-semibold text-blue-900 mb-4">
          Please feel free to leave a comment, enter your name and comment in
          the form below, complete the simple verification task and then click
          on submit.
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name/Business Name:
            </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600  mb-1">
              Rating:
            </label>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <HollowStar
                  key={i}
                  filled={i < (hovered || rating)}
                  onClick={() => setRating(i + 1)}
                  onMouseEnter={() => setHovered(i + 1)}
                  onMouseLeave={() => setHovered(0)}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comment (optional):
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write your review here..."
            />
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" id="captcha" className="rounded" />
            <label htmlFor="captcha">I'm not a robot</label>
            <div className="ml-2">
              <div className="bg-gray-200 border-2 border-dashed rounded w-12 h-12"></div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
