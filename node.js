const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/api', (req, res) => {
  res.
  .json({ message: 'Hello from API!' })
}),l.,