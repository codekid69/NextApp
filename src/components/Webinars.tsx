'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function Webinars() {
    const featuredWebinars = [
        {
            title: "From Bars to Stardom: Mastering Hip-Hop Lyricism",
            description:
                "Join chart-topping hip-hop artist Eminem as he shares his process for writing impactful lyrics and delivering unforgettable performances. Perfect for aspiring rappers and lyricists looking to elevate their craft.",
            slug: "hip-hop-lyricism-masterclass",
            isFeatured: true,
            imageLink: "https://example.com/images/hip-hop-lyricism.jpg",
        },
       
        {
            title: "Music Production 101: Crafting Your Signature Sound",
            description:
                "Acclaimed producer metro-boomin takes you on a journey through the essentials of music production. From beat-making to mixing and mastering, this hands-on session is ideal for producers of all levels.",
            slug: "music-production-101",
            isFeatured: false,
            imageLink: "https://example.com/images/music-production-101.jpg",
        },
        {
            title: "Breaking Through in the Music Industry",
            description:
                "Want to make a mark in the music industry? Music manager Rick Danca shares tips on how to network, promote your music, and build a lasting career. This is essential for any artist serious about success.",
            slug: "music-industry-breakthrough",
            isFeatured: true,
            imageLink: "https://example.com/images/music-industry.jpg",
        },
        {
            title: "Songwriting for Emotional Impact",
            description:
                "Award-winning songwriter Justin Beiber reveals the techniques behind writing emotionally powerful songs. Perfect for anyone wanting to improve their songwriting skills and create deeper connections with listeners.",
            slug: "songwriting-emotional-impact",
            isFeatured: false,
            imageLink: "https://example.com/images/songwriting-emotional-impact.jpg",
        },
        {
            title: "Stay Motivated: Thriving as an Independent Artist",
            description:
                "Renowned artist and motivational speaker Nas shares advice on staying creative, overcoming challenges, and thriving as an independent musician in a competitive industry.",
            slug: "independent-artist-motivation",
            isFeatured: true,
            imageLink: "https://example.com/images/independent-artist-motivation.jpg",
        },
        
        {
            title: "Special Appearance: Behind the Beats with [Producer Name]",
            description:
                "Join legendary producer Dr.Dre as they walk you through the magic of producing hits. From layering beats to adding finishing touches, get a behind-the-scenes look at what makes a track a hit.",
            slug: "behind-the-beats-producer-appearance",
            isFeatured: false,
            imageLink: "https://example.com/images/behind-the-beats.jpg",
        }
    ];


    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className='text-center'>
                    <p className='text-base text-teal-900 font-semibold  tracking-wide uppercase'>Featured Webinars</p>
                    <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</h2>
                </div>
                <div className="mt-10">

                    <HoverEffect items={featuredWebinars.map(webinar => ({
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }))} />
                </div>

                <div className='mt-20 text-center'>
                    <Link href={'/'} className='px-4 py-2 rounded broder broder-neutral-600 text-neutral-700 bg-teal-900 text-white hover:bg-teal-500 transion duration-200'>
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Webinars
