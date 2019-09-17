import { render } from "../render/render"

export let state, reducer, tree

export const app = ($state, $component, $mount, $reducer, $tree) => {
  state = $state
  reducer = $reducer
  tree = $tree
  render($mount, $component({ state }))
}

export const updateState = newState => state = newState