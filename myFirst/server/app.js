const express = require('express')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/', indexRouter);
// app.use('/',(req,res) => {
//   res.send('Yo!')
// })

app.use('/api', apiRouter);

//这里设置监听接口
app.listen(port,() => {
    console.log(`app listening on port ${port}.`)
})

module.exports = app