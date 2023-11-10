import { useTranslation } from 'react-i18next';
import newAva from './img/photoAfter_final.jpg';
import '../ExpirienceObtainedAfterJS/css/style.scss';

const MainInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='main__info__wrapper'>
        <div className='main__info__ava'>
          <img className='main__info__ava_img2' src={newAva} alt='newMe' />
        </div>
        <div className='main__info__descr'>
          {t('NAME')} <br />
          {t('SEX')}, {t('AGE')}, {t('DATE_OF_BIRTH')}, {t('MARRIED')} <br />
          <br />
          +380503899090 <span className='grey'>({t('CALL')})</span>
          <br />
          artemzakharchuk@gmail.com <br />
          <br />
          {t('RESIDENCE')} <br />
          {t('CITIZENSHIP')} <br />
          <br />
          {t('COVER')}
        </div>
      </div>
      <div className='main__info__headers__wrapper'>
        <div className='expirience__track'>{t('COURSES')} </div>
        <div className='portfolio__track'>{t('PORTFOLIO')}</div>
        <div className='achievements__track'>{t('COURSE_DESCR')}</div>
      </div>
    </>
  );
};

export default MainInfo;
