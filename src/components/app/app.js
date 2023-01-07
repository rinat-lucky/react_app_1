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
    this.state = { data, term: '' };
  }
  
  handleDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }))
  }

  handleAdd = ({ name, salary }) => {
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

  handleChangeProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => item.id === id ? {...item, [prop]: !item[prop]} : item)
    }))
  }

  updateSearch = (term) => {
    this.setState({ term });
  }

  searchEmps = (items, term) => {
    if (term.length === 0) return items;
    return items.filter((item) => item.name.indexOf(term) > -1);
  }

  render() {
    const { data, term } = this.state;
    const employeesCount = data.length;
    const increasedCount = data.filter((item) => item.increase).length;
    const visibleData = this.searchEmps(data, term);
    
    return (
      <div className="app">
        <AppInfo
          increased={increasedCount}
          employees={employeesCount}
        />
  
        <div className="search-panel">
          <SearchPanel
            updateSearch={this.updateSearch}
          />
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={visibleData}
          onDelete={this.handleDelete}
          onChangeProp={this.handleChangeProp}
        />
        <EmployeesAddForm
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
};

export default App;
