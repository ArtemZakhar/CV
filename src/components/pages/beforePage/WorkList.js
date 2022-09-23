const Worklist = (props) => {
  

  return (
   <div className='descr_info__track'>
        <h2>
          {props.terms}<br/>{props.time}
        </h2>
        <span className="grey">{props.place}, <a href={props.web}>{props.webToShow}</a></span>
        <div className="compInfo">{props.profile}<br/>
          <ul className="ulList">
            <li>- {props.descr}</li>
          </ul>
        </div>
        <h2>{props.position}</h2>
        <span>
          <ul className="ulList">
            <li>* {props.duties[0]}</li>
            <li>* {props.duties[1]}</li>
            <li>* {props.duties[2]}</li>
            <li>* {props.duties[3]}</li>
          </ul>
        </span>
    </div>
  )
}

export default Worklist;