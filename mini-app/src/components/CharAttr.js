export default function CharAttr({ peeps, userInput }) {


  let char = peeps.find((element) => element.name === userInput)
  let attr = [];
  for(let i in char){
    attr.push(`${i} : ${char[i]}`);
  }
  let filteredAttrs = [];
  for (let j =0; j < 8; j++){
    filteredAttrs.push(attr[j]);
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

{/* {peeps.map((charObj, index) => (
    <Joke jokeSelectorFunc={jokeSelectorFunc} isSelected={selectedJoke===jokeObj.id} joke={jokeObj.joke} id={jokeObj.id} key={index} /> // What would happen if we didn't pass down the jokeSelectorFunc?
  ))} */}
  //array Peeps --check!
  //search/filter for peep we want --- check!
  //map an array from object of the filtered peep --next task
  //create line of html from each element of the array
  // for each element: <p>{element[0]}</p> looks like: element[0]=`${key}: ${value}`

  // example: char.map(object,index) => <each html>

//   <div className="joke" onClick={() => jokeSelectorFunc(id)}>
//   {/* The jokeSelectorFunc is being called with a props value as an argument - cool!  It's also wrapped in an arrow func... why?  Hint, in this situation, it's not because of 'this' */}
//   {isSelected?(<p><h1>{joke}</h1></p>):(<p>{joke}</p>)}
// </div>