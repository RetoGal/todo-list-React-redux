import React from "react"
import { useDispatch } from "react-redux"
import { addNewLine } from "../store/actions"
import * as Styled from "./styled"

export const Form = () => {
  const dispatch = useDispatch()
  
  const onSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.lineName.value

    if (inputValue) dispatch(addNewLine(inputValue))
  }
  return (
    <Styled.Form
      onSubmit={onSubmit}
      type="submit"
    >
      <Styled.Input
        type="text"
        name="lineName"
      />
      <Styled.Button type="submit">Add</Styled.Button>
    </Styled.Form>
  )
}
