import React from 'react';
import './employees-list-item.css';

class EmployeesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      promo: false,
    };
  }

  handleIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }))
  }

  handleClickPromo = () => {
    this.setState(({ promo }) => ({
      promo: !promo,
    }))
  }
  
  render() {
    const { name, salary } = this.props; 
    const { increase, promo } = this.state;

    let classes = "list-group-item d-flex justify-content-between";
    if (increase) {
      classes += " increase";
    }
    if (promo) {
      classes += " like";
    }
    
    return (
      <li className={classes}>
        <span className="list-group-item-label" onClick={this.handleClickPromo}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
            className="btn-cookie btn-sm"
            onClick={this.handleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
            className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }

  
};

export default EmployeesListItem;