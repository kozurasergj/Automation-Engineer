function projectObject(source, prototype) {
  const result = {}

  for (const key in prototype) {
    if (typeof prototype[key] === 'object' && prototype[key] !== null) {
      result[key] = projectObject(source[key] || {}, prototype[key])
    } else {
      result[key] = source[key] !== undefined ? source[key] : null
    }
  }

  return result
}

const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
}

const proto = {
  prop11: {
    prop22: null,
  },
}

const result = projectObject(src, proto)
console.log(result)
