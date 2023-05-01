import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import usedApproaches from "./MainPage/usedApproaches";

import "./MainPage/mainPage.scss";

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(1);

  function goToSlide(sliderIndex) {
    setIndex(sliderIndex);
  }

  useEffect(() => {
    const autoSliderChange = setInterval(() => {
      const lastSlide = index === usedApproaches.length - 1;
      const newIndex = lastSlide ? 0 : index + 1;
      setIndex(newIndex);
    }, 18000);
    return () => clearInterval(autoSliderChange);
  }, [index]);

  const approachSlider = (sliderIndex) => {
    const data = usedApproaches[sliderIndex];

    return (
      <div className="approach__wrapper">
        <h1 className="approach__header">{t("THE")} {i18n.language === data.name.ua.language ? data.name.ua.info : data.name.en.info} {t("H1PHRASE")}</h1>
        <div className="approach__info">
          <div className="approach__info_language">
            <div>{t("LANGUAGE")}</div>
            <div>{data.language}</div>
          </div>
          <div className="approach__info_library">
            <div>{t("LIBRARY")}</div>
            <div>{data.library}</div>
          </div>
          <div className="approach__info_approaches">
            <div>{t("APPROACHES")}</div>
            <div>{data.approaches}</div>
          </div>
          <div className="approach__info_features">
            <div>{t("MODULES")}</div>
            <div>{data.features}</div>
          </div>
        </div>
      </div>
    );
  };

  const dots = (index) => {
    const displayDots = usedApproaches.map((slide, i) => {
      let classForDots;
      if (index === i) {
        classForDots = "approach_dots approach__dots_active";
      } else {
        classForDots = "approach_dots";
      }
      return <div className={classForDots} key={slide.id} onClick={() => goToSlide(i)}></div>;
    });
    return displayDots;
  };

  const sliderDots = (index) => {
    return <div className="approach__dots">{dots(index)}</div>;
  };

  return (
    <>
      <section className="mainBtns">
        <Link to={`/before`} className="btn beforeBtn">
          <div>{t("PREVIOUS")}</div>
        </Link>

        <Link to={`/after`} className="btn afterBtn">
          <div>{t("AFTER")}</div>
        </Link>
      </section>
      <section className="approach">
        {sliderDots(index)}
        {approachSlider(index)}
      </section>
    </>
  );
};

export default MainPage;
