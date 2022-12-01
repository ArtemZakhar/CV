import { useDispatch, useSelector } from 'react-redux';

import { activeProject } from './../projectList/projectSlice';

const ProjectsListItem = ({id, image, name}) => {
  const {activeCourse} = useSelector(state => state.projects);
  const {activeFilter} = useSelector(state => state.filters);

  const dispatch = useDispatch();

  let activeClass = null
  if (activeCourse === name) {
    activeClass = "courses__item_selected";
  }

  const projectsToShow = {
    display: activeFilter === "Udemy" ? "none" : "block"
  }

  return (
      <div

        style={projectsToShow}
        onClick={() => dispatch(activeProject(name))}
        key = {id}>
          <img src={image} 
              className={activeClass} 
              id = {id}
              alt={name} 
             
              style={{'objectFit': 'cover'}}/>
      </div>
  )
}

export default ProjectsListItem;