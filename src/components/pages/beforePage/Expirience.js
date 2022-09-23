import { Component } from 'react';
import AppFilter from './AppFilter';
// import Accordion from "../../Accordion";

class  Expirience extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Робота', 
      active: false,
      rise: false
    }
  }

  onActive = () => {
    this.setState(({active, rise}) => ({
      active: !active,
      rise: !rise
    }))

/*     this.nextElementSibling.classList.toggle('active-content');

    if (this.classList.contains('active-style')) {
      this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
    } else {
      this.nextElementSibling.style.maxHeight = '0px';
    } */
  }
  // const {filter} = props;

  render () {
    const {name, active, rise} = this.state;
    const {onAccordion, data} = this.props;
    let classNames = 'accordion-heading';
    if (active) {
      classNames += ' active-style';
    }
    return (
      <div className="expirience_info__track">
          <div className={classNames}>
            <span onClick={this.onActive}>{name}</span>
          </div>
          <AppFilter rise={rise} 
          onAccordion={onAccordion(data.id)}
          data={data}/>
      </div>
    )
  }
}

export default Expirience;