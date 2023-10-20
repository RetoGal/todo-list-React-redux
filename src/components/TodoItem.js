import { useDispatch } from "react-redux"
import * as Styled from "./styled"
import { deletingList } from "../store/actions"
import { CustomCheckbox } from "./CustomCheckbox"

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const onDelete = (e) => dispatch(deletingList(parseInt(e.target.id)))

  return (
    <Styled.LineWrapper key={todo.id}>
      <CustomCheckbox
        isChecked={todo.isComplated}
        id={todo.id}
      />
      <Styled.List key={todo.id * Math.random()}>{todo.name}</Styled.List>
      <Styled.DeleteBTN
        key={todo.id * Math.random()}
        onClick={onDelete}
        id={todo.id}
      >
        X
      </Styled.DeleteBTN>
    </Styled.LineWrapper>
  )
}
