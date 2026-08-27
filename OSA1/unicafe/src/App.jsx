import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  if (all === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <All good={props.good} neutral={props.neutral} bad={props.bad}/>
      <Average good={props.good} neutral={props.neutral} bad={props.bad}/>
      <Positive good={props.good} neutral={props.neutral} bad={props.bad}/>
    </>
  )
}

const All = (props) => {
  return (
    <p>all {props.good + props.neutral + props.bad}</p>
  )
}

const Average = (props) => {
  let all = props.good + props.neutral + props.bad
  let percentage = all === 0 ? 0 : (props.good * 1 + props.neutral * 0 + props.bad * -1) / all
  return (
    <p>average {percentage}</p>
  )
}

const Positive = (props) => {
  let all = props.good + props.neutral + props.bad
  let percentage = all === 0 ? 0 : (props.good / all) * 100
  return (
    <p>positive {percentage}</p>
  )
}

export default App