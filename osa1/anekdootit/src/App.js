import { useState } from 'react'

const Button =({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const length = anecdotes.length
  // Taulukon alustus nolliksi kurssimateriaalissa olleen stackoverflow-linkin mukaan
  const points = Array.apply(null, new Array(length)).map(Number.prototype.valueOf, 0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [highest, setHighest] = useState()

  
  const nextAnecdote = () => {
    const rand = Math.floor(Math.random() * length)
    console.log(length, rand)
    setSelected(rand) 
  }
  
  const voteAnecdote = () => {
    const points = [...votes]
    points[selected] += 1
    const high = points.indexOf(Math.max(...points))
    setVotes(points)
    setHighest(high)
    const list = points.join(' ')
    console.log(list)
  }

  const PrintVotes = () => {
    const points = [...votes]
    const value2 = points[selected]
    return (
    <div>
      <p>has {value2} votes</p>
    </div>
    )
  }

  return (
    <div>
      <Header name="Anecdote of the day" />
      {anecdotes[selected]}
      <br />
      <PrintVotes />
      <Button handleClick={voteAnecdote} text='vote'/>
      <Button handleClick={nextAnecdote} text='next anecdote'/>
      <Header name="Anecdote with most votes" />
      <div>{anecdotes[highest]}</div>
    </div>
  )
}

export default App