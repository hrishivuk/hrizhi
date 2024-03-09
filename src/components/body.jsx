import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Grid from "./grid"
import "./styles.scss";


const Body = () => {
  const text = "Hey there, I'm-".split(" ");
  const text2 = "Hrishikesh Varma.".split(" ");
  return (
    <div className="body-container text-secondary">
      <section className="introduction flex flex-col p-14">
        <div>
          <div className="mt-24 ">
            {text.map((el, i) => (
              <motion.span
                className="text-4xl font-bold tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
          <div className="mt-3 text-primary">
            {text2.map((el, i) => (
              <motion.span
                className="text-9xl uppercase font-bold tracking-wide"
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
        </div>
        <p className="text-2xl mt-4 text-teritary font-semibold">
          Front End Developer | Code Enthusiast.
        </p>
        <p className="text-2xl mt-1 text-teritary font-semibold">
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
      <section>
      </section>
      <section className="h-screen">
        <Grid className="h-full"/>
      </section>
    </div>
  );
};

export default Body;
