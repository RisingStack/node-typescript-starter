const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`server is listening on ${port}`)
})
