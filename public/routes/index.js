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
    ]
  )
}
