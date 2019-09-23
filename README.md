# push

A micro front-end framework built for speed and purity

## intro

push is similar to react + redux, however there is no virtual dom diffing.   
Instead you have control over what components get rendered by using a treeReduce function - making things extremely fast.

push comes with:
- routing
- redux-like state management
- treeReduce re-rendering

## why push?

**speed**

diffing takes the previous vdom and the latest vdom, and diffs them to produce a series of DOM patches, These patches are then applied to the DOM.
This works well until there are a large number of list items to diff.
Things can theoretically begin to slow down at this point.

with push however, you are in complete control over how you wish to patch the DOM.
push is fast because:
- there is no fit-all diffing.
- there is no vdom - unless you want there to be.
- when you want to make changes to large lists, you can just replace, append, etc.

Check out the tutorial on building your tree-reduce function.

**purity**

push components are stateless functions - making them predictable, easy-to-test, easy-to-track. 
all state is managed by the state-reducer.

the state-reducer is a pure function - returning a new state whenever an action is dispatched.

all side effects are handled by treeReduce - since it has to handle mutations to the DOM anyway.

## install

The easiest way to install is to create a new project directory and then install from a seed project

javaScript

```
npx douglas get push-seed

```

typeScript

```
npx douglas get push-seed-ts

```
