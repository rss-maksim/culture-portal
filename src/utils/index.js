export const capitalize = str => {
  if (typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const extractId = url => {
  const arr = url.split('/')
  return arr[arr.length - 1]
}
