import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import me from "./me.png";

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
      <section className="section flex p-14 justify-center items-center">
        <div className="">
          <div className="flex">
            <h2 className="text-4xl font-bold text-primary mb-3">About Me</h2>
            {/* <motion.p
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-teritary font-extrabold text-sm"
            >
              Awesome
            </motion.p> */}
          </div>
          <div className="text-xl max-w-[60%] w-full">
            <p className="text-teritary/70 font-semibold">
              I'm a passionate{" "}
              <span className="text-primary">Front End Developer</span> based in
              Kochi. With a keen eye for detail and a love for all things code,
              I specialize in{" "}
              <span className="text-primary">
                crafting seamless and captivating Web Apps
              </span>
              .
            </p>
            <p className="text-teritary/70 font-semibold">
              My journey into the world of
              <span className="text-primary"> web development</span> began
              during my college days, where I discovered my knack for turning
              design concepts into functional realities.
            </p>
            <p className="text-primary font-semibold mt-3">
              {" "}
              What started as a curiosity quickly blossomed into a full-blown
              passion as I delved deeper into HTML, CSS, and JavaScript.
            </p>
            <p className="text-teritary/70 font-semibold mt-3">
              When I'm not coding, you'll likely find me on the football field
              or enjoying a movie marathon.<span className="text-primary"> Football </span>fuels my passion for
              camaraderie and competition, while<span className="text-primary"> movies and series</span> offer me a
              chance to unwind and explore captivating stories.
            </p>
          </div>
        </div>
        {/* <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={me}
          alt=""
          srcset=""
          className="h-[75%]"
        /> */}
        
      </section>
    </div>
  );
};

export default Body;
