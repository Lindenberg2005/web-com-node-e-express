const express = require('express')
const app = express()

app.get('/headers', (req, res) => {
  res.type('text/plain')

  const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key}: ${value}`)
  res.send(req.headers)
  console.log(`${req.ip}, \n${req.hostname},\nbody: ${req.body},
  \nroute: ${req.route},\ncookies: ${req.cookies}, \nheaders: ${req.headers}, 
  \naccepts: ${req.accepts()}, \nxhr: ${req.xhr}. \nprotocolo: ${req.protocol},
  \nsercure: ${req.secure}, \nreq.url(path e query): ${req.url}, \nquery: ${req.query}`)

})



app.get('/headers/metodos', (req, res) => {
  res.type('text/plain')



  const metodos = [req.headers.host, req.url, req.query, req.ip, req.hostname, req.body,
  req.route.path, req.cookies, req.accepts(), req.xhr, req.protocol, req.secure, req.url, req.path]
  const metodosEntries = metodos.entries()

  



  const methods = []

  for (const iterator of metodosEntries) {
    methods.push(iterator)

  }
  const method = methods.map(([key, value]) => ` ${key}: ${value}`)
  
  
  

  const nomes = ['req.headers.host', 'req.url', 'req.query', 'req.ip', 'req.hostname', 'req.body',
    'req.route.path', 'req.cookies', 'req.accepts()', 'req.xhr', 'req.protocol', 'req.secure', 'req.url', 'req.path']
    const namesEntries = nomes.entries()

  const names = []

  for (const iterator of namesEntries) {
    names.push(iterator)

  }

  const n = names.map(([key,value]) => `${key}: ${value}`)

  const conj = {a:n, b:method}

  let conj2 = []
  conj2[0]=nomes.join('\n')
  conj2[1]=metodos.join('\n')

  
  

  res.send([conj.a.join('\n'), conj.b.join('\n')].join('\n'))
  //res.send(conj2.join('\n'))
  //res.send(method.join('\n'))
  //res.send(req.route)


})






const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}/headers\n`))