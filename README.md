# push
A micro front-end framework built for speed and purity

## intro

push is similar to react + redux, however there is no virtual dom diffing.  
where other frameworks are trying to build the fastest virtual dom diffing, push simply doesn't play the game.  
Instead you have control over what components get rendered by using a treeReduce function.

## hyperscript vs jsx syntax

push was written to be template-syntax agnostic, however was developed using hyperscript.  
hyperscript should be able to be swapped out for something like jsx / tsx.
