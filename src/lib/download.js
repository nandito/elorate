export const download = (text, name, type) => {
  let a = document.createElement('a')
  var file = new Blob([text], {type: type})
  a.href = URL.createObjectURL(file)
  a.download = name
  a.click()
}
