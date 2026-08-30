//Reusable custom componant
function CoreConcept(props) {
  return (
        <li>
          <img src={props.img} alt='componant' />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </li>
  )
}

export default CoreConcept;