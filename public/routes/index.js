var f = require('flates')
  , scripts =
    [ '/dep/jquery.min.js'
    , '/dep/Bacon.min.js'
    , '/client.js'
    ]

module.exports = function () {
  return f.d() + f.link({href: '/style.css', rel: 'stylesheet' }) +
    f.div(
      [ f.h1('JS scope')
      , 'An attempt to explain lexical, block level scope.'
      , f.aside({ class: 'warning'},
          [ 'This website is serving as a playground for some odd technology'
          , 'with the intention that it will one day be suitable for the purpose'
          , 'of learning about scope in JavaScript.'
          ].join(' ')
        )
      , f.p(
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
      , f.p(
        [ 'One way to think about scope is as a series of concentric circles'
        , 'with the inner circles able to acces the variables in all outer'
        , 'circles, but outer circles not able to get to the inner ones.'
        , 'These outer circles are always availible whenever the function'
        , 'is invoked, even if it has been returned out of the scope it'
        , 'was defined in. This is know as closure, and it allows many of'
        , 'the poweful abstractions used in JavaScript.'
        ].join(' '))
      , f.p('Insert demo here')
      , f.p(
        [ 'The inner function can always acces the outer scope:'
        , f.pre({ class: 'example'},
          [ 'var a = 0'
          , 'function inner () {'
          , '  a += 1'
          , '}'
          , ''
          , 'inner()'
          , 'console.log(a) // 1'
          , 'inner()'
          , 'console.log(a) // 2'
          , 'inner()'
          , 'console.log(a) // 3'
          ].join('\n'))
        ].join(' '))
      , f.p(
        [ 'Inner scope shadows outer:'
        , f.pre({ class: 'example'},
          [ 'var a = 0'
          , 'function inner () {'
          , '  var a = 1'
          , '  console.log(a)'
          , '}'
          , ''
          , 'inner() // 1'
          , 'console.log(a) // 0'
          ].join('\n'))
        ].join(' '))
      , f.p(
        [ 'Closure:'
        , f.pre({ class: 'example'},
          [ ''
          , 'function inner () {'
          , '  var a = 0'
          , '  return function () {'
          , '    a += 1'
          , '    console.log(a)'
          , '  }'
          , '}'
          , ''
          , 'var b = inner()'
          , 'b() // 1'
          , 'b() // 2'
          , 'b() // 3'
          ].join('\n'))
        ].join(' '))
      , f.p(
        [ 'If a variable used, but not declared in a scope then'
        , 'it will be looked up in each outer scope until it is'
        , 'found and that one will be used. If it is not found then'
        , 'it will be automatically declared as a global variable.'
        ].join(' '))
      ]
    ) + scripts.map(function (script) {
      return f.script({ src: script })
    }).join('')
}
