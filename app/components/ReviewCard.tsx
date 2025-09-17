import React from 'react';

const ReviewCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white rounded-xl shadow p-5 flex flex-col items-start h-full min-h-[120px] border border-yellow-100'>
      {children}
    </div>
  );
};

ReviewCard.Rating = function rating({ rating }: { rating: number }) {
  return <div className='text-yellow-500 mb-2'>{'★'.repeat(rating)}</div>;
};
ReviewCard.Image = function image({ image }: { image: HTMLImageElement }) {
  return image;
};
ReviewCard.Name = function name({ name }: { name: string }) {
  return <div className='font-semibold text-yellow-800 mb-2'>{name}</div>;
};
ReviewCard.review = function review({ review }: { review: string }) {
  return <div className='text-yellow-900 text-sm'>{review}</div>;
};

export default ReviewCard;
