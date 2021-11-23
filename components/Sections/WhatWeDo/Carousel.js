import classes from "./Carousel.module.css";
import { useState } from "react";
import Image from "next/image";

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

  const selectSlideHandler = (index) => {
    setSelectedSlide(index);
  };

  let slideButtonClasses = `${classes.slideButton}`;

  const SlideButtons = (
    <div className={classes.buttonSectionContainer}>
      <div className={classes.buttonSection}>
        {DUMMY_BUTTONS.map((e, index) => {
          if (selectedSlide === index) {
            slideButtonClasses = `${classes.slideButton} ${classes.selected}`;
          } else {
            slideButtonClasses = `${classes.slideButton}`;
          }

          return (
            <button
              className={slideButtonClasses}
              key={index}
              onClick={() => selectSlideHandler(index)}
            >
              {e.title}
            </button>
          );
        })}
      </div>
    </div>
  );

  const Slide = (
    <div className={classes.slide}>
      <div className={classes.slideImageContainer}>
        <Image
          src={DUMMY_SLIDES[selectedSlide].image}
          alt="everything you need in one place"
          height={450}
          width={350}
        />
      </div>
      <p>{DUMMY_SLIDES[selectedSlide].description}</p>
    </div>
  );

  return (
    <>
      {SlideButtons}
      {Slide}
    </>
  );
}
