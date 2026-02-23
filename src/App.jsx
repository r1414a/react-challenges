import './App.css'
import Accordian from './challenges/beginner/accordian/Accordian'
import Counter from './challenges/beginner/counter/Counter'
import StarRating from './challenges/beginner/start-rating-hover/StarRating'
import Toggle from './challenges/beginner/toggle/Toggle'
import FetchAndDisplay from './challenges/intermediate/fetch-and-display/FetchAndDisplay'
import TodoApp from './challenges/intermediate/todo-app/TodoApp'

function App() {

  return (
    <section>
      {/* <Counter initialValue={0}/>
      <Counter initialValue={7} min={5} max={10}/> */}
      {/* <Toggle/> */}
      {/* <StarRating/> */}
      {/* <Accordian/> */}
      {/* <TodoApp/> */}
      <FetchAndDisplay/>
    </section>
  )
}

export default App
