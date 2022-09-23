

const AppFilter = ({data, onAccordion, rise}) => {

  const buttons = data.map(item => {
    const {id, name} = item;
    const active = rise;
    const clazz = active ? "accordion-block__item active-style" : "accordion-block__item";
    return (
      <p className={`${clazz}`}
        type="button"
        key={id}
        onClick={onAccordion}><span>{name}</span></p>
    )
  })

  return (
    <div className="accordion-block">
      {buttons}
    </div>
  )
}

export default AppFilter;