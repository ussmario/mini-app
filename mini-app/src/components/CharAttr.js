export default function CharAttr({ peeps, userInput }) {

  //should take in only peeps. Make a new component for planet or starship
  let char = peeps.find((element) => element.name === userInput)
  let attr = [];
  for(let i in char){
    attr.push(`${i} : ${char[i]}`);
  }
  let filteredAttrs = [];
  if (attr !== []){
    for (let j =0; j < 8; j++){
    filteredAttrs.push(attr[j]);
    }
  }

  return (
    <div className="attr-list">
      <ul>
        {filteredAttrs.map((element, index) => (
          <li key={index}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}