import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activeFilterChanged, filtersFetch } from './CourseFilterSlice';

const CourseFilters = () => {
  const { filters, activeFilter } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersFetch());
    // eslint-disable-next-line
  }, []);

  const renderFilters = (arr) => {
    return arr.map(({ _id, name }) => {
      let btnClass = '';
      if (name === activeFilter) {
        btnClass = 'active-style';
      }

      return (
        <p key={_id}>
          <span
            className={btnClass}
            id={_id}
            onClick={() => dispatch(activeFilterChanged(name))}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(activeFilterChanged(name));
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

  return <div className='courses__section__titles'>{elements}</div>;
};

export default CourseFilters;
