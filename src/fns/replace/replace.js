export const replace = (node1, node2) => {
  const parent = node1.parentNode
  parent.replaceChild(node2, node1)
}