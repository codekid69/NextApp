'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "The music academy has transformed my skills. I never knew I could play this well! The teachers are incredibly supportive, guiding me every step of the way. I feel confident in my abilities now, and I've made great friends in the process.",
    name: "Sarah Johnson",
    title: "Piano Student"
  },
  {
    quote: "I love the friendly environment and supportive instructors. It makes learning so enjoyable! The variety of classes available allows me to explore different styles of music, and I feel like I'm growing every day.",
    name: "Michael Smith",
    title: "Guitar Student"
  },
  {
    quote: "Thanks to the academy, I found my passion for singing. I can't wait for the next lesson! The feedback I receive is always constructive, and it has helped me improve my vocal techniques significantly.",
    name: "Emily Davis",
    title: "Vocal Student"
  },
  {
    quote: "Every lesson is a new adventure! The instructors are incredibly knowledgeable and patient. I've learned more about rhythm and timing than I ever thought possible. This academy truly nurtures your talent!",
    name: "David Lee",
    title: "Drum Student"
  },
  {
    quote: "The classes are well-structured and engaging. I highly recommend it to anyone looking to improve! I've seen a noticeable improvement in my skills since I started, and the community is fantastic.",
    name: "Jessica Brown",
    title: "Violin Student"
  },
  {
    quote: "I was hesitant to join at first, but now I can't imagine my life without music! The academy has opened doors I never knew existed, and the personalized attention has made all the difference in my learning experience.",
    name: "Daniel Wilson",
    title: "Music Theory Student"
  },
  {
    quote: "This academy rocks! Great teachers and fun classes. I’ve learned so much in such a short time.",
    name: "Laura Kim",
    title: "Bass Guitar Student"
  },
  {
    quote: "An amazing journey! The music academy has helped me uncover my hidden talents. The instructors are passionate and truly care about our progress.",
    name: "Mark Thompson",
    title: "Jazz Improvisation Student"
  }
];


function Testimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] realtive flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

        </div>
      </div>
    </div>
  )
}

export default Testimonials
