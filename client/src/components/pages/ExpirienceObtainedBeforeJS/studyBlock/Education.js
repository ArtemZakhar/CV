import { useTranslation } from "react-i18next";

const Education = ({ studyInfo, onToggleRiseStudy, active, onActiveStudy }) => {
  const { t, i18n } = useTranslation();
  const elements = studyInfo.map((item) => {
    const { id, rise } = item;

    let activeItem = "accordion-block__item";
    if (rise) {
      activeItem = "accordion-block__item active-style";
    }
    return (
      <div className="accordion-block" key={id}>
        <p
          className={`${activeItem}`}
          type="button"
          tabIndex={0}
          onClick={() => {
            onToggleRiseStudy(id);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onToggleRiseStudy(id);
            }
          }}
        >
          <span>{i18n.language === item.ua.language ? item.ua.education : item.en.education}</span>
        </p>
      </div>
    );
  });

  let classNameforEd = "accordion-heading";
  if (active) {
    classNameforEd += " active-style";
  }

  let classNameForList = "accordion-block-content";
  if (active) {
    classNameForList = "accordion-block-content__active";
  }

  return (
    <div className="study__section__titles">
      <div className={classNameforEd}>
        <span
          onClick={onActiveStudy}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onActiveStudy();
            }
          }}
        >
          {t("EDUCATION")}
        </span>
      </div>
      <div className={classNameForList} style={active ? { maxHeight: "80px" } : { maxHeight: "0" }}>
        {elements}
      </div>
    </div>
  );
};

export default Education;
