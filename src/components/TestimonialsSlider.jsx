import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote:
      'I was initially skeptical about counseling, but this session completely changed my perspective. The counselor was empathetic and provided actionable advice. Thank you so much, ma’am.',
    author: ' anjali from Delhi, India.'
  },
  {
    quote:
      'This was my first experience with counseling, and it turned out to be very positive. You created a comfortable space where I could open up freely, and the guidance felt practical and relevant to my situation.You understood my concerns deeply and helped me work through them at my own pace without any pressure.The session gave me a new perspective on my situation. Your insights were thoughtful and helped me reflect in a healthier way. Overall, it was a very meaningful experience. Your calm presence, patience, and clarity made a big difference for me during a difficult phase.',
    author: 'neha from Banglore, India.'
  },
  {
    quote:
      'It was a good session. She is the first person whom I could openly talk to about my thoughts. She helped me come out of confusion and gave proper information. Her nature is very down to earth. She listens patiently and helps solve problems completely. I am very thankful to her.',
    author: 'raghav from Mumbai, India.'
  },
  {
    quote:
      'The session felt safe and non-judgmental.Professional, empathetic, and insightful.It really helped me organise my thoughts. I feel more hopeful and equipped to handle my challenges now.',
    author: 'rohit from Pune, India.'
  },
  {
    quote:
      'The session was a game-changer for me. Your expertise and understanding helped me navigate through a challenging time.',
    author: 'amit from Delhi, India.'
  }
];

export default function TestimonialsSlider() {
  return (
    <div className="testimonials-swiper">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        a11y={{ prevSlideMessage: 'Previous testimonial', nextSlideMessage: 'Next testimonial' }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <article className="testimonial-card" aria-label={`Testimonial from ${t.author}`}>
              <p className="testimonial-text">“{t.quote}”</p>
              <span className="testimonial-author">— {t.author}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
