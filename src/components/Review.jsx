import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Alice', comment: 'Amazing scent and lasts all day!', rating: 5 },
  { name: 'John', comment: 'Pretty good, but the bottle leaked a bit.', rating: 4 },
  { name: 'Maria', comment: 'Absolutely love it! My go-to fragrance.', rating: 5 },
  { name: 'Liam', comment: 'Nice, but could be stronger.', rating: 3 },
  { name: 'Emma', comment: 'Fast delivery and smells great.', rating: 4 },
  { name: 'Noah', comment: 'Bought it as a gift, she loved it!', rating: 5 },
  { name: 'Olivia', comment: 'The fragrance didn’t last long for me.', rating: 2 },
  { name: 'William', comment: 'Classy and elegant!', rating: 5 },
  { name: 'Ava', comment: 'Decent for the price.', rating: 3 },
  { name: 'James', comment: 'Exceeded expectations. Will buy again.', rating: 5 },
{ name: 'Sophia', comment: 'The packaging was beautiful and luxurious.', rating: 5 },
  { name: 'Benjamin', comment: 'Good value for money, nice everyday scent.', rating: 4 },
  { name: 'Isabella', comment: 'Did not match the description, felt too strong.', rating: 2 },
  { name: 'Elijah', comment: 'Unique fragrance, got many compliments!', rating: 5 },
];

const Review = () => {
  return (
    <section id="reviews" className="py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-semibold mb-10 text-center">Customer Reviews</h2>
      <div className="relative w-full">
        <div className="flex space-x-6 animate-scroll whitespace-nowrap">
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="inline-block bg-gray-100 p-6 rounded-lg shadow-md min-w-[300px] max-w-[300px]"
            >
              <h3 className="text-lg font-bold mb-2">{review.name}</h3>
              <p className="text-gray-700 mb-4 text-sm">{review.comment}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation in style tag */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Review;
