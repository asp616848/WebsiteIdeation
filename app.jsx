import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">AVASYA</h1>
      <Button variant="outline" className="border-white text-white">
        Join Research Team
      </Button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative text-center text-white py-20 bg-black">
      <h1 className="text-8xl font-bold opacity-10 absolute inset-0 flex items-center justify-center">
        AVASYA
      </h1>
      <h2 className="relative text-xl font-semibold">
        ARYABHATTA VYVAMNIK & ANTAIRIKSHA SHASTRIYA SOCIETY
      </h2>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold">In research, we focus on solving complex problems.</h3>
          <ul className="mt-4 space-y-2">
            <li>Projects</li>
            <li>Applications</li>
            <li>Workshops</li>
            <li>Hackathons</li>
            <li>Information sessions</li>
            <li>In-person meetups</li>
          </ul>
        </div>
        <img src="/images/engineers.jpg" alt="Engineers" className="rounded-lg" />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src="/images/speaker.jpg" alt="Speaker" className="rounded-lg" />
        <div>
          <h3 className="text-xl font-bold">About AVASYA</h3>
          <p className="mt-4 text-gray-300">
            Our research is focused on solving complex problems through a mix of theoretical
            and practical applications. We conduct workshops, hackathons, and research projects
            to push the boundaries of aerospace and engineering.
          </p>
          <Button className="mt-4 bg-white text-black">Next</Button>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default App;
