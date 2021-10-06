import { Component } from 'react';
import FirstOrder from "./components/FirstOrder";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myPeople: [],
      myPlanets: [],
      myStarships: [],
      userInput: ''
    };
  }
  async componentDidMount() {
    const urlPeople = 'https://swapi.dev/api/people'
    const response = await fetch(urlPeople);
    const dataPg1 = await response.json();
    const peeps = dataPg1.results;

    const urlPlanets = 'https://swapi.dev/api/planets'
    const responsePlanets = await fetch(urlPlanets);
    const planetsDataPg1 = await responsePlanets.json(); //here is where we can fix the page1 results only issue
    const planets = planetsDataPg1.results;

    const urlStarships = 'https://swapi.dev/api/starships'
    const responseStarships = await fetch(urlStarships);
    const starshipDataPg1 = await responseStarships.json(); //here is where we can fix the page1 results only issue
    const starships = starshipDataPg1.results;
    this.setState({ myPeople: peeps, myPlanets: planets, myStarships: starships });
  }

  render() {
    const input = document.querySelector('input');
    const display = document.getElementById('displayChar');
    if (input) {
      input.addEventListener('change', (e) => {
        let searchVal = e.target.value;
        display.textContent = searchVal;
        this.setState({ userInput: searchVal });
      });
    }

    return (
      <div className="App">
        <form>
          <label htmlFor="inputName">Search for a Character, Planet, or Starship:</label>
          <input type="text" placeholder="Enter a Name" name="inputName" />
          <button type="button">Search</button>
          <h2 id="displayChar"></h2>
          <FirstOrder peeps={this.state.myPeople} planets={this.state.myPlanets} starships={this.state.myStarships} userInput={this.state.userInput} />
        </form>
      </div>
    )
  }
}