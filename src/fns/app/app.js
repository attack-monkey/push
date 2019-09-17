import { replace } from "../replace/replace"

export let state, reducer, tree

export const app = ($state, $component, $mount, $reducer, $tree) => {
  state = $state
  reducer = $reducer
  tree = $tree
  replace($mount, $component({ state }))
}

export const updateState = newState => state = newState