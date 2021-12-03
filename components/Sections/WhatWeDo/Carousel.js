import classes from "./Carousel.module.css";
import systemStyles from "../../../styles/utils.module.css";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const DUMMY_BUTTONS = [
  { title: "All-in-one" },
  { title: "Build & Integrate" },
  { title: "Invest & Trade" },
  { title: "Borrow & Lend" },
];

const DUMMY_SLIDES = [
  {
    title: "All-in-one",
    image: "/images/All-In-One.svg",
    description: "All your Bitcoin financing options in one place.",
  },
  {
    title: "Build & Integrate",
    image: "/images/Building-Blocks.svg",
    description:
      "Customize your own Bitcoin financing products for yourself or others.",
  },
  {
    title: "Invest & Trade",
    image: "/images/Invest-Trade.svg",
    description:
      "Invest long-term or trade short-term with spot, futures, margin, etc.",
  },
  {
    title: "Borrow & Lend",
    image: "/images/Lend-Borrow.svg",
    description:
      "Borrow against your Bitcoin or earn interest on your Bitcoin.",
  },
];

export default function Carousel() {
  const [selectedSlide, setSelectedSlide] = useState(0); // we start at the first slide of carousel
  let slideButtonClasses = `${classes.slideButton}`;
  const slideRefs = useRef([]);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, DUMMY_BUTTONS.length);
  }, []);

  const slideChangeHandler = (index) => {
    setSelectedSlide(index);
    if (typeof window !== "undefined") {
      slideRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
        // set a custom duration used by the polyfill
        duration: 150,
      });
    }
  };

  const SlideButtons = (
    <div className={classes.buttonSectionContainer}>
      <div className={classes.buttonSection}>
        {DUMMY_BUTTONS.map((e, index) => {
          if (selectedSlide === index) {
            slideButtonClasses = `${classes.slideButton} ${classes.selected}`;
          } else {
            slideButtonClasses = classes.slideButton;
          }

          return (
            <button
              className={slideButtonClasses}
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              onClick={() => slideChangeHandler(index)}
            >
              {e.title}
            </button>
          );
        })}
      </div>
    </div>
  );

  const Slide = (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={classes.slide}
        key={selectedSlide ? selectedSlide : "Nothing"}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
      >
        <div className={classes.slideImageContainer}>
          <Image
            src={DUMMY_SLIDES[selectedSlide].image}
            alt="everything you need in one place"
            height={450}
            width={350}
          />
        </div>
        <p className={systemStyles.paragraph}>
          {DUMMY_SLIDES[selectedSlide].description}
        </p>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      {SlideButtons}
      {Slide}
    </>
  );
}
