import React, { useState } from "react";
import Modal from "./Modal";
import OpenModalButton from "./OpenModalButton";
import styles from "./bubble.module.css";
import me from "../assets/images/me2.jpg";
import Carousel from "./Carousel";
import image1 from "../assets/images/tshirts/itachi1.jpg";
import image2 from "../assets/images/tshirts/platinum_oversized2.jpg";
import image3 from "../assets/images/tshirts/greek_oversized2.jpg";
import image4 from "../assets/images/tshirts/platinum_oversized.jpg";
import image5 from "../assets/images/tshirts/itachi2.jpg";
import spotifyIMG from "../assets/images/spotifyImg.png";
import currentSong from "../assets/images/currentSong.png";
import recommended from "../assets/images/rsongs.png";
import playlists from "../assets/images/playslists.png";
import resume from "../assets/images/resume.jpg";
function Grid() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const images = [image1, image2, image3, image4, image5];
  const spotify = [currentSong, recommended, playlists];
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
          className="bg-teritary lg:row-span-3"
        >
          About Me
        </OpenModalButton>
        <OpenModalButton
          handleClick={openModal2}
          className="bg-secondary lg:row-span-2"
        >
          Works
        </OpenModalButton>
        <OpenModalButton
          handleClick={openModal4}
          className="bg-primary text-secondary lg:col-start-2"
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
              <div className="ml-4">
                <p className="text-teritary font-semibold mt-3">
                  I'm a passionate Front End Developer based in Kochi. With a
                  keen eye for detail and a love for all things code, I
                  specialize in crafting seamless and captivating Web Apps .
                </p>
                <p className="text-teritary font-semibold mt-3">
                  My journey into the world of web development began during my
                  college days, where I discovered my knack for turning design
                  concepts into functional realities.
                </p>
                <p className="text-teritary font-semibold mt-3">
                  What started as a curiosity quickly blossomed into a
                  full-blown passion as I delved deeper into HTML, CSS, and
                  JavaScript.
                </p>
                <p className="text-teritary font-semibold mt-3">
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
        <div className="flex flex-col justify-center items-center gap-7 p-8">
          <section className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Spotify using JS
            </h1>
            <img
              src={spotifyIMG}
              alt="spotify mimic"
              className="h-[70%] w-[70%]"
            ></img>
            <p className="text-white mt-4">
              This is the first JavaScript project that I have done !
            </p>
            <a
              href="https://github.com/hrishivuk/spotifyJS"
              className="mt-1 underline"
            >
              spotifyJS
            </a>
            <p className="text-white mt-6 mb-4">
              It has features like recommended songs, popular playlists etc.
            </p>
            <Carousel images={spotify} />
          </section>
          <section className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Tshirt Designs
            </h1>
            <p className="mb-6">
              Check out some of the designs that I have created using photoshop
            </p>
            <Carousel images={images} />
            <div className="w-[60%]"></div>
          </section>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen4}
        handleClose={closeModal4}
        className="bg-black p-14 border-secondary border-4"
        closeColor="#ffffff"
      >
        {/* Content for Modal 2 */}
        <div className="flex justify-center items-center">
          <img src={resume} alt="resume" />
        </div>
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
