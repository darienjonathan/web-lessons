const counterElement = document.getElementById('counter')

const store = {
  count: 0
}

const proxyHandler = {
  set(obj, prop, value) {
    console.log(obj, prop, value)
    if (prop === 'count') {
      counterElement.innerHTML = `This Button is Clicked ${value} times.`
    }
    obj[prop] = value
    return true
  }
}

const proxy = new Proxy(store, proxyHandler)

document.querySelectorAll('button.pointer').forEach(el => {
  el.addEventListener('click', () => {
    console.log(proxy.count)
    proxy.count = proxy.count + 1
  })
})

proxy.count = 0
