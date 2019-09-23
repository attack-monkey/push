import { returnRouteObject } from '../return-route-object/return-route-object'
import { reducer, state, tree, updateState } from '../app/app'

export const goto = path => {
  history.pushState(undefined, '', path)
  const oldState = JSON.parse(JSON.stringify(state))
  const route = returnRouteObject()
  const action = { type: 'ROUTE_CHANGE', route }
  updateState(
    Object.assign({}, reducer(state, action), { route })
  )
  tree(oldState, state, action)
}