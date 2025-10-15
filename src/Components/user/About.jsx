import React from "react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col  items-center gap-12">
        

        {/* Text Content */}
        <div className="text-center ">
          <h2 className="text-3xl font-extrabold text-[#009999] mb-4 text-center">
            About BookBloom
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Welcome to <span className="font-semibold">BookBloom</span>, your
            ultimate destination for books across all genres. We aim to connect
            readers with their next favorite story, from timeless classics to
            modern bestsellers.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Our mission is to make reading accessible, enjoyable, and
            inspiring. Whether you are exploring new ideas, learning a new skill,
            or diving into fictional worlds, BookBloom has the perfect book for you.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default About;
