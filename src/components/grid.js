import React, { useState } from "react";
import Modal from "./Modal";
import OpenModalButton from "./OpenModalButton";
import styles from "./bubble.module.css";
import me from "../assets/images/me2.jpg";
import Carousel from "./Carousel";
import image1 from "../assets/images/tshirts/itachi1.jpg";
import image2 from "../assets/images/tshirts/itachi2.jpg";
import image3 from "../assets/images/tshirts/greek_oversized2.jpg";
function Grid() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const images = [image1, image2, image3];
  const openModal1 = () => {
    setIsOpen1(true);
  };
  const closeModal1 = () => {
    setIsOpen1(false);
  };
  const openModal2 = () => {
    setIsOpen2(true);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };
  const openModal3 = () => {
    setIsOpen3(true);
  };
  const closeModal3 = () => {
    setIsOpen3(false);
  };
  const openModal4 = () => {
    setIsOpen4(true);
  };
  const closeModal4 = () => {
    setIsOpen4(false);
  };
  return (
    <div className="p-14 w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full flex-1">
        <OpenModalButton
          handleClick={openModal1}
          className="row-span-3 bg-teritary"
        >
          About Me
        </OpenModalButton>
        <OpenModalButton
          handleClick={openModal2}
          className="bg-secondary row-span-2"
        >
          Works
        </OpenModalButton>
        <OpenModalButton
          handleClick={openModal4}
          className="bg-primary text-secondary col-start-2"
        >
          Resume
        </OpenModalButton>
      </div>
      <Modal
        isOpen={isOpen1}
        handleClose={closeModal1}
        className="bg-black p-14 border-secondary border-4"
        closeColor="#ffffff"
      >
        {/* Content for Modal 1 */}
        <div className="text-xl w-full p-14 mt-7 flex flex-col">
          <div className="flex items-center justify-start gap-10">
            <div className="h-60 w-60">
              <img src={me} alt="Hrishikesh Varma" />
            </div>
            <div className="flex-1 flex flex-col gap-4 justify-center items-center h-full">
              <BubbleText />
              <div>
                <p className="text-primary font-semibold">
                  I'm a passionate Front End Developer based in Kochi. With a
                  keen eye for detail and a love for all things code, I
                  specialize in crafting seamless and captivating Web Apps .
                </p>
                <p className="text-primary font-semibold">
                  My journey into the world of web development began during my
                  college days, where I discovered my knack for turning design
                  concepts into functional realities.
                </p>
                <p className="text-primary font-semibold mt-3">
                  What started as a curiosity quickly blossomed into a
                  full-blown passion as I delved deeper into HTML, CSS, and
                  JavaScript.
                </p>
                <p className="text-primary font-semibold mt-3">
                  When I'm not coding, you'll likely find me on the football
                  field or enjoying a movie marathon. Football fuels my passion
                  for camaraderie and competition, while movies and series offer
                  me a chance to unwind and explore captivating stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen2}
        handleClose={closeModal2}
        className="bg-black p-14 border-secondary border-4"
        closeColor="#ffffff"
      >
        <div className="flex justify-center items-center gap-7">
          <Carousel images={images} />
          <div className="w-[60%]">
            <h1 className="text-3xl font-bold mb-7 text-primary">
              Unleashing Creativity through Design
            </h1>
            <p className="text-xl mb-2 text-teritary">
              Dive into a world where oversized chic meets anime-inspired flair
              with my collection of trendy t-shirt designs! Drawing inspiration
              from online stores specializing in oversized tees, I've infused my
              creations with a youthful energy that resonates with teens and
              those young at heart.
            </p>
            <p className="text-xl mb-2 text-teritary">
              Picture this: oversized silhouettes reimagined with a twist of
              anime magic, transforming everyday garments into statement pieces
              that exude style and personality. From playful manga characters to
              intricate sculpture designs, each t-shirt is a canvas for
              creativity and self-expression. But it's not just about aesthetics
              – it's about understanding the pulse of today's youth culture. By
              tapping into the latest trends and blending them with timeless
              elements, I create designs that resonate with teens, capturing
              their imagination and reflecting their diverse interests.
            </p>
            <p className="text-xl mb-2 text-teritary">
              Whether it's a bold graphic of their favorite anime hero or a
              sculptural motif that adds depth and dimension, my t-shirt designs
              speak the language of the youth, offering a fresh take on fashion
              that's both trendy and timeless.
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen3}
        handleClose={closeModal3}
        className="bg-black p-14 border-secondary border-4"
        closeColor="#ffffff"
      >
        {/* Content for Modal 1 */}
        <h1>Modal 1</h1>
      </Modal>
      <Modal
        isOpen={isOpen4}
        handleClose={closeModal4}
        className="bg-black p-14 border-secondary border-4"
        closeColor="#ffffff"
      >
        {/* Content for Modal 2 */}
        <h1>Modal 2</h1>
      </Modal>
    </div>
  );
}

export default Grid;

const BubbleText = () => {
  return (
    <h2 className="text-center text-6xl font-bold text-indigo-300">
      {"HRISHIKESH VARMA".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};
