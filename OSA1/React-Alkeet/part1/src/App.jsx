const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = "Ronja"
  const ika = 26
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ]
  const neighbours = [ 'Saara', 'Eero']

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={nimi} age={ika} />    
      <Hello name="Kristiina" age={25 + 2} />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{neighbours}</p>
    </div>
  )
}

export default App