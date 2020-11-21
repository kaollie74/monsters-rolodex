import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search-box/search-box.component.jsx";
import Axios from "axios";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      this.setState({ monsters: res.data })
    );
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter((el) =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          handleChange={(e) => this.handleChange(e)}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
