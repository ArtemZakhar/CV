import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const CourseDescription = () => {
  const {t, i18n} = useTranslation();
  const {filters, activeFilter} = useSelector(state => state.filters);

  const viewDescr = (arr) => {

    return arr.map(({_id, name, description}) => {
      const correctLanguageData = i18n.language === 'ua' ? description.uk.descr : description.en.descr;
      if (activeFilter === name) {
        return <div key={_id}>
          {t("COURSE")}: <span>{name}</span> <br/><br/>
          {t("DESCR")}: {correctLanguageData}
        </div>
      } else {
        return null
      }

    })
  }

  const elements = viewDescr(filters);

  return (
      <div>
          {elements}
      </div>
  )
}

export default CourseDescription;
