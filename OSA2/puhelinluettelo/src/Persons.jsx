const Persons = (props) => {
  return (
    <div>
      {props.persons.map(person =>
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => props.onDelete(person)}>delete</button>
        </p>
      )}
    </div>
  )
}

export default Persons