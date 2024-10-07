import Link from "next/link"

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-col-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 " >
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Welcome to I AM MUSIC, where passion meets professionalism in the world of music and performing arts. We are dedicated to nurturing talent, fostering creativity, and shaping the future of artists through our comprehensive music education programs.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <p>
                        <Link href={'/'}>Home</Link>
                    </p>
                    <p>
                        <Link href={'/'}>About</Link>
                    </p>
                    <p>
                        <Link href={'/'}>Courses</Link>
                    </p>
                    <p>
                        <Link href={'/'}>Contact</Link>
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow US</h2>
                    <p>
                        <Link href={'/'}>Facebook</Link>
                    </p>
                    <p>
                        <Link href={'/'}>Twitter</Link>
                    </p>
                    <p>
                        <Link href={'/'}>Instagram</Link>
                    </p>
                    <p>
                        <Link href={'/'}>You Tube</Link>
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>
                        123 Harmony Lane
                        Melody City, Rhythm State, 56789
                        United States
                    </p>
                    <p>
                        Phone: (123) 456-7890
                        Email: iammusic@musicacademy.com
                        Website: www.iammusic.com
                    </p>

                </div>
            </div>
            <p className="text-center text-xs pt-8">&copy; 2024 I AM MUSIC. All rights reserved.</p>
        </footer>
    )
}

export default Footer
