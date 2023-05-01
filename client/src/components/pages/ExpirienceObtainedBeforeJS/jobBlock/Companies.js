import { useTranslation } from "react-i18next";

const Companies = ({ active, jobInfo, onActive, onToggleRise }) => {
  const { t, i18n } = useTranslation();

  const elements = jobInfo.map((item, i) => {
    const { id, rise } = item;

    let activeItem = "accordion-block__item";
    if (rise) {
      activeItem = "accordion-block__item active-style";
    }

    return (
      <div key={id} className="accordion-block">
        <p
          className={`${activeItem}`}
          type="button"
          tabIndex={0}
          onClick={() => {
            onToggleRise(id);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onToggleRise(id);
            }
          }}
        >
          <span>{i18n.language === item.ua.language ? item.ua.name : item.en.name}</span>
        </p>
      </div>
    );
  });

  let classNameforJob = "accordion-heading";
  if (active) {
    classNameforJob += " active-style";
  }

  let classNameForList = "accordion-block-content";
  if (active) {
    classNameForList = "accordion-block-content__active";
  }

  return (
    <div className="job__section__titles">
      <div className={classNameforJob}>
        <span
          onClick={onActive}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onActive();
            }
          }}
        >
          {t("JOB")}
        </span>
      </div>
      <div
        className={classNameForList}
        style={active ? { maxHeight: "110px" } : { maxHeight: "0" }}
      >
        {elements}
      </div>
    </div>
  );
};

export default Companies;
