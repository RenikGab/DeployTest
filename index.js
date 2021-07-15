const express = require("express")
const app = express()
const PORT = process.env.PORT || 80

app.get(('/'), (req, res) => {  
  res.end(`
    <div>
      <a href = "/">Home</a>
      <a href = "/about">About</a>
      <h1>Hi from server</h1>
    </div>
  `)
})

app.get(('/about'), (req, res) => {  
  res.end(`
    <div>
      <a href = "/">Home</a>
      <a href = "/about">About</a>
      <h1>About</h1>
    </div>
  `)
})

app.listen(PORT, () => {
  console.log("hi from server ")
})