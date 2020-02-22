import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
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

  handleChange = el => {
    this.setState({ searchField: el.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(el =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
