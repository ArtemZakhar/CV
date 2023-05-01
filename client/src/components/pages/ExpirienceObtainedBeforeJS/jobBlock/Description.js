import { useTranslation } from "react-i18next";

const Description = ({ active, jobInfo }) => {
  const { i18n } = useTranslation();

  const roleDescription = jobInfo.map((item) => {
    const { id, rise } = item;

    const languageInformationDisplay = i18n.language === item.ua.language ? item.ua : item.en;

    const { terms, time, place, webToShow, web, profile, descr, position } =
      languageInformationDisplay;

    const workStyle = {
      display: rise && active ? "block" : "none",
    };

    const viewDuties = languageInformationDisplay.duties.map((item) => (
      <li key={item.id}>{item.dutie}</li>
    ));
    return (
      <div className="job__section__possition_descr" key={id} style={workStyle}>
        <h2>
          {terms}
          <br />
          {time}
        </h2>
        <span className="grey">
          {place}, <a href={web}>{webToShow}</a>
        </span>
        <div className="compInfo">
          {profile}
          <br />
          <ul className="ulList">
            <li>- {descr}</li>
          </ul>
        </div>
        <h2>{position}</h2>
        <span>
          <ul className="ulList">{viewDuties}</ul>
        </span>
      </div>
    );
  });

  const roleAchievements = jobInfo.map((item) => {
    const { rise } = item;

    const languageInformationDisplay = i18n.language === item.ua.language ? item.ua : item.en;

    const workStyle = {
      display: rise && active ? "block" : "none",
    };

    const viewAchivments = languageInformationDisplay.achievements.map((item) => (
      <li key={item.id}>{item.achiev}</li>
    ));

    return (
      <div key={languageInformationDisplay.id} className="job__section__achiev" style={workStyle}>
        <ul>{viewAchivments}</ul>
      </div>
    );
  });

  return (
    <>
      {roleDescription}
      {roleAchievements}
    </>
  );
};

export default Description;
