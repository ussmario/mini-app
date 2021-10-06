import CharAttr from './CharAttr';
import PlanetAttr from './PlanetAttr';
import ShipAttr from './ShipAttr';

export default function FirstOrder({ peeps, planets, starships, userInput }) {
  let whichAttr = {};
  let noun = {};
  let char = peeps.find((element) => element.name === userInput)
  if (char) {
    noun = char;
    whichAttr = CharAttr;
  } else {
    let planet = planets.find((element) => element.name === userInput)
    if (planet) {
      noun = planet;
      whichAttr = PlanetAttr;
    } else {
      let starship = starships.find((element) => element.name === userInput)
      if (starship) {
        noun = starship;
        whichAttr = ShipAttr;
      }
      return (<>{`Name not found. Refine your search or check spelling.`}</>)
    }
  }

  return (
    <ul className="attr-list">
      <CharAttr input={noun} />
    </ul>
  );
}