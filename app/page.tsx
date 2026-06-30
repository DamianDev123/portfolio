import Card from "./components/Card";
import Event from "./components/Event";
import Project from "./components/Project";

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <div className="p-6 md:p-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        <div className="md:col-span-1 w-full">
          <Card />
        </div>
        <div className="md:col-span-3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Project title="Triple eyes animatronic" description="In summer 2025, I set out to build a realistic three-eye animatronic to learn microcontrollers and servos. The project quickly grew in complexity, leading me to upgrade to a Raspberry Pi Zero 2 W and implement custom UV joints to handle the independent eye motion." imageUrl="./eyes.mp4" video={true} mediaLink="https://www.instagram.com/p/DNG3bxVyZ4e/" mediaType="IG post"/>
          <Project title="Hackpad" description="The Hackpad is a custom 9-key macro pad project for stardance where I took my design all the way from schematic circuit routing and 3D component modeling to a sleek, stylized final product render." imageUrl="https://raw.githubusercontent.com/DamianDev123/portfolio/refs/heads/main/public/Hackpad.png" githubUrl="https://github.com/DamianDev123/Hacking_a_Keyboard"/>
          <Project title="FTC DECODE ROBOT" description="During the FIRST Tech Challenge, I led a team of students to design and build a competitive robot. My team learned CAD, Programming, and competition skills." imageUrl="https://github.com/DamianDev123/portfolio/blob/main/public/robot.png?raw=true" githubUrl="https://github.com/DamianDev123/KD-2026" mediaLink="https://cad.onshape.com/documents/988d6c192ab16ebbe882aabc/w/7ee2500ced18c18db6b1746a/e/1c978d95b104076ecf6940b7" mediaType="OnShape"/>
          <Project title="Walker Wheels" description="Walker wheels is a project that I did in collaboration with NYCFirst, in which we aimed to assist ederly by modifying their walker so that they could go travel more easy" imageUrl="https://github.com/DamianDev123/portfolio/blob/main/public/walker.png?raw=true"/>
        </div>

      </div>
      <Event title="Collab with Steel Titans" description="Steel Titans is a sister ftc team that invited me to join them in a trip to Columbia University" images={["./events/steel/1.jpg","./events/steel/2.jpg","./events/steel/3.jpg","./events/steel/4.jpg"]}/>
      <Event title="AFH Scrimmage" description="The AFH Scrimmage was an event where teams competed against each other" images={["./events/scrim/1.jpg","./events/scrim/2.jpg","./events/scrim/3.jpg"]}/>
    </div>
  );
}