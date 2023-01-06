import './app-info.css';

const AppInfo = ({ data }) => {
  const increasedEmployees = data.filter((item) => item.increase);

  return (
    <div className="app-info">
      <h1>Учет сотрудников в ООО "Ромашка"</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат: {increasedEmployees.length}</h2>
    </div>
  );
};

export default AppInfo;