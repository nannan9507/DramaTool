export const search = (s, p) => {
  let i = 0
  let j = 0
  while (i < s.length && j < p.length) {
    if (s[i] == p[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }

  if (j >= p.length) {
    return i - p.length
  }

  return -1
}