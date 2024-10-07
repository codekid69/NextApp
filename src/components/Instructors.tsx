'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

function Instructors() {
    const people = [
        {
          id: 1,
          name: "Emily Carter",
          designation: "Vocal Coach",
          image: "https://media.istockphoto.com/id/1375967590/photo/age-beauty-wellbeing-and-health-concept-close-up-portrait-of-good-looking-beautiful-mature.jpg?s=612x612&w=0&k=20&c=0kOFd5k1cEtboVCTytrnWIQgfQoQfPgD7iUJ9XmyN8Y=",
        },
        {
          id: 2,
          name: "James Harrison",
          designation: "Music Producer & Sound Engineer",
          image: "https://media.istockphoto.com/id/994303656/photo/dj-working-in-music-studio-and-looking-at-computer-screen.jpg?s=612x612&w=0&k=20&c=aaio4JGADLXo66sP67skWurm0gdTuet4TEYmM2a_3qg=",
        },
        {
          id: 3,
          name: "Sam Clark",
          designation: "Guitar Instructor",
          image: "https://media.istockphoto.com/id/1389640148/photo/leisure-activity-of-young-musician-sing-a-song-in-studio.jpg?s=612x612&w=0&k=20&c=j5hZkszyqWlDCt-zh-y2-EG2ffJF518sx4JVREpVGDw=",
        },
        {
          id: 4,
          name: "Daniel Thompson",
          designation: "Hip-Hop Instructor",
          image: "https://media.istockphoto.com/id/1356936003/photo/portrait-of-an-hip-hop-music-performer.jpg?s=612x612&w=0&k=20&c=wpe804pYkJyr3CehSoBPaK0Q6LfGXcHwWA3IxFv_9QU=",
        },
        {
          id: 5,
          name: "Olivia Brooks",
          designation: "Piano & Music Theory Instructor",
          image: "https://media.istockphoto.com/id/1168202917/photo/she-enjoys-while-she-plays.jpg?s=612x612&w=0&k=20&c=8Mv2-N9_-ImcTKLqLY3eYtz6xda9lXPQJ63X5xlDRoI=",
        }
      ];
      
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professional who will guide your musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people}/>
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
