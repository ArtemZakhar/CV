import { useId } from 'react';

import WorkList from './WorkList';

const Description = ({active, data}) => {
  const idForAch = useId();

  const elements = data.map((item) => {
    const {id, rise, name, achievements, ...itemProps} = item;
    
    const workStyle = {
      display: rise && active ? "block" : "none"
    }

    return (
      <>
        <div 
          key={id}
          style={workStyle}>
          <WorkList {...itemProps}/>
        </div>
        <div className="achievements_info__track"
          key={idForAch}
          style={workStyle}>
          <span>{achievements}</span>
        </div>
      </>
    )
  })
  
  return (
    <>
      {elements}
    </>
  )
  
}

export default Description;
