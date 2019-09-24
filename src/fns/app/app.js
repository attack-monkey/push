import { replace } from '../replace/replace'
import { offsetRouteObject, returnRouteObject } from '../return-route-object/return-route-object'

export let state, reducer, tree

const updateStateAndRender = (action) => {
  const oldState = JSON.parse(JSON.stringify(state))
  const route = returnRouteObject()
  updateState(
    Object.assign({}, reducer(state, action), { route })
  )
  tree(oldState, state, action)
}

export const app = ($state, $component, $mount, $reducer, $tree, $options) => {
  void (offsetRouteObject($options && $options.urlOffset))
  state = { ...$state, route: returnRouteObject() }
  reducer = $reducer
  tree = $tree

  window.onpopstate = () => {
    updateStateAndRender({ type: 'ROUTE_CHANGE', route: returnRouteObject()})
  }
  window.onhashchange = () => {
    updateStateAndRender({ type: 'ROUTE_CHANGE', route: returnRouteObject()})
  }

  replace($mount, $component({ state }))
}

export const updateState = newState => state = newState