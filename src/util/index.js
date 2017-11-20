/**
 * 将location的search参数 转化为 键值对的对象结构
 * 
 * @param {string} search 
 * @returns {{[key: string]: string}} 
 */
function objFrom(search) {
  if (!search) {
    return {}
  }

  const arr = search.slice(1).split('&')
  return arr.reduce((accu, curr) => {
    const [key, val] = curr.split('=')
    if (accu[key]) {
      accu[key] = [accu[key], val]
    } else {
      accu[key] = val
    }

    return accu
  }, {})
}

export { objFrom }
