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
        let thisIsWhatWeWant = e.target.value;
        display.textContent = thisIsWhatWeWant;
        this.setState({ userInput: thisIsWhatWeWant });
      });
    }

    return (
      <div className="App">
        <form>
          <label for="inputName">Search for a Character:</label>
          <input type="text" placeholder="Enter a Characters Name" name="inputName" />
          <p id="displayChar"></p>
          <CharAttr peeps={this.state.myPeople} userInput={this.state.userInput} />
          <button type="button">Search</button>
        </form>
      </div>
    )
  }
}