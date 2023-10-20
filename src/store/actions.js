import { ACTIONS } from "./actionsTypes";

export const addNewLine = (lineName) => ({
  type: ACTIONS.addNewLine.type,
  lineName
})


export const deletingList = (id) => ({
  type: ACTIONS.deletingList.type,
  id
})


export const changeCheckbox = (id, isChecked) => ({
  type: ACTIONS.changeCheckbox.type,
  id,
  isChecked,
  
})


export const clearCompalted = () => ({
  type: ACTIONS.clearComplated.type,
  
})
