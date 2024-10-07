'use client'
import Link from 'next/link';
import courseData from '../data/music_courses.json';
import { BackgroundGradient } from './ui/background-gradient';

// Using typescript to define the data of courses
interface Course {
    "id": number,
    "title": string,
    "slug": string,
    "description": string,
    "price": number,
    "instructor": string,
    "isFeatured": boolean,
    "image": string
}

function FeaturedSection() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <p className='text-base text-teal-900 font-semibold  tracking-wide uppercase'>Featured Courses</p>
                    <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</h2>
                </div>
            </div>
            <div className='mt-10'>
                <div className=' p-2 sm:p-0 grid grid-cols-1 sm:gri-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course: Course) => (
                        <div className="flex justify-center" key={course.id}>
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center felx-grow' style={{
                                    backgroundImage: `url(${course.image})`, // Setting the background image dynamically
                                    backgroundSize: 'cover', // Adjusts the size of the image to cover the entire container
                                    backgroundPosition: 'center', // Center the image
                                    backgroundRepeat: 'no-repeat', // Ensure no repetition
                                }} >
                                    <p className=' text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-100'>{course.title}</p>
                                    <p className=' mb-2 text-sm text-neutral-200 dark:text-neutral-200 flex-grow'>{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>Learn More</Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={'/courses'} className='px-4 py-2 rounded broder broder-neutral-600 text-neutral-700 bg-teal-900 text-white hover:bg-teal-500 transion duration-200'>
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedSection
