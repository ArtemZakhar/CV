import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DataForJob from "./ExpirienceObtainedBeforeJS/jobBlock/DataForJob";
import MainInfo from "./ExpirienceObtainedBeforeJS/MainInfo";
import Companies from "./ExpirienceObtainedBeforeJS/jobBlock/Companies";
import Description from "./ExpirienceObtainedBeforeJS/jobBlock/Description";
import DataForStudy from "./ExpirienceObtainedBeforeJS/studyBlock/DataForStudy";
import Education from "./ExpirienceObtainedBeforeJS/studyBlock/Education";
import DescrEducation from "./ExpirienceObtainedBeforeJS/studyBlock/DescrEducation";

import "./ExpirienceObtainedBeforeJS/css/style.scss";

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
    display: activeList ? "none" : "block",
  };

  return (
    <div>
      <div className="app__oldCV">
        <MainInfo />

        <div className="job__section__wrapper mb-10">
          <Companies
            jobInfo={jobInfo}
            onToggleRise={onToggleRise}
            active={activeList}
            onActive={onActive}
          />
          <div className="skeleton" style={skeletonShow}></div>
          <Description jobInfo={jobInfo} active={activeList} />
        </div>

        <div className="study__section__wrapper mb-10">
          <Education
            studyInfo={studyInfo}
            onToggleRiseStudy={onToggleRiseStudy}
            active={activeStudyList}
            onActiveStudy={onActiveStudy}
          />
          <div className="skeleton" style={skeletonShow}></div>
          <DescrEducation studyInfo={studyInfo} active={activeStudyList} />
        </div>
      </div>

      <Link to={`/after`} className="btn nextPage">
        <div>{t("AFTER")}</div>
      </Link>
    </div>
  );
};

export default ExpirienceObtainedBeforeJS;
