import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DataForJob from '../components/ExpirienceObtainedBeforeJS/data/DataForJob';
import MainInfo from '../components/ExpirienceObtainedBeforeJS/MainInfo';
import Companies from '../components/ExpirienceObtainedBeforeJS/CompaniesList';
import Description from '../components/ExpirienceObtainedBeforeJS/Description';
import DataForStudy from '../components/ExpirienceObtainedBeforeJS/data/DataForStudy';
import Education from '../components/ExpirienceObtainedBeforeJS/Education';
import DescrEducation from '../components/ExpirienceObtainedBeforeJS/DescrEducation';

import '../components/MainPage/mainPage.scss';
import '../components/ExpirienceObtainedBeforeJS/css/style.scss';

const ExpirienceObtainedBeforeJS = () => {
  const { t } = useTranslation();
  const { jobInfo, onToggleRise } = DataForJob();
  const { studyInfo, onToggleRiseStudy } = DataForStudy();
  const [activeList, setActiveList] = useState(false);
  const [activeStudyList, setActiveStudyList] = useState(false);

  const onActive = () => {
    setActiveList((activeList) => !activeList);
  };
  const onActiveStudy = () => {
    setActiveStudyList((activeStudyList) => !activeStudyList);
  };

  const skeletonShow = {
    display: activeList ? 'none' : 'block',
  };
  const skeletonShowStudy = {
    display: activeStudyList ? 'none' : 'block',
  };

  return (
    <div>
      <div className='app__oldCV'>
        <MainInfo />

        <div className='job__section__wrapper mb-10'>
          <Companies
            jobInfo={jobInfo}
            onToggleRise={onToggleRise}
            active={activeList}
            onActive={onActive}
          />
          <div className='skeleton' style={skeletonShow}></div>
          <Description jobInfo={jobInfo} active={activeList} />
        </div>

        <div className='study__section__wrapper mb-10'>
          <Education
            studyInfo={studyInfo}
            onToggleRiseStudy={onToggleRiseStudy}
            active={activeStudyList}
            onActiveStudy={onActiveStudy}
          />
          <div className='skeleton' style={skeletonShowStudy}></div>
          <DescrEducation studyInfo={studyInfo} active={activeStudyList} />
        </div>
      </div>

      <Link to={`/after`} className='btn nextPage'>
        <div>{t('AFTER')}</div>
      </Link>
    </div>
  );
};

export default ExpirienceObtainedBeforeJS;
