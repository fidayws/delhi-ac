import React from 'react';
import { MdStar, MdFormatQuote } from 'react-icons/md';

const GoogleReviews = () => {
  // Sample reviews - In production, you would fetch these from Google My Business API
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      review: "Excellent AC installation service! The team was professional and finished the work on time. Highly recommended for anyone in Delhi NCR.",
      date: "2 weeks ago",
      location: "Gurgaon"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      review: "Quick AC repair service. They diagnosed the problem immediately and fixed it within an hour. Very satisfied with their service.",
      date: "1 month ago",
      location: "Noida"
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 5,
      review: "Best AC maintenance service in Delhi. Regular AMC with them has kept my AC running smoothly for 2 years now.",
      date: "3 weeks ago",
      location: "Delhi"
    },
    {
      id: 4,
      name: "Sunita Verma",
      rating: 5,
      review: "Professional team, fair pricing, and excellent customer service. They installed 3 ACs in my new home. Great work!",
      date: "1 week ago",
      location: "Faridabad"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <MdStar
        key={index}
        size={16}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across Delhi NCR have to say about our AC services.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-gray-600 font-semibold">4.9/5 on Google</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">500+ Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6 relative">
              <MdFormatQuote className="text-primary-200 absolute top-4 right-4" size={24} />
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{review.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?sca_esv=d06f5a1c24924b00&cs=0&output=search&kgmid=%2Fg%2F11gjm3hwkr&q=Delhi%20Air%20Conditioner&shndl=30&shem=lcuae%2Cuaasie&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=de2037ac000ab343#lrd=0x390d1d40ac8426c5:0x9114a8e8e044a852,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2 bg-primary-700 text-black"
          >
            <span>Read More Reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;