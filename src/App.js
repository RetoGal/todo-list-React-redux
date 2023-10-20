import { useSelector } from "react-redux"
import { getState } from "./store/reducer"
import { Form } from "./components/Form"
import * as Styled from "./styled"
import { TodoItem } from "./components/TodoItem"
import { Footer } from "./components/Footer"

function App() {
  const todos = useSelector(getState)

  return (
    <Styled.ToDoListWrapper>
      <Form />

      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
      <Footer todos={todos} />
    </Styled.ToDoListWrapper>
  )
}

export default App
