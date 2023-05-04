import { useDispatch, useSelector } from "react-redux";

import { activeProject } from "./../projectList/projectSlice";

const ProjectsListItem = ({ _id, image, name }) => {
  const { activeFilter } = useSelector((state) => state.filters);
  const { activeCourse } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  let chosenProject = null;

  if (activeCourse === name) {
    chosenProject = "courses__item_clicked";
  }

  const projectsToShow = {
    display: activeFilter === "Udemy" || activeFilter === "Course On Demand" ? "none" : "block",
  };

  function selectedItem(e) {
    e.target.classList.add("courses__item_selected");
  }
  function nonSelectedItem(e) {
    e.target.classList.remove("courses__item_selected");
  }

  return (
    <div
      className="courses__section__projects_item"
      style={projectsToShow}
      onClick={() => dispatch(activeProject(name))}
      key={_id}
    >
      <div className="courses__section__projects_wrapper">
        <img
          src={image}
          onMouseOver={selectedItem}
          onMouseOut={nonSelectedItem}
          className={`${chosenProject}`}
          id={_id}
          alt={name}
          style={{ objectFit: "cover" }}
        />
        <div
          className="courses__section__projects_name"
          style={activeCourse === name ? { fontWeight: "900" } : { fontWeight: "500" }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProjectsListItem;
