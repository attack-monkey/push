let urlOffset = 0

export const offsetRouteObject = amount => urlOffset = amount

const getSearchFromHash = hash => {
  const hashMatchArray = hash.match(/\?[^]*/)
  return hashMatchArray && Array.isArray(hashMatchArray) ? hashMatchArray[0] : undefined
}

const extractQueryString = string => {
  try {
    return string
      .match(/(&|\?)[^&]*|(&|\?)[^\n]/g)
      .map(qs => qs.replace(/\?|&/g, ''))
      .reduce(
        (ac, qs) =>
          Object.assign({}, ac, { [qs.split('=')[0]]: qs.split('=')[1] }),
        {}
      )
  } catch (e) {
    return undefined
  }
}

const extractQueryStringFromSearch = () => extractQueryString(window.location.search)
const extractQueryStringFromHash = () => extractQueryString(getSearchFromHash(window.location.hash))
const queryString = () => extractQueryStringFromSearch() || extractQueryStringFromHash()

export const returnRouteObject = () => {
  const pathArrayStep1 = window.location.pathname.split('/')
  const lastKey = pathArrayStep1.length -1
  // if last path array item is '' then remove it
  const pathArrayStep2 = pathArrayStep1[lastKey] === '' ? pathArrayStep1.slice(0, lastKey) : pathArrayStep1
  const pathArrayStep3 = pathArrayStep2.slice(urlOffset)
  const hashArrayStep1 = window.location.hash
  .replace(/\?[^]*/, '')
  .replace('#/', '')
  .split('/')
  const hashArrayStep2 =
    hashArrayStep1.length === 1 && hashArrayStep1[0] === ""
      ? []
      : hashArrayStep1
  const segments = pathArrayStep3.concat(hashArrayStep2)
  return {
    segments,
    queryString: queryString()
  }
}