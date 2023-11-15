import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProjectDescription = () => {
  const { t, i18n } = useTranslation();
  const { projects, activeCourse } = useSelector((state) => state.projects);
  const { activeFilter } = useSelector((state) => state.filters);

  const viewProject = (arr, activeFilter) => {
    return arr.map(({ _id, name, description, githubLink, gDiskLink, course }) => {
      const correctLanguageData =
        i18n.language === 'ua' ? description.uk.descr : description.en.descr;
      const courseName = course.name;
      if (activeCourse === name && activeFilter === courseName) {
        return (
          <div key={_id}>
            {t("PROJECT")} <span>{name}</span> <br />
            <br />
            {t("DESCR")}: {correctLanguageData} <br />
            <br />
            <a style={{ textDecoration: "underline" }} href={githubLink}>
              GitHub
            </a>{" "}
            <br />
            <br />
            <a style={{ textDecoration: "underline" }} href={gDiskLink}>
              GoogleDisk
            </a>{" "}
            <br />
            <br />
          </div>
        );
      } else {
        return null;
      }
    });
  };
  const elements = viewProject(projects, activeFilter);

  return (
    <div>
      {elements}
    </div>
  );
};

export default ProjectDescription;
