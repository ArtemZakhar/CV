import MainInfo from './beforePage/MainInfo';
import Expirience from './beforePage/Expirience';
import Description from './beforePage/Description';

// import Tabs from "../Tabs";
import './beforePage/beforePage.scss';
import Achievements from './beforePage/Achievements';

const BeforePage = () => {

  const data = [
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
    display: 'none'},

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
    display: 'none'},

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
    display: 'none'}
  ]

/*   filterJob = (items, filter) => {
    switch (filter) {
      case 'vitam': 
        return items.filter(item => item.idName === 'vitam');
      case 'fozzy':
        return items.filter(item => item.idName === 'fozzy');
      default: 
        return '';
    }
  } */



  return (
    <div className="app__oldCV">
      <MainInfo/>
      <Expirience data={data} onAccordion={id => console.log(id)}/>
      <Description data={data}/>
      <Achievements/>
    </div>
  )
  
}

export default BeforePage;