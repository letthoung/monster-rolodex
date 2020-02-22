import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  async componentDidMount() {
    try {
      const usersString = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await usersString.json();
      this.setState({ monsters: users });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
