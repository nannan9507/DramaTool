export const setTime = (min, callback = () => {}) => {
  let count = min * 60 * 1000
  let endTime = +new Date() + count
  localStorage.setItem('timeup', endTime)
  const timer = setInterval(() => {
    count -= 1000
    if (count === 0) {
      clearInterval(timer)
      callback()
    }
  }, 1000)
}

export const restTime = (isFormat = true) => {
  const time = localStorage.getItem('timeup') || 0

  if (isFormat) {
    return console.log(time - (+new Date()))
  }

  return time - (+new Date())
}