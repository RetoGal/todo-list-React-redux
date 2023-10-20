import { produce } from "immer"
import { ACTIONS } from "./actionsTypes"
import { createStore } from "redux"
import { createSelector } from "reselect"

const initialState = [
  {
    id: Math.round(1000 * Math.random()),
    name: "Learn JS",
    isComplated: false,
  },
  {
    id: Math.round(1000 * Math.random()),
    name: "Learn React",
    isComplated: false,
  },

  {
    id: Math.round(1000 * Math.random()),
    name: "Learn Redux",
    isComplated: false,
  },
]

const data = (state) => state

export const getState = createSelector([data], (state) => [...state])

export const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.addNewLine.type: {
        draft.push({
          id: Math.round(1000 * Math.random()),
          name: action.lineName,
          isComplated: false,
        })
        break
      }
      case ACTIONS.deletingList.type: {
        const { id } = action

        return draft.filter((item) => item.id !== id)
      }

      case ACTIONS.changeCheckbox.type: {
        const { id, isChecked } = action
        draft
          .filter((todo) => todo.id === id)
          .forEach((todo) => (todo.isComplated = isChecked))

        break
      }
      case ACTIONS.clearComplated.type: {
        return draft.filter((todo) => !todo.isComplated)
      }
      default:
        break
    }
  })
}

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)
