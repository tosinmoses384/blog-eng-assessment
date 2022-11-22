import React from "react";
import poster from "../../img/poster.png";

const HomePage = () => {
  return (
    <section className="pb-10 bg-gray-800">
      <div className="relative container px-4   mx-auto">
        <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <span className="text-lg font-bold text-blue-400">
              Post blog to educate...
            </span>
            <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
              Your Blog Posts:{" "}
              <span className="text-yellow-500">By creating a post</span>
            </h2>
            <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">
              Post something very engaging to everyone to see...
            </p>
            <a
              className="inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
              href="/create-post"
            >
              Create Post with image
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img
              className="w-full"
              src="https://mdbootstrap.com/img/new/slides/041.jpg"
              alt={poster}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
