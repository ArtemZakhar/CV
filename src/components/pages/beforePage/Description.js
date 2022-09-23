import WorkList from './WorkList';

const Description = ({data}) => {
  const elements = data.map(item => {
    return (
      <WorkList key={item.id} {...item}/>
    )
  })
  
  return (
    <div>
      {elements}
    </div>
  )
  
}

export default Description;