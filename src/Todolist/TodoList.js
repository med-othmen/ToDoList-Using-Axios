import React from 'react';

import axios from 'axios';

export default class TodoList extends React.Component {
  state = {
    persons: [],
    name: '',
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/todos`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);

      })
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>
            task :
     <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <label>
            Completed :
     <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>

        {this.state.persons.map(person => <div>
          <li key={person.id}>{person.title} <button type="submit">Delete</button> </li>



        </div>)}

      </div>

    )
  }
}