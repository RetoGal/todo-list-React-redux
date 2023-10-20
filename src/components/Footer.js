import { useDispatch } from "react-redux"
import * as Styled from "./styled"
import { clearCompalted } from "../store/actions"

export const Footer = ({ todos }) => {
  const dispatch = useDispatch()

  const numberOfCompleted = todos.filter(
    (todo) => todo.isComplated === true
  ).length

  const onClear = () => {
    dispatch(clearCompalted())
  }

  return (
    <Styled.Footer>
      <Styled.BadgeOfCompletion>
        {numberOfCompleted} / {todos.length} Complated
      </Styled.BadgeOfCompletion>
      <Styled.ClearBTN onClick={onClear}>Clear complated</Styled.ClearBTN>
    </Styled.Footer>
  )
}
