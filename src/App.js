const Hello = (props) =>{
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = ()  =>{
  console.log('Hello from component')
  return (
    <>
    <h1>Greetings</h1>
    <Hello name="vignesh" />
    <Hello  />
    <Hello name="ddd" />
  </>
)
}

export default App
