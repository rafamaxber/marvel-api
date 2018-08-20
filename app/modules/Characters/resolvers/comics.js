'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
var comicsData = [
  {
    id: 1,
    title: 'The Complete Node.js Developer comic',
    author: 'Andrew Mead, Rob Percival',
    description:
      'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/comics/nodejs/'
  },
  {
    id: 2,
    title: 'Node.js, Express & MongoDB Dev to Deployment',
    author: 'Brad Traversy',
    description:
      'Learn by example building & deploying real-world Node.js applications from absolute scratch',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/comics/nodejs-express-mongodb/'
  },
  {
    id: 3,
    title: 'JavaScript: Understanding The Weird Parts',
    author: 'Anthony Alicea',
    description:
      'An advanced JavaScript comic for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
    topic: 'JavaScript',
    url: 'https://codingthesmartway.com/comics/understand-javascript/'
  }
]
var getComic = function getComic(args) {
  var id = args.id
  return comicsData.filter(function(comic) {
    return comic.id == id
  })[0]
}
var getComics = function getComics(args) {
  if (args.topic) {
    var topic = args.topic
    return comicsData.filter(function(comic) {
      return comic.topic === topic
    })
  } else {
    return comicsData
  }
}
var root = {
  comic: getComic,
  comics: getComics
}

exports.default = root
