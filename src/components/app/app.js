import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

const App = () => {
  const data = [
    {
      name: 'Ivan',
      salary: 900,
      // increase: false,
      id: 1,
    },
    {
      name: 'Alex',
      salary: 1200,
      // increase: false,
      id: 2,
    },
    {
      name: 'Brad',
      salary: 2000,
      // increase: false,
      id: 3,
    },
  ];
  
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
};

export default App;
