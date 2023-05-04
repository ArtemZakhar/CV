import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainInfo from "./ExpirienceObtainedAfterJS/MainInfo";
import ProjectList from "./ExpirienceObtainedAfterJS/porfolioBlock/components/projectList/ProjectList";
import CourseFilters from "./ExpirienceObtainedAfterJS/porfolioBlock/components/courseFilters/CourseFilters";
import CourseDescription from "./ExpirienceObtainedAfterJS/porfolioBlock/components/courseDescription/CourseDescription";
import ProjectDescription from "./ExpirienceObtainedAfterJS/porfolioBlock/components/projectDescription/ProjectDescription";

import "./ExpirienceObtainedAfterJS/css/style.scss";

const ExpirienceObtainedAfterJS = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="app__newCV">
        <MainInfo />
        <div className="courses__section__wrapper">
          <CourseFilters />
          <ProjectList />
          <div className="courses__section__projects_description">
            <ProjectDescription />
            <CourseDescription />
          </div>
        </div>
      </div>

      <Link to={`/before`} className="btn nextPage">
        <div>{t("PREVIOUS")}</div>
      </Link>
    </div>
  );
};

export default ExpirienceObtainedAfterJS;
