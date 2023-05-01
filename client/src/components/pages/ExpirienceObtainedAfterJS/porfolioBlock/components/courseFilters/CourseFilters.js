import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { activeFilterChanged, filtersFetch } from "./CourseFilterSlice";
import Spinner from "../../../../../spinner/Spinner";

const CourseFilters = () => {
  const { t } = useTranslation();
  const { filters, filtersLoadingStatus, activeFilter } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersFetch());
    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">{t("LOADING_ERROR")}</h5>;
  }

  const renderFilters = (arr) => {
    return arr.map(({ _id, name }) => {
      let btnClass = "";
      if (name === activeFilter) {
        btnClass = "active-style";
      }

      return (
        <p key={_id}>
          <span className={btnClass} id={_id} 
          onClick={() => dispatch(activeFilterChanged(name))}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(activeFilterChanged(name))
            }
          }}
          >
            {name}
          </span>
        </p>
      );
    });
  };

  const elements = renderFilters(filters);

  return <div className="courses__section__titles">{elements}</div>;
};

export default CourseFilters;
