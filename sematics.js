// new
> new('')
TypeError: string is not a function
    at repl:1:2
    at REPLServer.self.eval (repl.js:110:21)
    at Interface.<anonymous> (repl.js:239:12)
    at Interface.emit (events.js:95:17)
    at Interface._onLine (readline.js:202:10)
    at Interface._line (readline.js:531:8)
    at Interface._ttyWrite (readline.js:760:14)
    at ReadStream.onkeypress (readline.js:99:10)
    at ReadStream.emit (events.js:98:17)
    at emitKey (readline.js:1095:12)
> new Function
[Function]
> new(Function)
[Function]
> new(function(){})
{}
> var s=new(function(){})
undefined
> s
{}