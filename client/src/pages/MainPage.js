import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import usedApproaches from '../components/MainPage/usedApproaches';

import '../components/MainPage/mainPage.scss';

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);

  //slider

  useEffect(() => {
    const autoSliderChange = setInterval(() => {
      const lastSlide = index === usedApproaches.length - 1;
      const newIndex = lastSlide ? 0 : index + 1;
      setIndex(newIndex);
    }, 18000);
    return () => clearInterval(autoSliderChange);
  }, [index]);

  const goToPrevious = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? usedApproaches.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = index === usedApproaches.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  function goToSlide(sliderIndex) {
    setIndex(sliderIndex);
  }

  const approachSlider = (sliderIndex) => {
    const data = usedApproaches[sliderIndex];

    return (
      <div className='approach__wrapper'>
        <h1 className='approach__header'>
          {t('THE')}{' '}
          {i18n.language === data.name.ua.language
            ? data.name.ua.info
            : data.name.en.info}{' '}
          {t('H1PHRASE')}
        </h1>
        <div
          className='approach__info'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className='approach__info_language'>
            <div>{t('LANGUAGE')}</div>
            <div>{data.language}</div>
          </div>
          <div className='approach__info_library'>
            <div>{t('LIBRARY')}</div>
            <div>{data.library}</div>
          </div>
          <div className='approach__info_approaches'>
            <div>{t('APPROACHES')}</div>
            <div>{data.approaches}</div>
          </div>
          <div className='approach__info_features'>
            <div>{t('MODULES')}</div>
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
        classForDots = 'approach_dots approach__dots_active';
      } else {
        classForDots = 'approach_dots';
      }
      return (
        <div
          className={classForDots}
          key={slide.id}
          onClick={() => goToSlide(i)}
        ></div>
      );
    });
    return displayDots;
  };

  const sliderDots = (index) => {
    return <div className='approach__dots'>{dots(index)}</div>;
  };

  //swipe event

  const handleTouchStart = (e) => {
    e.preventDedault();
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const difference = touchDown - currentTouch;

    if (difference > 5) {
      goToNext();
    }

    if (difference < -5) {
      goToPrevious();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <section className='mainBtns'>
        <Link to={`/before`} className='btn beforeBtn'>
          <div>{t('PREVIOUS')}</div>
        </Link>

        <Link to={`/after`} className='btn afterBtn'>
          <div>{t('AFTER')}</div>
        </Link>
      </section>
      <section className='approach'>
        {sliderDots(index)}
        {approachSlider(index)}
      </section>
    </>
  );
};

export default MainPage;
