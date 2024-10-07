"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
  {
    title: "Expert Instructors",
    description:
      "Our academy boasts a team of highly skilled and experienced music instructors who are passionate about helping you reach your full potential. With their guidance, you'll master your chosen instrument or vocal technique in no time."
  },
  {
    title: "Personalized Learning",
    description:
      "We understand that every student has unique goals and learning styles. Our personalized approach to music education ensures that each lesson is tailored to fit your individual needs, whether you're a beginner or advanced musician."
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our music academy is equipped with the latest technology and instruments to provide a world-class learning environment. You'll have access to top-quality resources, helping you develop your skills in a professional setting."
  },
  {
    title: "Flexible Schedules",
    description:
      "We offer flexible scheduling options to accommodate your busy lifestyle. Whether you prefer morning, afternoon, or evening classes, we have a variety of time slots available to fit your schedule."
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our well-rounded curriculum covers everything from music theory and composition to performance and improvisation. We provide a holistic music education that prepares you for both personal growth and professional opportunities."
  }
];


function Scroll() {
  return (
    <div >
        <StickyScroll content={content}/>
    </div>
  )
}

export default Scroll
