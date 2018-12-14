var co = console.log

co('123: ',isNaN(123))
co('"123": ',isNaN('123'))
co('"abc": ',isNaN('abc'))
co('"0b11": ',isNaN('0b11'))
co('true: ',isNaN(true))
co('null: ',isNaN(null))
co('undefined: ',isNaN(undefined))