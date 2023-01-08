import './app-filter.css'

const buttonsData = [
  {name: 'all', label: 'Все сотрудники'},
  {name: 'promotion', label: 'На повышение'},
  {name: 'over1000', label: 'З/п больше 1000$'},
];

const AppFilter = ({ filter, onChangeFilter }) => {
  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const classes = active ? "btn btn-light" : "btn btn-outline-light";

    return (
      <button
        className={classes}
        type='button'
        key={name}
        onClick={() => onChangeFilter(name)}
      >
        {label}
      </button>
    )
  });
  
  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;