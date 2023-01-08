import React from 'react';
import uniqueId from 'lodash.uniqueid';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

const data = [
  {
    name: 'Ivan',
    salary: 900,
    increase: false,
    promo: false,
    id: 1,
  },
  {
    name: 'Alex',
    salary: 1200,
    increase: false,
    promo: false,
    id: 2,
  },
  {
    name: 'Brad',
    salary: 2000,
    increase: false,
    promo: false,
    id: 3,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      term: '',
      filter: 'all',
    };
  }
  
  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }))
  }

  onAdd = ({ name, salary }) => {
    const newItem = {
      name,
      salary,
      increase: false,
      promo: false,
      id: Number(uniqueId()) + 3, 
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }))
  }

  onChangeProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => item.id === id ? {...item, [prop]: !item[prop]} : item)
    }))
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  onChangeFilter = (filter) => {
    this.setState({ filter });
  }

  searchEmps = (items, term) => {
    if (term.length === 0) return items;
    return items.filter((item) => item.name.indexOf(term) > -1);
  }

  filterEmps = (items, filter) => {
    switch (filter) {
      case 'promotion':
        return items.filter((item) => item.promo);
      case 'over1000':
        return items.filter((item) => item.salary > 1000);
      case 'all':
        return items;
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  }

  render() {
    const { data, term, filter } = this.state;
    const employeesCount = data.length;
    const increasedCount = data.filter((item) => item.increase).length;
    const visibleData = this.filterEmps(this.searchEmps(data, term), filter);
    
    return (
      <div className="app">
        <AppInfo
          increased={increasedCount}
          employees={employeesCount}
        />
  
        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter
            filter={filter}
            onChangeFilter={this.onChangeFilter}            
          />
        </div>
  
        <EmployeesList 
          data={visibleData}
          onDelete={this.onDelete}
          onChangeProp={this.onChangeProp}
        />
        <EmployeesAddForm
          onAdd={this.onAdd}
        />
      </div>
    );
  }
};

export default App;
