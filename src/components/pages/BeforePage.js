import { Component } from 'react';

import MainInfo from './beforePage/MainInfo';
import Expirience from './beforePage/Expirience';
import Description from './beforePage/Description';

import './beforePage/beforePage.scss';

class BeforePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 'vitam',
        name: 'ТОВ "Вітам Україна"',
        terms: 'Листопад 2016 - теперішній час', 
        time: '6 років',
        place: 'Київ', 
        web: "vitam.com.ua", 
        webToShow: "http://vitam.com.ua/", 
        profile: 'Транспортно-експедиційна компанія:',
        descr: 'Пошук і супровід транспорту для експортно-імпортний операцій,надання митно-брокерських послуг.',
        position: 'Засновний, керівник оперативного відділу',
        duties: ["Формування стратегії розвитку відділу;", 'Контроль і допомога виконання планів відділу;', 'Інформаційна підтримка вирішення проблем в середині компанії;', "Навчання нового персоналу."],
        achievements: ["-Успішно увійшли на висококонкурентний ринок і закріпились;", "-Не було втрачено жодного цільового клієнта (неодноразово отримували схвальні відгуки про нашу професійну роботу);", "-Розбудовав оперативний відділ;", "-Побудував зрозумілу систему за якої працювала команда;"],
        rise: false},
    
        {id: 'fozzy',
        name: 'ТОВ "Фоззі-Фуд',
        terms: 'Листопад 2012 - Жовтень 2016', 
        time: '3 роки 11 місяців',
        place: 'Київ', 
        web: "www.fozzy.ua", 
        webToShow: "https://www.fozzy.ua/ua/", 
        profile: 'Роздрібна торгівля:',
        descr: 'одна з найбільших торгово-промислових груп України.',
        position: 'Спеціаліст з логістики',
        duties: ["Пошук і супровід товарів в імпортному сполученні;", "Розвиток відносин з контрагентами;", "Звітність;", "Контроль і планування фінансового потоку."],
        achievements: ["-Ефективно супроводжував до 100 авто в місяць (авто, які в дорозі);", "-Розробив напрям Прибалтики. Потік збільшився з 1 машини в тиждень на момент початку роботи до 40 авто в тиждень на момент звільнення;"],
        rise: false},
    
        {id: 'aec',
        name: 'ТОВ "Автомотів Юроп Корпорейшн"',
        terms: 'Листопад 2011 - Листопад 2012', 
        time: '1 рік',
        place: 'Київ', 
        web: "/before", 
        webToShow: "не існуюча компанія", 
        profile: 'Автомобільний імпортер:',
        descr: 'офійний імпортер автомобілів BYD в Україні.',
        position: 'Менеджер ЗЕД',
        duties: ["Комунікація з відправником з приводу термінів готовності продукції і комплектації;", "Розробка нових шляхів доставки товарів;", "Звітність по витратам на доставку;", "Вирішення претензійних спорів."],
        achievements: ["-Змінив метод доставки товару, чим зменшим кількість пошкодженої продукції і оптимізував вартість доставки;", "-Відправив виставковий екземляр в Польщу і повернув назад, зекономивши кошти на митне оформлення і вартість транспортування в зворотньому напрямку;"],
        rise: false}
      ], 
      active: false,
    }
  }

  onShowTheList = () => {
    
  }

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        item.rise = false;
        
        if (item.id === id) {
          return {...item, rise: !item.rise}
        } else if (item.id === !id) {

        }
        return item;
      })
    }))
  }

  onActive = () => {
    this.setState(({active}) => ({
      active: !active
    }))
  }
  
  
  render () {
    return (
      <div className="app__oldCV">
        <MainInfo/>
        <Expirience data={this.state.data} 
        onToggleRise={this.onToggleRise}
        active={this.state.active}
        onActive={this.onActive}/>
        <Description data={this.state.data}
        active={this.state.active}/>
      </div>
    )
  }
  
}

export default BeforePage;