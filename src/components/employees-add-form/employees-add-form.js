import React from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
		}
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleAdd = (e) => {
		e.preventDefault();
		const { onAdd } = this.props; 
		onAdd(this.state);
		this.setState({
			name: '',
			salary: '',
		})
	}

	render() {
		const { name, salary } = this.state;
		let classes = "btn btn-outline-light";
		if (!name || !salary) {
			classes += " disabled";
		} 

		return (
			<div className="app-add-form">
				<h3>Добавить нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.handleAdd}
				>
					<input type="text"
						className="form-control new-post-label"
						placeholder="Введите имя"
						name='name'
						value={name}
						onChange={this.handleChange}
					/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="Укажите зарплату в $"
						name='salary'
						value={salary}
						onChange={this.handleChange}
					/>
					<button type="submit"
						className={classes}>Добавить</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;