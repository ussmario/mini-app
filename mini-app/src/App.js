import { Component } from 'react';
import CharAttr from "./components/CharAttr";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myPeople: [],
      userInput: ''
    };
  }
  async componentDidMount() {
    const url = 'https://swapi.dev/api/people'
    const response = await fetch(url);
    const dataPg1 = await response.json();
    const peeps = dataPg1.results;
    this.setState({ myPeople: peeps })
  }

  render() {
    const input = document.querySelector('input');
    const display = document.getElementById('displayChar');
    if (input) {
      input.addEventListener('change', (e) => {
        let searchedChar = e.target.value;
        display.textContent = searchedChar;
        this.setState({ userInput: searchedChar });
      });
    }

    return (
      <div className="App">
        <form>
          <label htmlFor="inputName">Search for a Character:</label>
          <input type="text" placeholder="Enter a Characters Name" name="inputName" />
          <h2 id="displayChar"></h2>
          <CharAttr peeps={this.state.myPeople} userInput={this.state.userInput} />
          <button type="button">Search</button>
        </form>
      </div>
    )
  }
}