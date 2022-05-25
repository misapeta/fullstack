const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]
}
  const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.name}</h1>
    )
  }

  
  const Part = (props) => {
    console.log(props.name)
    return (
      <>
        <p>{props.name} {props.exercises}</p>
      </>
    )
  }

  const Content = (props) => (
    props.parts.map(item => <Part name={item.name} exercises={item.exercises} />)
   )


  const Total = () => {
    let sum = 0
    let exer = course.parts
    exer.forEach(value => sum += value.exercises)
    console.log(sum)
    return (
      <div>
        <p>Number of exercises: {sum}</p>
      </div>
    )
    }

  return (
    <div>
      <Header name={course.name} />
      <Content parts ={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}


export default App;
