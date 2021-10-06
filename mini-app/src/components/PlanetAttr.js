export default function CharAttr({ input }) {

  let attr = [];
  for (let i in input) {
    attr.push(`${i} : ${input[i]}`);
  }
  let filteredAttrs = [];
  if (attr !== []) {
    for (let j = 0; j < 9; j++) {
      filteredAttrs.push(attr[j]);
    }
  }

  return (<>
    {
      filteredAttrs.map((element, index) => (
        <li key={index}>
          {element}
        </li>
      ))
    }
  </>)
}