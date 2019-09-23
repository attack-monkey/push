import { updateState, tree, reducer, state } from "../app/app"

export const push = (action) => {
  const oldState = JSON.parse(JSON.stringify(state))
  updateState(reducer(state, action))
  tree(oldState, state, action)
}