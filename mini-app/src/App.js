import { Component } from 'react';
import CharAttr from "./components/CharAttr";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myPeople: [], //need one for starships and planets
      userInput: ''
    };
  }
  async componentDidMount() {
    const urlPeople = 'https://swapi.dev/api/people'
    const response = await fetch(urlPeople);
    const dataPg1 = await response.json();
    const peeps = dataPg1.results; //need to determine if this is peeps or planets or starships first?
    this.setState({ myPeople: peeps }) //set state only for chosen search (people, place, starship)

  }

  render() {
    const input = document.querySelector('input');
    const display = document.getElementById('displayChar');
    if (input) {
      input.addEventListener('change', (e) => {
        let searchedChar = e.target.value;  //searchedChar maybe too specific if this can be people,place,starship
        display.textContent = searchedChar; //??? Do we need this?
        this.setState({ userInput: searchedChar });
      });
    }
    //change label below to be "Search the SW Database:"
    //Change placeholder to "Enter a Character, Planet, or Starship name"
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