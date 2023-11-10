import { useTranslation } from "react-i18next";
import oldAva from "./img/baby.jpg";

const MainInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="main__info__wrapper">
        <div className="main__info__ava">
          <img className="main__info__ava_img" src={oldAva} alt="oldMe" />
        </div>
        <div className="main__info__descr">
          {t("NAME")} <br />
          {t("SEX")}, {t("AGE")}, {t("DATE_OF_BIRTH")}, {t("MARRIED")} <br />
          <br />
          +380503899090 <span className="grey">({t("CALL")})</span>
          <br />
          artemzakharchuk@gmail.com <br />
          <br />
          {t("RESIDENCE")} <br />
          {t("CITIZENSHIP")} <br />
          <br />
          {t("INTERESTS")}
        </div>
      </div>
      <div className="main__info__headers__wrapper">
        <div className="expirience__track">{t("EXPERIENCE_HEADER")}</div>
        <div className="descr__track">{t("EXPERIENCE_DESCRIPTION")}</div>
        <div className="achievements__track">{t("EXPERIENCE_ACHIEVEMENTS")}</div>
      </div>
    </>
  );
};

export default MainInfo;
