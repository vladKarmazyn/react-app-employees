import { Component } from 'react';
import './employers-add-form.css'

class EmployersAddForm extends Component {
   constructor(props ) {
    super(props);
    this.state = {
        name: '',
        salary: ''
    }
   }
   
   onValueChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
   }
   
   onSubmit= (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary)
    this.setState({
        name: '',
        salary: ''
    })    
    
}

addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
}





    render() {

        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Додайте нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як звати ?" 
                          name="name"
                          value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                         name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}


export default EmployersAddForm;