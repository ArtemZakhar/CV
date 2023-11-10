import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import MainInfo from '../components/ExpirienceObtainedAfterJS/MainInfo';
import ProjectList from '../components/ExpirienceObtainedAfterJS/projectList/ProjectList';
import CourseFilters from '../components/ExpirienceObtainedAfterJS/courseFilters/CourseFilters';
import CourseDescription from '../components/ExpirienceObtainedAfterJS/courseDescription/CourseDescription';
import ProjectDescription from '../components/ExpirienceObtainedAfterJS/projectDescription/ProjectDescription';

import '../components//MainPage/mainPage.scss';
import '../components/ExpirienceObtainedAfterJS/css/style.scss';

const ExpirienceObtainedAfterJS = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='app__newCV'>
        <MainInfo />
        <div className='courses__section__wrapper'>
          <CourseFilters />
          <ProjectList />
          <div className='courses__section__projects_description'>
            <ProjectDescription />
            <CourseDescription />
          </div>
        </div>
      </div>

      <Link to={`/before`} className='btn nextPage'>
        <div>{t('PREVIOUS')}</div>
      </Link>
    </div>
  );
};

export default ExpirienceObtainedAfterJS;
