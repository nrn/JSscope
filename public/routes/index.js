var f = require('flates')
  , scripts =
    [ '/dep/jquery.min.js'
    , '/dep/Bacon.min.js'
    , '/client.js'
    ]

module.exports = function () {
  return f.d() + scripts.map(function (script) {
    return f.script({ src: script })
  }).join('') +
  f.div(
    [ f.h1('JS scope')
    , 'An attempt to explain lexical, block level scope.'
    , f.aside({ class: 'warning'},
        [ 'This website is serving as a playground for some odd technology'
        , 'with the intention that it will one day be suitable for the purpose'
        , 'of learning about scope in JavaScript.'
        ].join(' ')
      )
    , f.div(
      [ "A quick overview of scope in JavaScript, we'll look at this all in"
      , 'detail in a second:'
      , 'Any variable available in the scope in which a function is declared'
      , 'is available inside that function. Declaring something new in a scope'
      , 'shadows any outer uses of the same name, rendering them unreachable.'
      , 'Functions are the only unit of scope, other blocks are part of the'
      , 'function they are contained within.'
      , 'All arguments to a function are declared inside that scope'
      , 'if they are set or not. Along with the magical "this" and'
      , '"arguments" variables.'
      ].join(' '))
    , f.div(
      [ 'One way to thing about scope is as a series of concentric circles'
      , 'with the inner circles able to acces the variables in all outer'
      , 'circles, but outer circles not able to get to the inner ones.'
      , 'These outer circles are always availible whenever the function'
      , 'is invoked, even if it has been returned out of the scope it'
      , 'was defined in. This is know as closure, and it allows many of'
      , 'the poweful abstractions used in JavaScript.'
      ].join(' '))
    ]
  )
}
