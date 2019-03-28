
import React from 'react'
import axios from 'axios';
import ApiPost from "../ApiPost/ApiPost";
class Api extends React.Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <div>
      <ul>
      <h3>getting list of persons using axios get ApI call </h3>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
      <h3>axios post method</h3>
      <ApiPost />
      </div>
    )
  }
}
export default Api;
