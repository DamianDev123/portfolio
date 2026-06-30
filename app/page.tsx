import Card from "./components/Card";
import Project from "./components/Project";

export default function Home() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      
      <div className="md:col-span-1 w-full">
        <Card />
      </div>
      <div className="md:col-span-3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Project title="Triple eyes animatronic" description="In summer 2025, I set out to build a realistic three-eye animatronic to learn microcontrollers and servos. The project quickly grew in complexity, leading me to upgrade to a Raspberry Pi Zero 2 W and implement custom UV joints to handle the independent eye motion." imageUrl="./eyes.mp4" video={true} mediaLink="https://www.instagram.com/p/DNG3bxVyZ4e/" mediaType="IG post"/>
        <Project title="Hackpad" description="Description for Project 2" imageUrl="/project2.jpg"/>
        <Project title="Project 3" description="Description for Project 3" imageUrl="/project3.jpg"/>
        <Project title="Project 4" description="Description for Project 4" imageUrl="/project4.jpg"/>
      </div>

    </div>
  );
}