import React from "react"
import { useDispatch } from "react-redux"
import { changeCheckbox } from "../store/actions"

export const CustomCheckbox = ({ id, isChecked }) => {
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(changeCheckbox(id, !isChecked))
  }

  return (
    <input
    key={id * Math.random()}
      onChange={onChange}
      type="checkbox"
      checked={isChecked}
    />
  )
}
