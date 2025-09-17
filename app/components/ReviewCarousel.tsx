'use client';
import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import useScreenSize from '../hooks/useScreenSize';

type Review = {
  rating: number;
  name: string;
  review: string;
};

const reviewsData: Review[] = [
  {
    rating: 5,
    name: 'Alice',
    review:
      'Property Hive made managing my rentals effortless. Highly recommend!'
  },
  {
    rating: 4,
    name: 'Ben',
    review: 'The tenant messaging feature is a game changer.'
  },
  {
    rating: 4,
    name: 'Carla',
    review: 'I love the maintenance tracker and the support team is fantastic.'
  },
  { rating: 5, name: 'Dan', review: 'Saved me so much in letting agent fees.' },
  {
    rating: 5,
    name: 'Ella',
    review: 'The dashboard is intuitive and easy to use.'
  },
  {
    rating: 3,
    name: 'Frank',
    review: 'Great for agencies with lots of properties.'
  },
  {
    rating: 4,
    name: 'Grace',
    review: 'AI document creation is a huge time saver.'
  },
  { rating: 5, name: 'Hassan', review: '24/7 chat support is always helpful.' },
  {
    rating: 5,
    name: 'Tom',
    review:
      'Property Hive made managing my rentals effortless. Highly recommend!'
  },
  {
    rating: 4,
    name: 'Dick',
    review: 'The tenant messaging feature is a game changer.'
  },
  {
    rating: 5,
    name: 'Harry',
    review: 'I love the maintenance tracker and the support team is fantastic.'
  }
];

const getCurrentReviews = (
  deviceWidth: number,
  reviewsData: Review[],
  page: number
): { currentReviews: Review[]; totalPages: number } => {
  let cardsPerPage: number = 1;

  if (deviceWidth >= 640 && deviceWidth < 768) {
    cardsPerPage = 2;
  }
  if (deviceWidth >= 768 && deviceWidth < 1024) {
    cardsPerPage = 4;
  }
  if (deviceWidth >= 1024) {
    cardsPerPage = 8;
  }
  const totalPages: number = Math.ceil(reviewsData.length / cardsPerPage);
  const start: number = page * cardsPerPage;
  const end: number = start + cardsPerPage;
  const currentReviews: Review[] = reviewsData.slice(start, end);

  return { currentReviews, totalPages };
};

const ReviewCarousel = () => {
  const [page, setPage] = useState<number>(0);
  const deviceWidth = useScreenSize();
  const { currentReviews, totalPages } = getCurrentReviews(
    deviceWidth,
    reviewsData,
    page
  );

  return (
    <section
      id='reviews'
      className='w-full max-w-6xl mx-auto mb-24 px-2 sm:px-4 mt-24 sm:mt-32'
    >
      <h2 className='text-2xl font-bold text-yellow-900 mb-8 text-center'>
        What Our Users Say
      </h2>
      <div className='flex items-center justify-center w-full mb-6'>
        <button
          className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-200 text-yellow-800 font-bold text-2xl shadow disabled:opacity-40 transition hover:bg-yellow-300 mr-2'
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label='Previous reviews'
        >
          &#8592;
        </button>
        <div className='grid grid-cols-1 w-2/3 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:w-full max-w-5xl'>
          {currentReviews.map((r, idx) => (
            <ReviewCard key={idx}>
              <ReviewCard.Rating rating={r.rating} />
              <ReviewCard.Name name={r.name} />
              <ReviewCard.review review={r.review} />
            </ReviewCard>
          ))}
        </div>
        <button
          className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-200 text-yellow-800 font-bold text-2xl shadow disabled:opacity-40 transition hover:bg-yellow-300 ml-2'
          onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
          disabled={page >= totalPages - 1}
          aria-label='Next reviews'
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ReviewCarousel;
