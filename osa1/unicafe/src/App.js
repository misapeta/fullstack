import { useState } from "react"


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}


const StatisticLine = ({ text, value, unit }) => (
  <tr>
    <td>{text}</td><td>{value} {unit}</td>
  </tr>
)


const Statistics = ({good, neutral, bad, all}) => {
  if (all !== 0) {
    let decrease = good - bad
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={(decrease/all).toFixed(1)} />
          <StatisticLine text="positive" value={(good/all *100).toFixed(1)} unit="%" />
        </tbody>
      </table>
    )
  }
  return (
    <div>No feedback given</div>
  )
}

/**App */
const App = () => {
  const [good, setGood] = useState(0) // laskee hyvät,
  const [neutral, setNeutral] = useState(0) // neutraalit ja
  const [bad, setBad] = useState(0) // huonot palautteet
  const [all, setAll] = useState(0) // kaikki palautteet talteen
 
  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <Header name="give feedback" />       
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <br />
        <Header name="statistics" />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all} />
      </div>
    </div>
  )
}


export default App;