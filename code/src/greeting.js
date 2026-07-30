function greeting(name) {
  return `Hello, ${name}`
}

function farewell(name) {
  return `Goodbye, ${name}`
}

function normalizeName(name) {
  return name.trim().toLowerCase()
}

function initials(name) {
  return name.split(/\s+/).map((part) => part[0]).join('')
}

function wordCount(name) {
  return name.trim().split(/\s+/).length
}

function titleCase(name) {
  return name.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

module.exports = { greeting, farewell, normalizeName, initials, wordCount, titleCase }
