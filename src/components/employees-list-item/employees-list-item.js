import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const { name, salary, increase, promo, onDelete, onChangeProp } = props;
  
  let classes = "list-group-item d-flex justify-content-between";
  if (increase) {
    classes += " increase";
  }
  if (promo) {
    classes += " like";
  }
  
  return (
    <li className={classes}>
      <span className="list-group-item-label" onClick={onChangeProp} data-toggle="promo">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
          className="btn-cookie btn-sm"
          onClick={onChangeProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm"
          onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;