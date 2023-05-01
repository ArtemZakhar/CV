import { useTranslation } from "react-i18next";

const DescrEducation = ({ studyInfo, active }) => {
  const { i18n } = useTranslation();

  const details = studyInfo.map((item) => {
    const { id, rise } = item;
    const correctLanguageData = i18n.language === item.ua.language ? item.ua : item.en;
    const { name, graduated, place, descr } = correctLanguageData;

    const workStyle = {
      display: rise && active ? "block" : "none",
    };

    return (
      <div className="study__section__descr" key={id} style={workStyle}>
        <h2>
          {name} <br />
          {graduated}
        </h2>
        <span className="grey">{place}</span>
        <div className="compInfo">{descr}</div>
      </div>
    );
  });

  const achievements = studyInfo.map((item) => {
    const { rise } = item;
    let achievements =
      i18n.language === item.ua.language ? item.ua.achievements : item.en.achievements;

    const workStyle = {
      display: rise && active ? "block" : "none",
    };

    const viewAchivments = achievements.map((item) => <li key={item.id}>{item.achieve}</li>); 
    return (
      <div className="study__section__achiev" key={item.id} style={workStyle}>
        <ul>{viewAchivments}</ul>
      </div>
    );
  });

  return (
    <>
      {details}
      {achievements}
    </>
  );
};

export default DescrEducation;
