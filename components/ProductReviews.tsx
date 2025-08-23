'use client';

import { useState, FormEvent } from 'react';
import React from 'react';
// Giả lập kiểu dữ liệu cho một đánh giá
type Review = {
  author: string;
  rating: number;
  comment: string;
  date: string;
};

// Dữ liệu đánh giá mẫu
const initialReviews: Review[] = [
  {
    author: 'Anh Tuấn',
    rating: 5,
    comment: 'Sản phẩm chất lượng rất tốt, đúng tiêu chuẩn PCCC. Đội ngũ lắp đặt chuyên nghiệp và nhiệt tình.',
    date: '20/08/2025',
  },
  {
    author: 'Chị Lan',
    rating: 4,
    comment: 'Hài lòng với dịch vụ tư vấn. Sản phẩm hoạt động ổn định.',
    date: '15/07/2025',
  },
];

// Component nhỏ để hiển thị ngôi sao
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ProductReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!comment || !author) {
      alert('Vui lòng nhập tên và nội dung đánh giá của bạn.');
      return;
    }
    
    const newReview: Review = {
      author,
      rating,
      comment,
      date: new Date().toLocaleDateString('vi-VN'),
    };
    
    // Thêm review mới vào đầu danh sách
    setReviews([newReview, ...reviews]);

    // Reset form
    setAuthor('');
    setComment('');
    setRating(5);
  };

  return (
    <div className="not-prose">
      {/* Phần hiển thị danh sách đánh giá */}
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <StarRating rating={review.rating} />
                <strong className="ml-3 text-gray-800">{review.author}</strong>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-xs text-gray-400 mt-2">{review.date}</p>
            </div>
          ))
        ) : (
          <p>Chưa có đánh giá nào cho sản phẩm này.</p>
        )}
      </div>

      {/* Phần form để lại đánh giá */}
      <div className="mt-10 pt-8 border-t">
        <h3 className="text-xl font-bold mb-4">Để lại đánh giá của bạn</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Xếp hạng của bạn</label>
            <div className="flex items-center space-x-1">
                {[5, 4, 3, 2, 1].map(star => (
                    <React.Fragment key={star}>
                        <input type="radio" id={`star${star}`} name="rating" value={star} checked={rating === star} onChange={() => setRating(star)} className="sr-only" />
                        <label htmlFor={`star${star}`} className="cursor-pointer">
                            <svg className={`w-7 h-7 ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        </label>
                    </React.Fragment>
                ))}
            </div>
          </div>
          <div>
            <label htmlFor="author" className="block font-semibold mb-2">Tên của bạn</label>
            <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="comment" className="block font-semibold mb-2">Đánh giá của bạn</label>
            <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} rows={4} className="w-full p-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-blue-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition-colors">
            Gửi đánh giá
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;