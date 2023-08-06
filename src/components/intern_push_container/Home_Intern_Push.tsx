import { Icon } from "@iconify/react/dist/iconify.js";
import { CSSProperties, useEffect, useState } from "react";
import styles from "./Home_Intern_Push.module.scss";
import { titleContext } from "../../contexts/TitleContext";
import TextButton from "../Buttons";

const slideStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles: CSSProperties = {
  userSelect: "none",
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "8px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles: CSSProperties = {
  position: "absolute",
  userSelect: "none",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "8px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles: CSSProperties = {
  cursor: "pointer",
  position: "relative",
  height: "100%",
};

const dotsContainerStyles: CSSProperties = {
  position: "absolute",
  userSelect: "none",
  transform: "translate(-50%, -50%)",
  bottom: "4px",
  left: "50%",
  display: "flex",
  justifyContent: "center",
};

const dotStyle: CSSProperties = {
  margin: "0 3px",
  // background: "red",
  cursor: "pointer",
  fontSize: "14px",
};

const titleStyle: CSSProperties = {
  justifySelf: "center",
  alignSelf: "center",
  position: "absolute",
  userSelect: "none",
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  fontSize: "32px",
  textOverflow: "ellipsis",
};

type Slider = {
  imageURL: string;
  title: string;
  url: string;
  alt: string;
  buttonTitle: string;
};

interface ISlides {
  slides: Array<Slider>;
}

export function ImageSlider({ slides }: ISlides) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground: CSSProperties = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].imageURL})`,
  };

  useEffect(() => {
    // Diese Funktion wird aufgerufen, wenn der Komponenten montiert wird.
    const autoSlide = setInterval(goToNext, 10000); // 20 Sekunden (in Millisekunden)

    // Die Clean-up-Funktion wird aufgerufen, wenn die Komponente unmontiert wird,
    // um den Timer zu stoppen und unnötige Aktualisierungen zu verhindern.
    return () => {
      clearInterval(autoSlide);
    };
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      <div className={styles.contentContainer}>
        <h1 className={styles.titleStyle}>{slides[currentIndex].title}</h1>
        <TextButton
          content={slides[currentIndex].buttonTitle}
          onClick={() => {}}
          primary={true}
        />
      </div>
      <div
        style={slideStylesWidthBackground}
        className={styles.backgroundStyle}
      ></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <Icon
            icon={
              slideIndex === currentIndex
                ? "material-symbols:circle"
                : "material-symbols:circle-outline"
            }
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
