import React,{Component} from 'react';
import './App.css';
import { CardList } from './Components/Card-List/Card_List_Component';

import { SearchBox } from './Components/SearchBox/search-box.component';

// we cannot use bind when we use arrow function

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    // we cannot use bind when we use arrow function
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  // handleChange (e) = {
  //   this.setState({ searchField: e.target.value });
  // };
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monserts Rolodex</h1>
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
