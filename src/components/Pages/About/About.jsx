import React from "react";
import {
  FaReact,
  FaGithub,
  FaShoppingCart,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTailwindcss, SiDjango } from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen bg-green-200 text-gray-800">

      {/* Hero Section */}
      <section className="text-center px-6 py-30">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6 tracking-tight">
          BuyBasket
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          A modern full-stack e-commerce learning project built to understand
          how real-world applications combine frontend and backend technologies
          to deliver a smooth and responsive shopping experience.
        </p>
      </section>

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-4 mb-6">
            <FaShoppingCart className="text-3xl text-green-600" />
            <h2 className="text-2xl font-semibold text-green-700">
              Project Overview
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            BuyBasket fetches product data from the DummyJSON API while Django
            handles authentication and order management. This project focuses
            on connecting frontend logic with backend systems to simulate a
            realistic shopping workflow.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* React */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <FaReact className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">React.js</h3>
            <p className="text-gray-600">
              Builds interactive UI with reusable and dynamic components.
            </p>
          </div>

          {/* Tailwind */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <SiTailwindcss className="text-5xl text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">
              Enables responsive and modern UI styling with utility-first design.
            </p>
          </div>

          {/* Django */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <SiDjango className="text-5xl text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Django</h3>
            <p className="text-gray-600">
              Manages authentication and stores user orders securely.
            </p>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600">
          Additional Tools: Context API • React Router • React Toastify • DummyJSON API
        </p>
      </section>

      {/* Developer Section */}
      <section className="bg-green-200 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            About the Developer
          </h2>

          <p className="text-2xl font-semibold">Harshal Patil</p>
          <p className="text-gray-600 mb-2">Software Developer</p>
          <p className="text-gray-500 mb-6 text-sm">
            Passionate about building scalable and user-friendly web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/harshalpatil2809"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harshal-patil-56a0b2293/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>

            {/* X */}
            <a
              href="https://x.com/Patil_Harshal_5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <FaXTwitter />
              X
            </a>

            {/* Portfolio */}
            <a
              href="https://harshalpatil.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <FaGlobe />
              Portfolio
            </a>

          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="text-center px-6 py-20 bg-green-200">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Future Vision
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
          I aim to build scalable and impactful web applications while continuously 
          improving my full-stack development skills and contributing to meaningful 
          software products.
        </p>
      </section>

    </div>
  );
};

export default About;