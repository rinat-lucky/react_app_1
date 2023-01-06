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
    this.state = { data };
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

  handleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => item.id === id ? {...item, increase: !item.increase} : item)
    }))
  }

  handlePromo = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => item.id === id ? {...item, promo: !item.promo} : item)
    }))
  }

  render() {
    return (
      <div className="app">
        <AppInfo data={this.state.data}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={this.state.data}
          onDelete={this.handleDelete}
          onIncrease={this.handleIncrease}
          onPromo={this.handlePromo}
        />
        <EmployeesAddForm onAdd={this.handleAdd}/>
      </div>
    );
  }
};

export default App;
