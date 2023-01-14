// navigation

let isNavigationActive = false
const hamburgerButtonEl = document.querySelector('#hamburger-button')
const navEl = document.querySelector('#nav')

hamburgerButtonEl.addEventListener("click", () => {
  isNavigationActive = !isNavigationActive
  hamburgerButtonEl.dataset.active = isNavigationActive
  navEl.dataset.active = isNavigationActive
}, false)

const getNavigationElement = (id) => document.querySelector(`#nav__${id}`)
const getArticleElement = (id) => document.querySelector(`#article__${id}`)
const navigationElements = {
  definition: getNavigationElement('definition'),
  history: getNavigationElement('history'),
  usage: getNavigationElement('usage'),
  example: getNavigationElement('example'),
}

const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'))
const offset = headerHeight + 10

Object.keys(navigationElements).forEach(key => {
  navigationElements[key].addEventListener('click', () => {
    const articleTop = getArticleElement(key).offsetTop
    scrollTo({ top: articleTop - offset, behavior: 'smooth' })
    hamburgerButtonEl.dispatchEvent(new Event('click'))
  })
})

// show example

let isShown = false
const asideEl = document.querySelector('#aside')
const showButtonEl = document.querySelector('#show-button')

showButtonEl.addEventListener('click', (e) => {
  isShown = !isShown
  e.target.innerHTML = `${(isShown ? 'Hide' : 'Show')} Lorem Ipsum`
  asideEl.dataset.active = isShown
})
