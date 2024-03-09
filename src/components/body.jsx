import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Grid from "./grid";
import logo from "../assets/logo/logo1.svg";
import "./styles.scss";

const Body = () => {
  const text2 = "Hrishikesh Varma.".split(" ");
  return (
    <div className="body-container text-secondary background-image relative flex flex-col justify-center items-center p-14">
      <section className="flex flex-col justify-center items-center relative mt-56 mb-56">

        {/* logo */}
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center mb-6 mt-14">
          <a href="#123" className="">
            <img src={logo} alt="" className="" />
          </a>
        </div>

        {/* Main Text */}
        <div className="mt-3 text-white flex justify-center items-center">
          {text2.map((el, i) => (
            <motion.span
              className="text-4xl sm:text-6xl 2xl:text-9xl font-bold tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>

        {/* Sub Text */}
        <p className="text-lg sm:text-xl 2xl:text-2xl mt-4 text-teritary font-semibold text-center">
          Front End Developer | Code Enthusiast.
        </p>
        <p className="text-lg sm:text-xl 2xl:text-2xl mt-1 text-teritary font-semibold text-center">
          Crafting Digital Experiences,
          <span className=""> One Line of Code at a Time </span>.
        </p>
        <div className="flex mt-6 gap-3 items-center">
          <a href="https://www.linkedin.com/in/hrishivuk/">
            <FaLinkedin className="text-3xl text-secondary" />
          </a>
          <a href="mailto:officialhrishivuk@gmail.com">
            <MdEmail className="text-4xl text-secondary" />
          </a>
          <a href="tel:08078419320">
            <FaPhoneSquareAlt className="text-3xl text-secondary" />
          </a>
          <a href="https://github.com/hrishivuk">
            <FaGithubSquare className="text-3xl text-secondary" />
          </a>
        </div>
      </section>
      <section className="w-full">
        <Grid className="h-full" />
      </section>
    </div>
  );
};

export default Body;
