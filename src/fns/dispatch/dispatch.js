import { updateState, tree, reducer, state } from "../app/app"

export const dispatch = (action) => {
  updateState(reducer(state, action))
  tree(state, action)
}