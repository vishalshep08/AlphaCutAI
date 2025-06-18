import React, { useState } from "react";

export const initialTestimonials = [
  {
    id: 1,
    quote: "We are impressed by the AI and think it's the best choice on the market.",
    author: "Anthony Walker",
    handle: "@_webarchitect_",
    verified: true,
    rating: 5,
    date: "2024-01-15"
  },
  {
    id: 2,
    quote: "AlphaCut.AI is leaps and bounds ahead of the competition. A thousand times better. It simplified the whole process.",
    author: "Sarah Johnson",
    handle: "@techlead_sarah",
    verified: true,
    rating: 5,
    date: "2024-01-10"
  },
  {
    id: 3,
    quote: "We were impressed by its ability to account for pesky, feathery hair without making an image look jagged and amateurish.",
    author: "Michael Chen",
    handle: "@coding_newbie",
    verified: true,
    rating: 5,
    date: "2024-01-08"
  },
];

const StarRating = ({ rating, onRatingChange, readonly = false }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => !readonly && onRatingChange(star)}
          className={`w-5 h-5 ${
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
          } transition-transform duration-200`}
        >
          <svg
            className={`w-full h-full ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isNew = false }) => {
  const { quote, author, handle, verified, rating, date } = testimonial;
  
  return (
    <article className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between border-l-4 ${
      isNew ? 'border-green-400 bg-green-50' : verified ? 'border-indigo-400' : 'border-gray-300'
    }`}>
      {/* Header with rating and date */}
      <div className="flex justify-between items-start mb-4">
        <StarRating rating={rating} readonly={true} />
        <div className="flex items-center space-x-2">
          {verified && (
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          {isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          <span className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
        "{quote}"
      </p>

      {/* Author info */}
      <footer className="flex items-center space-x-3">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
          {author.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{author}</p>
          <p className="text-xs text-gray-500">{handle}</p>
        </div>
      </footer>
    </article>
  );
};

const TestimonialForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    handle: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.quote.trim() || !formData.author.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit({
        ...formData,
        id: Date.now(),
        verified: false,
        date: new Date().toISOString().split('T')[0]
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-indigo-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Review *
          </label>
          <textarea
            value={formData.quote}
            onChange={(e) => handleChange('quote', e.target.value)}
            placeholder="Tell us about your experience with AlphaCut.AI..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            rows="4"
            maxLength="300"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.quote.length}/300 characters
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => handleChange('author', e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Handle (Optional)
            </label>
            <input
              type="text"
              value={formData.handle}
              onChange={(e) => handleChange('handle', e.target.value)}
              placeholder="@yourhandle"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating
          </label>
          <StarRating
            rating={formData.rating}
            onRatingChange={(rating) => handleChange('rating', rating)}
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting || !formData.quote.trim() || !formData.author.trim()}
            className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Review'
            )}
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'verified', 'recent'

  const handleSubmitTestimonial = (newTestimonial) => {
    setTestimonials(prev => [newTestimonial, ...prev]);
    setShowForm(false);
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === 'verified') return testimonial.verified;
    if (filter === 'recent') {
      const testimonialDate = new Date(testimonial.date);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return testimonialDate >= thirtyDaysAgo;
    }
    return true;
  });

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-lg p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            They love us. You will too.
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <StarRating rating={Math.round(averageRating)} readonly={true} />
              <span className="text-lg font-semibold text-gray-700">
                {averageRating.toFixed(1)} out of 5
              </span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">
              {testimonials.length} review{testimonials.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          {/* Filter and Add Review Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex bg-white rounded-lg border border-gray-200 overflow-hidden">
              {[
                { key: 'all', label: 'All Reviews' },
                { key: 'verified', label: 'Verified' },
                { key: 'recent', label: 'Recent' }
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    filter === filterOption.key
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
            >
              {showForm ? 'Cancel' : 'Add Your Review'}
            </button>
          </div>
        </div>

        {/* Add Review Form */}
        {showForm && (
          <div className="mb-8">
            <TestimonialForm
              onSubmit={handleSubmitTestimonial}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isNew={!testimonial.verified && new Date(testimonial.date) > new Date(Date.now() - 24 * 60 * 60 * 1000)}
            />
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No reviews found for the selected filter.</p>
            <p className="text-gray-400 text-sm mt-2">Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;